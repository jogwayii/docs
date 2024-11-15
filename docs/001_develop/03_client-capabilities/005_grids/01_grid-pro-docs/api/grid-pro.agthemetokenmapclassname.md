---
format: md
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@genesislcap/grid-pro](./grid-pro.md) &gt; [agThemeTokenMapClassname](./grid-pro.agthemetokenmapclassname.md)

## agThemeTokenMapClassname variable

Generates the class name for a given Grid Pro theme name.

**Signature:**

```typescript
agThemeTokenMapClassname: (themeName: string) => string
```

## Example

The result of this will be a class name that is applied to the grid part of GridPro template (actual content of the class comes from agThemeTokenMapCSS):

```html
<span part="grid" class="ag-theme-genesis-rapid-dark">
```
