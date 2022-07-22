---
title: 'Views - introduction'
sidebar_label: 'Views - introduction'
sidebar_position: 1
id: views-intro
---

[Introduction](/database/fields-tables-views/views/)  | [Basics](/database/fields-tables-views/views/views-basics/) |  [Advanced](/database/fields-tables-views/views/views-advanced/) | [Examples](/database/fields-tables-views/views/views-examples/) 

When you set up a data model, it implies relationships between tables. For example, a TRADE has a COUNTERPARTY_ID and an INSTRUMENT_ID. That means it has a relationship with the COUNTERPARTY and INSTRUMENTS tables.

Views enable you join related tables to create a single holistic view.

They are a lot more powerful than this in practice; they underpin many Genesis components that read data from the database in real time or in static form.

The example below creates a view called `TRADE_VIEW`, which joins the `TRADE` table to the `INSTRUMENT` table.

```kotlin
views {

  view("TRADE_VIEW", TRADE) {

    joins {
      joining(COUNTERPARTY) {
        on(TRADE.COUNTERPARTY_ID to COUNTERPARTY { COUNTERPARTY_ID })
      }
      joining(INSTRUMENT) {
        on(TRADE.INSTRUMENT_ID to INSTRUMENT { INSTRUMENT_ID })
      }
    }

    fields {
      TRADE.allFields()

      COUNTERPARTY.NAME withPrefix COUNTERPARTY
      INSTRUMENT.NAME withPrefix INSTRUMENT
      INSTRUMENT.CURRENCY_ID withAlias "CURRENCY"

      derivedField("CONSIDERATION", DOUBLE) {
        withInput(TRADE.QUANTITY, TRADE.PRICE) { QUANTITY, PRICE ->
          QUANTITY * PRICE
        }
      }
    }
  }
}
```

Views are defined in the file _application-name_**-view-dictionary.kts**. 

So, if your application is called **position**, then the file name will be **position-view-dictionary.kts**.







