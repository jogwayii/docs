---
format: md
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@genesislcap/foundation-comms](./foundation-comms.md) &gt; [PongMessage](./foundation-comms.pongmessage.md)

## PongMessage type


**Signature:**

```typescript
export type PongMessage = Pick<Message, 'MESSAGE_TYPE' | 'SOURCE_REF' | 'USER_NAME'> & {
    IS_AUTHENTICATED?: boolean;
    CREATED_AT?: number;
    LAST_RECEIVED?: number;
    LAST_SENT?: number;
    RESOURCES?: Record<string, RESOURCE_DETAILS[]>;
};
```
**References:** [Message](./foundation-comms.message.md)

