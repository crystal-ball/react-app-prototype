# Configurations reference

## Google Fonts

Google fonts are loaded from CDN using a preconnect resource to reduce
connection times. The initial request to `fonts.googleapis.com` returns links to
the current font resources hosted at `fonts.gstatic.com`. The `preconnect` link
in the header means that while the first request to `googleapis` is occuring,
the browser will handle all of the preconnection responsibilities for `gstatic`.

```html
<link href="https://fonts.gstatic.com/" rel="preconnect" crossorigin />
<link
  href="https://fonts.googleapis.com/css?family=Alex+Brush&display=swap"
  rel="stylesheet"
/>
```

## Babel dependencies

The `core-js` and `@babel/runtime` packages are included as application
dependencies because they are included in the production webpack bundles.
Including them as explicit dependencies in the application's `package.json` is
an attempt to guarantee that specific versions are resolved for the bundle.
