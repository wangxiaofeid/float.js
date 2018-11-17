# float.js
浮点数运算

```bash
$ yarn add float.js
```

```javascript
const floatJs = require('@xiaofei.wang/float.js');
or
import floatJs, { plus, minus } from '@xiaofei.wang/float.js';

0.2 + 0.1 = 0.30000000000000004
plus(0.2, 0.1) === 0.3
0.3 - 0.1 = 0.19999999999999998
plus(0.3, -0.1) === 0.2
-0.3 + 0.1 = -0.19999999999999998
plus(-0.3, 0.1) === -0.2

0.3 - 0.1 = 0.19999999999999998
minus(0.3, 0.1) === 0.2

0.631 * 10 = 6.3100000000000005
minus(0.631, 10) === 6.31
```

