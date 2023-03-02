<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@genesislcap/foundation-layout](./foundation-layout.md) &gt; [LayoutEmitEvents](./foundation-layout.layoutemitevents.md)

## LayoutEmitEvents variable

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

Defines events that the layout system emits

'firstLoaded' - emitted when the layout has finished loading the first time using the declarative API after [DEFAULT\_RELOAD\_BUFFER](./foundation-layout.default_reload_buffer.md) ms. <br/> 'itemAdded' - emitted when an item is added to the layout' <br/> 'itemRemoved' - emitted when an item is removed from the layout'

**Signature:**

```typescript
LayoutEmitEvents: {
    readonly firstLoaded: "first-loaded";
    readonly itemAdded: "item-added";
    readonly itemRemoved: "item-removed";
}
```