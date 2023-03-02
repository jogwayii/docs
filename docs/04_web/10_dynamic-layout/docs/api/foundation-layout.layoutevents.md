<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@genesislcap/foundation-layout](./foundation-layout.md) &gt; [LayoutEvents](./foundation-layout.layoutevents.md)

## LayoutEvents variable

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

Defines events that the layout system emits

'first-loaded' - emitted when the layout has finished loading the first time using the declarative API after [DEFAULT\_RELOAD\_BUFFER](./foundation-layout.default_reload_buffer.md) ms. <br/> 'item-added' - emitted when an item is added to the layout' <br/> 'item-removed' - emitted when an item is removed from the layout'

**Signature:**

```typescript
LayoutEvents: {
    readonly 'first-loaded': "first-loaded";
    readonly 'item-added': "item-added";
    readonly 'item-removed': "item-removed";
}
```