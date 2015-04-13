/*! enums v1.0.0 | (c) 2015 @renehernandez | https://github.com/renehernandez/enums */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory;
  } else {
    root.enums = factory();
  }
})(this, function () {

    'use strict';

    var exports = {};

    var isArray = Array.isArray || function(obj) {
        return Object.prototype.toString.call(obj) === "[object Array]";
    };

    function Enum(args) {
        if (args.length === 0) {
            throw new Error('At least one argument must be supplied.');
        }

        if (args.length === 1 && isArray(args[0])) {
            if (args[0].length === 0) {
                throw new Error('The keys array must not be empty.');
            } else{
                args = args[0];
            }
        }

        var self = this;
        var keys = [];

        for(var i = 0, len = args.length; i < len; i++){
            if(typeof args[i] !== 'string') {
                throw new Error('All arguments must be of string type or a single string array.');
            }
            else if (args[i] === 'keys'){
                throw new Error("A 'keys' argument conflicts with the Enum 'keys' property.");
            }
            else if (keys.indexOf(args[i]) < 0){
                keys.push(args[i]);
                self[args[i]] = args[i];
            }
        }

        self.keys = keys;

        return self;
    }

    exports.create = function () {
        return Object.freeze(new Enum(arguments));
    };

    return exports;
});
