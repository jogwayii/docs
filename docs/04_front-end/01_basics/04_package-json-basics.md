---
title: 'Package.json basics'
sidebar_label: 'Package.json basics'
id: package-json-basics
---

The `package.json` file is auto-generated for you by the CLI, based on your answers to the prompts.

At the top you'll find the `name` and `description` of your application.

Following this, there are three key sections you need to be aware of:

- config
- scripts
- dependencies

## Config

When running the app on your local machine, you can adjust a few settings under the `config` section, including which host to connect to and what port to run the dev server on.
```
"config": {
    "API_HOST": "wss://dev-position2/gwf/",
    "DEFAULT_USER": "JaneDee",
    "DEFAULT_PASSWORD": "beONneON*74",
    "PORT": 6060
  },
```

## Scripts

The next section is `scripts`.  
Some have been auto-generated for you; feel free to add your own as needed.


```javascript
  "scripts": {
    "build": "npm run build:webpack",
    "build:with-host": "cross-env API_HOST=$npm_package_config_API_HOST npm run build:webpack",
    "build:webpack": "cross-env NODE_ENV=production AUTO_CONNECT=true webpack",
    "clean": "npm run clean:dist",
    "clean:dist": "node ../.build/clean.js dist",
    "copy-files": "copyfiles -u 1 src/**/*.{css,scss,ttf} ./dist/esm",
    "dev": "npm run dev:webpack",
    "dev:webpack": "cross-env API_HOST=$npm_package_config_API_HOST AUTO_CONNECT=true DEFAULT_USER=$npm_package_config_DEFAULT_USER DEFAULT_PASSWORD=$npm_package_config_DEFAULT_PASSWORD NODE_ENV=development webpack serve --open",
    "serve": "serve dist -p $npm_package_config_PORT",
    "test": "echo \"Error: no test specified\""
  },
```

:::info
Your settings from the `config` block will be passed to different scripts as environment variables, using [cross-env](https://www.npmjs.com/package/cross-env).
:::

## Dependencies

Last but not least, the `dependencies` section contains a list of your app's dependencies and their versions.

:::info
This includes **@genesislcap** dependencies. This is where you would change their versions to upgrade to a newer version of the platform.
:::


```javascript
  "dependencies": {
    "@genesislcap/foundation-comms": "1.0.0",
    "@genesislcap/foundation-entity-management": "1.0.0",
    "@genesislcap/foundation-login": "1.0.0",
    "@genesislcap/foundation-utils": "1.0.0",
    "@genesislcap/foundation-zero": "1.0.0",
    "@genesislcap/foundation-ui": "1.0.0",
    "@microsoft/fast-components": "^2.16.6",
    "@microsoft/fast-element": "^1.6.2",
    "@microsoft/fast-foundation": "^2.27.1",
    "@microsoft/fast-router": "^0.2.11",
    "@microsoft/fast-web-utilities": "^5.0.1",
    "rxjs": "^7.4.0",
    "tslib": "^2.3.1"
  }
```

:::tip
You can use the `lerna add` command (instead of `npm install`) if you need to add more dependencies, since the app is a [lerna managed](https://lerna.js.org/) monorepo.
:::