# Install

```sh
 npm install el-connect-line
```

## Usage

index.html

```html
<html>
  <head>
    <title>Parcel Sandbox</title>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="./src/style.css" />
  </head>

  <body>
    <div id="app">
      <div id="box1"></div>
      <div id="box2"></div>
      <div id="line"></div>
    </div>

    <script src="src/index.ts"></script>
  </body>
</html>
```

index.ts

```js
import { getLineConfig } from 'el-connect-line';
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const result = getLineConfig(box1, box2);
const line = document.getElementById('line');
if (line) {
  line.style.cssText += `
  width: ${result.width}px;
  z-index: -1;
  height: 2px;
  background: green;
  position: absolute;
  top: ${result.y}px;
  left: ${result.x}px;
  transform: rotateZ(${result.degree}deg);
  transform-origin: top left;
`;
}
```

# Result

![alt text](https://ibb.co/WvCfGcJ)
