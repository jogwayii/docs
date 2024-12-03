---
format: md
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@genesislcap/foundation-comms](./foundation-comms.md) &gt; [ConnectEventsEmitter](./foundation-comms.connecteventsemitter.md)

## ConnectEventsEmitter interface

`ConnectEventsEmitter` provide event emitting hooks to Connect.

**Signature:**

```typescript
export interface ConnectEventsEmitter extends ConnectEvents 
```
**Extends:** [ConnectEvents](./foundation-comms.connectevents.md)

## Methods

|  Method | Description |
|  --- | --- |
|  [onCommitEvent(eventName, message)](./foundation-comms.connecteventsemitter.oncommitevent.md) | Called by Connect. |
|  [onMetadataEvent(resourceName, message, error)](./foundation-comms.connecteventsemitter.onmetadataevent.md) | Called by Connect. |
|  [onStreamCompleteEvent(resourceName, stream)](./foundation-comms.connecteventsemitter.onstreamcompleteevent.md) | Called by Connect. |
|  [onStreamErrorEvent(resourceName, stream, error)](./foundation-comms.connecteventsemitter.onstreamerrorevent.md) | Called by Connect. |
|  [onStreamEvent(resourceName, message, stream, functions)](./foundation-comms.connecteventsemitter.onstreamevent.md) | Called by Connect. |
