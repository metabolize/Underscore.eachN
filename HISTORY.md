History
=======

0.2.1
-----

Fix mapN for CommonJS.


0.2.0
-----

Integrate with Underscore, adapting the pattern from [Underscore.string][].
This now provides a CommonJS module, which you can use like this:

    var _ = require('underscore');

    _.eachn = require('underscore.eachn');
    _.mixin(_.eachn.exports());

In vanilla JS (i.e. you aren't using RequireJS or CommonJS), loading this
file will create a global `_n`, and if `_` is a global, `eachN` and `mapN`
are added as mixins.


0.1.0
-----

August 26, 2014

Initial release.

[Underscore.string]: https://github.com/epeli/underscore.string
