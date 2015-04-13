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
    var class2type = {};
    var names = ['String', 'Array', 'Object'];

    for(var i = 0, len = names.length; i < len; i++){
        class2type['[object ' + names[i] + ']'] = names[i].toLowerCase();
    }

    var type = function(obj){
        return class2type[Object.prototype.toString.call(obj)];
    };

    var isArray = Array.isArray || function(obj) {
        return type(obj) === 'array';
    };

    var isObject = function(obj) {
        return type(obj) === 'object';
    };

    var isString = function(obj) {
        return type(obj) === 'string';
    };

    function Enum(args) {
        var output = {};
        var key;
        var obj;
        var errorType = 'All arguments must be of string type, a string array or an object.';
        var errorMultipleDefs = 'Multiple definitions of the same key.';
        var errorArgsRequired = 'At least one argument must be supplied.';
        var errorEmptyContainer = 'The array (object) must contains at least one element (property).';
        var errorInvalidIdentifier = 'Keys must be ASCII valid identifiers.';
        var regExp = /^[a-zA-Z_$][\w$]*$/;

        var addKey = function(name, value) {
             if (!isString(name)) {
                throw new Error(errorType);
            }
            else if(!regExp.test(name)){
                throw new Error(errorInvalidIdentifier);
            }
            else if (output.hasOwnProperty(name)) {
                throw new Error(errorMultipleDefs);
            }
            else {
                output[name] = value;
            }
        };

        if (args.length === 0) {
            throw new Error(errorArgsRequired);
        }

        if (args.length === 1 && !isString(args[0])) {
            obj = args[0];
            if (isArray(obj)) {
                for(var i = 0, len = obj.length; i < len; i++) {
                    addKey(obj[i], obj[i]);
                }
            }
            else if (isObject(obj)) {
                for(key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        addKey(key, obj[key]);
                    }
                }
            } else {
                throw new Error(errorType);
            }
        }
        else {
            for(var i = 0, len = args.length; i < len; i++) {
                addKey(args[i], args[i]);
            }
        }

        if (Object.keys(output).length === 0) {
            throw new Error(errorEmptyContainer);
        }

        return output;
    }

    exports.create = function() {
        return Object.freeze(new Enum(arguments));
    };

    return exports;
});
