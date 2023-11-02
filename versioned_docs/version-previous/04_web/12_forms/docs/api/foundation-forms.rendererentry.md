<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@genesislcap/foundation-forms](./foundation-forms.md) &gt; [RendererEntry](./foundation-forms.rendererentry.md)

## RendererEntry type


**Signature:**

```typescript
export type RendererEntry = {
    renderer: ViewTemplate<DispatchRenderer, any>;
    tester: RankedTester;
    mapper: (state: JsonFormsState, ownProps: OwnPropsOfControl) => StatePropsOfControl;
};
```