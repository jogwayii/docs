---
id: general
title: Design System Customisation
sidebar_label: General
sidebar_position: 10
hide_table_of_contents: true
---

Our design systems and components are highly configurable. Let's have a look at how this can be leveraged.

Design system can be shared across multiple applications. When performing customisations you can control the scope as follows:

* General - applied to the design system itself and affects all applications using the system. Described below.
* [Application-specific](/web-ui-reference/design-systems/customisation/app-specific/) - only applied to a single application. Other applications using the same system are not affected.

### Configuring defaults

Starting point for making general customisations is the `src/_config` folder:

```bash
alpha-design-system
├── dist
├── node_modules
├── src
│   ├── _config
│   │   ├── color.ts
│   │   ├── index.ts
│   │   ├── misc.ts
│   │   ├── sizing.ts
│   │   └── typography.ts
```

It contains configuration files which set default values for various design tokens as well as a few other settings.

You can achieve major visual changes simply by modifying token defaults. There are several categories of tokens available:

* [Colour](/web-ui-reference/design-systems/tokens/colour/): base colours, dark/light mode, colour variants for interactive states (hover etc.)
* [Typography](/web-ui-reference/design-systems/tokens/typography/): default font family, font size and line height hierarchy
* [Sizing](/web-ui-reference/design-systems/tokens/sizing/): component sizing, spacing and border style
* [Miscellaneous](/web-ui-reference/design-systems/tokens/misc/): any other configuration options such as the naming prefix (e.g. `alpha`)

### Overriding default implementation

You can go beyond adjusting token values and override the default component implementation. You can choose to only override certain aspects of a component (such as template, styles or shadom DOM options) or provide a completely custom implementation.

<design-system-configurator>
    <fs-preview></fs-preview>
</design-system-configurator>