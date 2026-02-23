# EOxUI

Collection of styles and snippets for the EOX Design System. Includes JS, CSS and SCSS variables necessary for the used tools.

## General usage

The CSS & JS components are built on top of [beercss](https://github.com/beercss/beercss). For documentation on how to use HTML structure, CSS helper classes & JS, refer to the docs on [beercss.com](https://www.beercss.com/).

### Node package installation

```sh
npm i @eox/ui
```

```css
// style.css
@import url("@eox/ui/style.css");
```

```js
// script.js
import "@eox/ui";
```

The JS bundle is only needed for components that require JS.

### CDN usage

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@eox/ui/dist/style.css"
/>
<script type="module">
  import "https://cdn.jsdelivr.net/npm/@eox/ui/+esm";
</script>
```

The JS bundle is only needed for components that require JS.

## Usage with Vuetify

This package also provides a Vuetify blueprint and style, which helps Vuetify apps to adapt the same look&feel.

```sh
npm i @eox/ui
```

```js
// src/plugins/vuetify.js

import "vuetify/styles";
import "@eox/ui/vuetify/style.css";
import { eox } from "@eox/ui/vuetify/blueprint.js";

import { createVuetify } from "vuetify";

export default createVuetify({
  blueprint: eox,
});
```

## Caveats

### Flash of unstyled content (FOUC)

If you're experiencing FOUC, then you're probably having some static/non-bundling setup. This is somewhat expected, since the HTML will always load faster than JS/CSS bundles (and especially fonts), probably most noticeable on first page load (browser cache should help a bit).

Before all, make sure you're importing the CSS in the head as style, and not importing it into a JS module.

To mitigate e.g. the wrong font flashing, use something like:

```html
<style>
  body {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
</style>
<script>
  document.fonts.onloadingdone = () => {
    document.body.style.opacity = 1;
  };

  (async () => {
    await document.fonts.load("16px Inter");
  })();
</script>
```

### Shadow DOM

Need to include `@eox/ui/style.css` also "outside" in the light DOM (for vars and fonts).

## Development

```
git update-index --skip-worktree playground.html
npm install
npm start
```

This opens the playground at http://localhost:5173/playground.html with hot-reloading.

```
npm run format
```

Formats the code base.

```
npm run build
```

Builds the library and replaces absolute links in styles with relative ones.
