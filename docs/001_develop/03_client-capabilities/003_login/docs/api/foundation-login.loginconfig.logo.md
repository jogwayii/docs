---
format: md
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@genesislcap/foundation-login](./foundation-login.md) &gt; [LoginConfig](./foundation-login.loginconfig.md) &gt; [logo](./foundation-login.loginconfig.logo.md)

## LoginConfig.logo property

Logo styles.

**Signature:**

```typescript
logo: ElementStyles | null;
```

## Remarks

Providing `null` will hide the logo. Use content: url(...); to set source.

## Example

Setting a custom logo

```ts
logo: css`
    content: url(${customLogoImport});
`,
```
