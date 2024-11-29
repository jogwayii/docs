---
format: md
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@genesislcap/foundation-store](./foundation-store.md) &gt; [Store](./foundation-store.store.md) &gt; [bindingAsRx](./foundation-store.store.bindingasrx_2.md)

## Store.bindingAsRx() method

**Signature:**

```typescript
bindingAsRx<TReturn>(getter: (store: this) => TReturn): RXObservable<TReturn>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  getter | (store: this) =&gt; TReturn | A function that returns a value from the store. |

**Returns:**

RXObservable&lt;TReturn&gt;

An rxjs Observable of the value.

## Example


```ts
const prop1$ = this.store.bindingAsRx(x => x.prop1).subscribe(value => {...});
```
