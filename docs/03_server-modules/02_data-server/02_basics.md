---
title: 'Basics'
sidebar_label: 'Basics'
id: basics
---

[Introduction](/server-modules/data-server/introduction) | [Basics](/server-modules/data-server/basics) |  [Advanced](/server-modules/data-server/advanced) | [More examples](/server-modules/data-server/examples) | [Configuring runtime](/server-modules/data-server/configuring-runtime) | [Testing](/server-modules/data-server/testing)

Let's make things really simple.
- A Data Server is a component that supplies streaming real-time data to the front end of your application.
- You define your application's Data Server in a kotlin script file.
- In this file, you define specific `query` codeblocks, each of which is designed to supply different sets of data.
- Each `query` listens to a specified table or view; when data on that source changes, it publishes the changes. 
- A `query` can include a number of other subtleties, such as `where` clauses or ranges, so that you can create code that matches your precise requirements.
- If you use AppGen to build from your dictionary, then a basic kts file will be built automatically for you, covering all the tables and views in your data model. You can edit this file to add sophistication to the component.
- Otherwise, you can build your kts by defining each `query` codeblock from scratch. 


## The simplest possible definition

Your kotlin script file contains all the queries you create. These are wrapped in a single `dataServer` statement.
Our example below shows a file with a single query, which publishes changes to the table INSTRUMENT_DETAILS.


```kotlin
dataServer {
    query(INSTRUMENT_DETAILS)
}
```

And here is a simple example that has two queries:

Note that each query is subscribed to separately.

```kotlin
dataServer {
    query(INSTRUMENT_DETAILS)

    query(COUNTERPARTY)
}
```

## Specifying fields

By default, all table or view fields in a query definition will be exposed. If you don't want them all to be available, you must define the fields that are required. In the example below, we specify eight fields:

```kotlin
dataServer {
    query(INSTRUMENT_DETAILS) {
        fields {
            INSTRUMENT_CODE
            INSTRUMENT_ID
            INSTRUMENT_NAME
            LAST_TRADED_PRICE
            VWAP
            SPREAD
            TRADED_CURRENCY
            EXCHANGE_ID
        }
    }
}
```

## Derived fields

You can also define derived fields in a Data Server, to supplement the fields supplied by the table or view. The input for the derived field is the Data Server query row.  All fields are available for use.

In the example below, we add a ninth field to our Data Server from the previous example. The new field is a derived field:

```kotlin
dataServer {
    query(INSTRUMENT_DETAILS) {
        fields {
            INSTRUMENT_CODE
            INSTRUMENT_ID
            INSTRUMENT_NAME
            LAST_TRADED_PRICE
            VWAP
            SPREAD
            TRADED_CURRENCY
            EXCHANGE_ID
            derivedField("IS_USD", BOOLEAN) {
                tradedCurrency == "USD"
            }
        }
    }
}
```

## Configuration settings

Before you define any queries, you can make configuration settings for the Data Server within the `config` block. These control the overall behaviour of the Data Server.

Here is an example of some configuration settings: 

```kotlin
dataServer {
    config {
        lmdbAllocateSize = 512.MEGA_BYTE() // top level only setting
        // Items below can be overriden in individual query definitions
        compression = true 
        chunkLargeMessages = true
        defaultStringSize = 40
        batchingPeriod = 500
        linearScan = true
        excludedEmitters = listOf("PurgeTables")
        enableTypeAwareCriteriaEvaluator = true
    }
    query("SIMPLE_QUERY", SIMPLE_TABLE) {
        config {
            // Items below only available in query level config
            defaultCriteria = "SIMPLE_PRICE > 0"
            backwardsJoins = false
            disableAuthUpdates = false
        }
    }
}
```

Below, we shall examine the settings that are available for your `config` statement.

### Global settings

Global settings can be applied at two levels:

- Top level
- Query level


### Top-level global setting

`lmdbAllocateSize`
This sets the size of the memory-mapped file where the in-memory cache stores the Data Server query rows. This configuration setting can only be applied at the top level. It affects the whole Data Server. 

By default, the size is defined in bytes. To use MB or GB, use the `MEGA_BYTE` or `GIGA_BYTE` functions. You can see these in the example below. The default is 2 GB.

```kotlin
lmdbAllocateSize = 2.GIGA_BYTE()
// or
lmdbAllocateSize = 512.MEGA_BYTE()
```

### Query-level global settings
The following settings can be applied at a query-level

`defaultCriteria`
This represents the default criteria for the query. Defaults to `null`.

 `disableAuthUpdates`
This disables real-time auth updates in order to improve the overall data responsiveness and performance of the server. Defaults to `false`.

`backJoins`
Seen in older versions of the platform, this has been replaced by `backwardsJoins`. It is functionally the same.

`backwardsJoins`
This enables backwards joins on a view query. Backwards joins ensure real-time updates on the fields that have been joined. These need to be configured at the join level of the query in order to work correctly. Defaults to `true`.

### Shared settings

`compression`
If this is set to `true`, it will compress the query row data before writing it to the in-memory cache. Defaults to `false`.

`chunkLargeMessages`
If this is set to true, it will split large updates into smaller ones. Defaults to `false`.

`defaultStringSize`
This is the size to be used for string storage in the Data Server in-memory cache. Higher values lead to higher memory use and lower values lead to truncation. Defaults to `40`.

`batchingPeriod`
This is the delay in milliseconds to wait before sending new data to data-server clients. Defaults to `500ms`.

`linearScan`
This enables linear scan behaviour in the query definition. If false, it will reject criteria expressions that don't hit defined indexes. Defaults to `true`.

`excludedEmitters`
This enables update filtering for a list of process names. Any database updates that originate from one of these processes will be ignored. Defaults to an empty list.

`enableTypeAwareCriteriaEvaluator`
This enables the type-aware criteria evaluator. Defaults to `false`. 

The type-aware criteria evaluator can automatically convert criteria comparisons that don't match the original type of the Data Server field; these can still be useful to end users.

For example, you might want a front-end client to perform a criteria search on a `TRADE_DATE` field like this: `TRADE_DATE > '2015-03-01' && TRADE_DATE < '2015-03-02'`. 
This search can be translated automatically to the right field types internally (even though `TRADE_DATE` is a field of type `DateTime`). The Genesis index search mechanism can also identify the appropriate search intervals in order to provide an optimised experience.
The type-aware evaluator can transform strings to integers, and any other sensible and possible conversion (e.g `TRADE_ID == '1'`). As a side note, this type-aware evaluator is also available in `DbMon` for operations like `search` and `qsearch`.

By contrast, the traditional criteria evaluator needs the field types to match the query fields in the Data Server. So the same comparison using the default criteria evaluator for `TRADE_DATE` would be something like: `TRADE_DATE > new DateTime(1425168000000) && TRADE_DATE < new DateTime(1425254400000)`. This approach is less intuitive and won't work with our automatic index selection mechanism. In this case, you should use our common date expressions(more at Advanced technical details) to handle date searches.

## Backwards joins

Each query in a Data Server creates what is effectively an open connection between each requesting user and the Data Server. After the initial send of all the data, the Data Server only sends modifications, deletions and insertions in real time.

For queries with backwards joins enabled, the primary table and all joined tables and views are actively monitored. Any changes to these tables and views are sent automatically.

Monitoring of backwards joins can come at a cost, as it can cause significant extra processing. Do not use backwards joins unless there is a need for the data in question to be updated in real time. For example, counterparty data, if changed, can wait until overnight. The rule of thumb is that you should only use backwards joins where the underlying data is being updated intraday.

The backwards join flag is true by default. You must explicitly set `backwardsJoins = false` if you wish to turn backwards joins off for your query.

## Where clauses

If you include a `where` clause in a query, the request is only processed if the criteria specified in the clause are met. For example, If you have an application that deals with derivatives that have parent and child trades, you can use a `where` clause to confine the query to parent trades only.

Also, you can use these clauses to focus on a specific set of fields or a single field.

Finally, note that `where` clauses can also be used for permissioning. In the below example, users that have the TRADER or SUPPORT permission code are able to see all trades that meet the where condition.

```kotlin
dataServer {

    query("ALL_TRADES_LARGE_POSITION", ENHANCED_TRADE_VIEW) {
        permissioning {
            permissionCodes = listOf("TRADER", "SUPPORT")
            auth(mapName = "ENTITY_VISIBILITY") {
                ENHANCED_TRADE_VIEW.COUNTERPARTY_ID
            }
        }
        where { trade -> 
            (trade.quantity * trade.price) > 1000000 
        }
    }
}
```

## Indices

Here is an example of a simple index:

```kotlin
dataServer {
    query("SIMPLE_QUERY", SIMPLE_TABLE) {
        indices {
            unique("SIMPLE_QUERY_BY_QUANTITY") {
                QUANTITY
                SIMPLE_ID
            }
        }
    }
}
```

### Index definition
The `indices` (optional) block defines additional indexing at the query level. When an index is used, it will order all query rows by the fields specified, in ascending order. This definition is identical to the one defined in data modelling for dictionary tables.

There are two scenarios in which an index can be used:
* Optimising query criteria search. If a Data Server client specifies criteria such as `QUANTITY > 1000 && QUANTITY < 5000`, the Data Server will automatically select the best matching index. In our example, it would be `SIMPLE_QUERY_BY_QUANTITY`. This means we don't need to scan all the query rows stored in the Data Server memory-mapped file cache; instead, we perform a very efficient indexed search.
* Index specified in the Data Server client. If an `ORDER_BY` value is received as part of the `DATA_LOGON` process, the Data Server will use a specific index to query the data. The data will be returned to the client in ascending order, based on the index field definition. See more at Advanced technical details.

*Important*: Index definitions are currently limited to *unique* indices. As quantity does not have a unique constraint in the example definition shown above, we need to add SIMPLE_ID to the index definition to ensure we maintain uniqueness.