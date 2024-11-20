---
format: md
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@genesislcap/foundation-comms](./foundation-comms.md) &gt; [DefaultDatasource](./foundation-comms.defaultdatasource.md)

## DefaultDatasource class

The default implementation for the Datasource interface.

**Signature:**

```typescript
export declare class DefaultDatasource implements Datasource 
```
**Implements:** [Datasource](./foundation-comms.datasource.md)

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(connect, auth, resources, config)](./foundation-comms.defaultdatasource._constructor_.md) |  | Constructs a new instance of the <code>DefaultDatasource</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [allParams](./foundation-comms.defaultdatasource.allparams.md) | <code>readonly</code> | any |  |
|  [auth](./foundation-comms.defaultdatasource.auth.md) | <code>protected</code> | [Auth](./foundation-comms.auth.md) |  |
|  [availableIndexes](./foundation-comms.defaultdatasource.availableindexes.md) |  | [IndexDetail](./foundation-comms.indexdetail.md)\[\] |  |
|  [config](./foundation-comms.defaultdatasource.config.md) | <code>protected</code> | [DatasourceConfig](./foundation-comms.datasourceconfig.md) |  |
|  [connect](./foundation-comms.defaultdatasource.connect.md) | <code>protected</code> | [Connect](./foundation-comms.connect.md) |  |
|  [customRequestFields](./foundation-comms.defaultdatasource.customrequestfields.md) |  | [MetadataDetail](./foundation-comms.metadatadetail.md)\[\] |  |
|  [dataserverParams](./foundation-comms.defaultdatasource.dataserverparams.md) | <code>readonly</code> | [DataserverParams](./foundation-comms.dataserverparams.md) |  |
|  [fetchMetadataRequired](./foundation-comms.defaultdatasource.fetchmetadatarequired.md) |  | boolean |  |
|  [fieldMetadata](./foundation-comms.defaultdatasource.fieldmetadata.md) |  | [FieldMetadata](./foundation-comms.fieldmetadata.md)\[\] |  |
|  [initialized](./foundation-comms.defaultdatasource.initialized.md) | <code>readonly</code> | boolean | Indicates whether the datasource has been initialized. |
|  [options](./foundation-comms.defaultdatasource.options.md) | <code>protected</code> | [DatasourceOptions](./foundation-comms.datasourceoptions.md) |  |
|  [originalFieldDef](./foundation-comms.defaultdatasource.originalfielddef.md) |  | [MetadataDetail](./foundation-comms.metadatadetail.md)\[\] |  |
|  [readOnly](./foundation-comms.defaultdatasource.readonly.md) |  | boolean |  |
|  [requestFields](./foundation-comms.defaultdatasource.requestfields.md) |  | [MetadataDetail](./foundation-comms.metadatadetail.md)\[\] |  |
|  [requestParams](./foundation-comms.defaultdatasource.requestparams.md) | <code>readonly</code> | [RequestParams](./foundation-comms.requestparams.md) |  |
|  [resources](./foundation-comms.defaultdatasource.resources.md) | <code>protected</code> | [GenesisResources](./foundation-comms.genesisresources.md) |  |
|  [resourceType](./foundation-comms.defaultdatasource.resourcetype.md) |  | [ResourceType](./foundation-comms.resourcetype.md) |  |
|  [startStreamRequired](./foundation-comms.defaultdatasource.startstreamrequired.md) |  | boolean |  |
|  [status](./foundation-comms.defaultdatasource.status.md) |  | [DatasourceStatus](./foundation-comms.datasourcestatus.md) |  |
|  [stream](./foundation-comms.defaultdatasource.stream.md) |  | [SocketObservable](./foundation-comms.socketobservable.md)&lt;[FilteredDataServerResult](./foundation-comms.filtereddataserverresult.md) \| [RequestServerResult](./foundation-comms.requestserverresult.md)&gt; |  |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [destroy()](./foundation-comms.defaultdatasource.destroy.md) |  | Destroys the datasource. |
|  [fetchAndApplyMetadata(resourceName)](./foundation-comms.defaultdatasource.fetchandapplymetadata.md) | <code>protected</code> |  |
|  [init(options, fetchMeta, startStream)](./foundation-comms.defaultdatasource.init.md) |  |  |
|  [snapshot(overrideParams)](./foundation-comms.defaultdatasource.snapshot.md) |  |  |
|  [snapshotFiltered(rowId)](./foundation-comms.defaultdatasource.snapshotfiltered.md) |  |  |
|  [startStream()](./foundation-comms.defaultdatasource.startstream.md) |  |  |
|  [validResourceName(resourceName)](./foundation-comms.defaultdatasource.validresourcename.md) |  |  |
