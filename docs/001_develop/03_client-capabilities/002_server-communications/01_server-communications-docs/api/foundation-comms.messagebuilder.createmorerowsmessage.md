---
format: md
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@genesislcap/foundation-comms](./foundation-comms.md) &gt; [MessageBuilder](./foundation-comms.messagebuilder.md) &gt; [createMoreRowsMessage](./foundation-comms.messagebuilder.createmorerowsmessage.md)

## MessageBuilder.createMoreRowsMessage() method

Creates a message to request more rows.

**Signature:**

```typescript
createMoreRowsMessage(sourceRef: string, viewNumber?: number): Message<MessageDetails.MoreRows>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  sourceRef | string | The unique source reference. |
|  viewNumber | number | _(Optional)_ The desired view number. Default:always the first view, if not spceified. |

**Returns:**

[Message](./foundation-comms.message.md)&lt;[MessageDetails.MoreRows](./foundation-comms.messagedetails.morerows.md)&gt;

The more rows message.

## Remarks

MORE\_ROWS
