# CommonJs

## Import

```javascript
const variableName = require('path');  
```

Example:  
```javascript
const fs = require('fs');
const cowSay = require('./cowsay.js');
```

## Export:  

```javascript
module.exports = value;  
```

Example:  
```javascript
module.exports = cowSay;
```

# ESM

## Import

```js
import { valur1, value2 } from "pathOfModule";
```

Example:  
```js
import {myFunction} from "./filePath.js";
```

## Export

```js
export {value1, value2};
```

Example:  
```js
export {myFunction};
```