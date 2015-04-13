# enums.js

enums is a 2 KB (minified) standalone module for getting a supported Enum instance.

## Enum instance
The Enum instance contains a property for each valid string passed as argument of the create method.

#### enums.create()
Use `enums.create` to get a new instance of Enum type.
```js
var someVar = 'Red';
var colors = enums.create('Red', 'Blue', 'Yellow');
if (someVar === colors.Red){
    alert('Yeah!! I am Red.');
}
```
Instead, it is possible just to pass a single array with all the desired enum keys
```js
var someVar = 'Blue';
var colors = enums.create(['Red', 'Blue', 'Yellow']);
if (someVar === colors.Blue){
    alert('Well Yeah!! Now, I am Blue.');
}
```
Or even pass an object to read their properties
```js
var someVar = 3;
var colors = enums.create({ Red: 1, Blue: 2, Yellow: 3 });
if (someVar === colors.Yellow){
    alert('Oh!! Now, it is Yellow time.');
}
```
**Notice:**
 - At least one argument must be passed as part of the method call.
 - Arguments must be of string type or a single array of string values or a single object.
 - All keys must be of distinct values.
 - When creating an Enum using an object as argument, only the own object properties will be used as keys for the Enum instance.
 - The newly created Enum instance is frozen as part of the `enums.create` call.
 - The difference when creating an Enum using an object as argument: It is possible to set a specific value for each key using this way.

## Specs
Tested using Jasmine (>= v2.0.0).
See enums-specs.js file to review the actual specs suite.

## Manual Installation
Ensure you're using the files from the `dist` directory (it contains production-ready code).

## Contributing
In lieu of a formal styleguide, please take care to follow the existing code style. Add unit tests for any new or changed functionality. Lint and test your code using Grunt.
