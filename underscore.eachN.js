// Copyright (c) 2014, Body Labs, Inc.
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions
// are met:
//
// 1. Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//
// 2. Redistributions in binary form must reproduce the above copyright
// notice, this list of conditions and the following disclaimer in the
// documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
// FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
// COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
// INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
// BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS
// OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
// AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
// LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY
// WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.

!function(root){

    var _n = {

        // Iterates over a list of elements by slicing the it, n at
        // a time, yielding those n items to an iterator function.
        // The iterator is bound to the context object, if one is
        // passed. Each invocation of iterator is called with three
        // arguments: (slice, firstIndex, list), where firstIndex is
        // the index of the beginning of the slice. If elements.length
        // it not divisible by n, the last invocation to iterator will
        // have fewer than n elements. Returns the original list for
        // chaining.
        eachN: function (obj, n, iterator, context) {

            // Establish the object that gets returned to break out of a loop iteration.
            var breaker = {};

            if (typeof n !== 'number' || ! isFinite(n) || n % 1 !== 0) {
                throw new TypeError('n should be an integer!');
            }

            if (obj === null) return obj;

            for (var i = 0, length = obj.length; i < length; i += n) {
                var slice = obj.slice(i, i + n);
                if (iterator.call(context, slice, i, obj) === breaker) return;
            }

            return obj;
        },

        // Produces a new array of values by slicing list, n at a time,
        // and mapping each slice through a transformation function
        // (iterator).
        mapN: function (obj, n, iterator, context) {

            var results = [];

            if (obj === null) return results;

            _n.eachN(obj, n, function(slice, firstIndex, list) {
                results.push(iterator.call(context, slice, firstIndex, list));
            });

            return results;
        },

        exports: function() {
            var result = {};

            for (var prop in this) {
                if (!this.hasOwnProperty(prop)) continue;
                result[prop] = this[prop];
            }

            return result;
        }
    };
    // Exporting pattern copied from Underscore.string
    // Exporting

    // CommonJS module is defined
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports)
            module.exports = _n;

        exports._n = _n;
    }

    // Register as a named module with AMD.
    if (typeof define === 'function' && define.amd)
        define('underscore.eachn', [], function(){ return _n; });


    // Integrate with Underscore.js if defined
    // or create our own underscore object.
    root._ = root._ || {};
    root._.n = _n;
    root._.eachN = _n.eachN;
    root._.mapN = _n.mapN;
}(this);
