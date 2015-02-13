Underscore.eachN
================

[Underscore][] plugin for iterating over arrays, *n* elements at a time.

    _.eachN([1, 2, 3, 4, 5, 6, 7, 8], 3, function (slice) { console.log(slice); });
    => prints [1, 2, 3]
    => prints [4, 5, 6]
    => prints [7, 8]
    => [1, 2, 3, 4, 5, 6, 7, 8] (returned for chaining)

    _.mapN([1, 2, 3, 4, 5, 6, 7, 8], 3, function (slice) { return _.max(slice); });
    => [3, 6, 8]


Installation
------------

Install Underscore.eachN by running:

    bower install Underscore.eachN
    npm install underscore.eachn


Documentation
-------------

In CommonJS:

```js
var _ = require('underscore');

_.eachn = require('underscore.eachn');
_.mixin(_.eachn.exports());
```

### _.eachN(obj, n, iterator, context)

Iterates over a list of elements by slicing the it, n at
a time, yielding those n items to an iterator function.
The iterator is bound to the context object, if one is
passed. Each invocation of iterator is called with three
arguments: (slice, firstIndex, list), where firstIndex is
the index of the beginning of the slice. If elements.length
it not divisible by n, the last invocation to iterator will
have fewer than n elements. Returns the original list for
chaining.

### _.mapN(obj, n, iterator, context)

Produces a new array of values by slicing list, n at a time,
and mapping each slice through a transformation function
(iterator).


Contribute
----------

- Issue Tracker: github.com/bodylabs/Underscore.eachN/issues
- Source Code: github.com/bodylabs/Underscore.eachN


License
-------

The project is licensed under the two-clause BSD license.


[Underscore]: http://underscorejs.org/
