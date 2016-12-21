## src-fit

src-fit component for [A-Frame](https://aframe.io).

---
title: src-fit
type: components
layout: docs
parent_section: components
---

The src-fit component automatically modifies the geometry of the entity
to match its material src (e.g. image or video) dimensions as specified, 
and emits an event signaling the changes in dimensions, if any.

If the entity has geometry width specified, 
the entity's height will be resized preserving aspect ratio.

If the entity has only geometry height specified, 
the entity's width will be resized preserving aspect ratio.

If the entity has neither geometry width or height specified, 
the entity will be resized preserving aspect ratio within a maximum 1x1 size.

Thanks to @nylki for inspiration with different implementation at
https://github.com/nylki/aframe-fit-texture-component
and the great Slack discussion resulting in this separate component.

## Example

```html
<a-image src="foo.png" src-fit></a-image>
```

## Events

| Event Name   | Description             |
| ----------   | -----------             |
| fit          | Fit was performed.      |

### Installation

#### Browser

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.4.0/aframe.min.js"></script>
  <script src="https://rawgit.com/chenzlabs/aframe-src-fit-component/master/dist/aframe-src-fit-component.min.js"></script>
</head>

<body>
  <a-scene>
    <a-image src="..." src-fit></a-image>
  </a-scene>
</body>
```

#### npm

Install via npm:

```bash
npm install aframe-src-fit-controls-component
```

Then register and use.

```js
require('aframe');
require('aframe-src-fit-component');
```
