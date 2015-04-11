(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory;
  } else {
    root.enums = factory(root);
  }
})(this, function (root) {

    'use strict';

    var exports = {};

    function Enum(args){
        if(args.length === 0){
            throw new Error('At least one argument must be supplied');
        }

        var self = this,
                keys = [];

        for(var i = 0, len = args.length; i < len; i++){
            if(typeof args[i] !== 'string') {
                throw new Error('All arguments must be of string type.');
            }
            keys.push(args[i]);
        }

        for(var i = 0, len = keys.length; i < len; i++){
            self[keys[i]] = i;
        }

        self.keys = keys;
        return self;
    }

    exports['create'] = function () {
        return Object.freeze(new Enum(arguments));
    };

    return exports;
});
