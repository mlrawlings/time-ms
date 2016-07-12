# time-ms

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

get the current time in milliseconds, with nanosecond precision

## Usage

[![NPM](https://nodei.co/npm/time-ms.png)](https://www.npmjs.com/package/time-ms)

```js
var time = require('time-ms');
var start = time();

setTimeout(() => {
    var finish = time()
    console.log('took '+(finish-start)+'ms');
    // took 1000.097435ms
}, 1000);
```

## License

MIT, see [LICENSE.md](http://github.com/mlrawlings/time-ms/blob/master/LICENSE.md) for details.
