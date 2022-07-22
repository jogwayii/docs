---
title: 'Generic'
sidebar_label: 'Generic'
id: generic
---

Generic Write Result
====================

The entity database will return type-safe results for write operations. There are four main write results, one for each type of write operation. In all cases, the records in the result will be a generated entity that matches the input. So, for inserting a `Trade` instance, the database will return a result of type `InsertResult<Trade>` where the property `record` will be of type `Trade`.

-   `InsertResult`
-   `DeleteResult`
-   `ModifyResult`
-   `UpsertResult`; either a `InsertResult` or a `ModifyResult`

InsertResult[​](/database/helper-classes/write-results/generic/#insertresultdirect-link-to-heading)
--------------------------------------------------------------------------------------------------------------------------------------------------------------

The `InsertResult` has a single property `record` which is the inserted record. This includes any generated values.

DeleteResult[​](/database/helper-classes/write-results/generic/#deleteresultdirect-link-to-heading)
--------------------------------------------------------------------------------------------------------------------------------------------------------------

The `DeleteResult` has a single property `record` which is the record as it was in the database before it was deleted.

ModifyResult[​](/database/helper-classes/write-results/generic/#modifyresultdirect-link-to-heading)
--------------------------------------------------------------------------------------------------------------------------------------------------------------

The `ModifyResult` is slightly more complex. It has three properties:

-   a `record` property, which is the record in the database after the modify operation
-   a `previous` property, which is the record as it was *before* the modify operation
-   a `modifiedFields` property, which holds a `Set<String>` of the fields that were changed in the modify