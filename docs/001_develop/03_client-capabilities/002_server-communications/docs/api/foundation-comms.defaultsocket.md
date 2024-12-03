---
format: md
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@genesislcap/foundation-comms](./foundation-comms.md) &gt; [DefaultSocket](./foundation-comms.defaultsocket.md)

## DefaultSocket class

Default Socket implementation.

**Signature:**

```typescript
export declare class DefaultSocket implements Socket 
```
**Implements:** [Socket](./foundation-comms.socket.md)

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(messageBuilder, session, serializer, uuid, status, user, config)](./foundation-comms.defaultsocket._constructor_.md) |  | Constructs a new instance of the <code>DefaultSocket</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [config](./foundation-comms.defaultsocket.config.md) | <code>protected</code> | [ConnectConfig](./foundation-comms.connectconfig.md) |  |
|  [hasValidSession](./foundation-comms.defaultsocket.hasvalidsession.md) |  | boolean |  |
|  [host](./foundation-comms.defaultsocket.host.md) | <code>readonly</code> | string |  |
|  [isConfigured](./foundation-comms.defaultsocket.isconfigured.md) | <code>readonly</code> | boolean |  |
|  [isConnected](./foundation-comms.defaultsocket.isconnected.md) | <code>readonly</code> | boolean |  |
|  [isConnectedSubject](./foundation-comms.defaultsocket.isconnectedsubject.md) | <code>readonly</code> | import("rxjs").BehaviorSubject&lt;boolean&gt; |  |
|  [isConnecting](./foundation-comms.defaultsocket.isconnecting.md) | <code>readonly</code> | boolean |  |
|  [isDisconnected](./foundation-comms.defaultsocket.isdisconnected.md) | <code>readonly</code> | boolean |  |
|  [isDisconnectedByServer](./foundation-comms.defaultsocket.isdisconnectedbyserver.md) | <code>readonly</code> | boolean |  |
|  [isReconnecting](./foundation-comms.defaultsocket.isreconnecting.md) | <code>readonly</code> | boolean |  |
|  [socketMessages](./foundation-comms.defaultsocket.socketmessages.md) |  | () =&gt; [SocketSubject](./foundation-comms.socketsubject.md)&lt;[Message](./foundation-comms.message.md)&gt; |  |
|  [user](./foundation-comms.defaultsocket.user.md) | <code>protected</code> | User | Temp putting the user in place to bridge the hasValidSession logic. |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [connect(host, connectOptions, reconnectOptions)](./foundation-comms.defaultsocket.connect.md) |  |  |
|  [reset()](./foundation-comms.defaultsocket.reset.md) |  |  |
|  [send(message, needsHandling)](./foundation-comms.defaultsocket.send.md) |  |  |
|  [sendForStream(message, onMessage, onError, onComplete)](./foundation-comms.defaultsocket.sendforstream.md) |  |  |
|  [sendForStreamWithoutTeardown(message, onMessage, onError)](./foundation-comms.defaultsocket.sendforstreamwithoutteardown.md) |  |  |
