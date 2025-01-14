---
format: md
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@genesislcap/foundation-store](./foundation-store.md) &gt; [AbstractStore](./foundation-store.abstractstore.md) &gt; [createAsyncListener](./foundation-store.abstractstore.createasynclistener.md)

## AbstractStore.createAsyncListener property

Creates an async event listener.

**Signature:**

```typescript
protected createAsyncListener: <TDetail = void, TReturn = void>(keys: KeyOrKeys<TEventDetailMap & TInternalEventDetailMap>, token: (detail: TDetail, event?: CustomEvent<TDetail>) => Promise<TReturn>) => EventListener;
```

## Remarks

You can think of this like an `effect` in the redux sense. You should not commit values to the store in these, instead raise subsequent events to be handled synchronously, where commits are allowed.

## Example 1

Creating an interface defined handler for a single event key.

```ts
onDomainAction = this.createAsyncListener<DomainActionDetail>(
  'domain-action',
  async ({ id, message }) =>
    this.invokeAsyncAPI(
      async () => this.domainService.action(id, message),
      'domain-action-error',
      'domain-action-success'
    )
);
```

## Example 2

Creating an anonymous handler in the constructor for multiple event keys.

```ts
this.createAsyncListener(
  [
    'columns-changed',
    'types-changed',
    'max-rows-changed',
    'max-view-changed',
    'order-by-changed',
    'reverse-changed',
  ],
  async (_, { type }) => this.emit('domain-load')
);
```

