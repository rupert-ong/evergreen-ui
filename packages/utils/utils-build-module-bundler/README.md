# `@evergreen-ui/utils-build-module-bundler`

> Module bundler for Evergreen components within the monorepo library

## Usage

Add as a dev dependency in your package

```
lerna add @evergreen-ui/utils-build-module-bundler --dev --scope=@evergreen-ui/your-package
```

Inside your `package.json`, add a `build` script:

```json
{
  "scripts": {
    "build": "module-bundler"
  }
}
```
