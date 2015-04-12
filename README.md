# enums.js

enums is a 2 KB standalone module for getting a supported Enum instance.

## Enum instance
The Enum instance contains a property for each valid string passed as argument of the create method.
And also have `keys` property which returns an array of string with all the values of this Enum instance.


#### enums.create()
Use `enums.create` to get a new instance of Enum type.
```js
var colors = enums.create('Red', 'Blue', 'Yellow');
console.log(colors.keys); // output: ["Red", "Blue", "Yellow"]
if (someVar === Color.Red){
    alert('Yeah!! I am Red.');
}
```
Instead it is possible just to pass a single array with all the desired enum keys
```js
var colors = enums.create(['Red', 'Blue', 'Yellow']);
console.log(colors.keys); // output: ["Red", "Blue", "Yellow"]
if (someVar === Color.Blue){
    alert('Well Yeah!! Now, I am Blue.');
}
```
**Notice:**
 - At least one argument must be passed as part of a method call.
 - All arguments must be of string type or a single array of string values.
 - It is not allowed to declared an Enum key as `keys` because it conflicts with the already defined `keys` property of Enum object.
 - In case of repeated values, only the first occurrence is included in the `keys` property and the remaining ones are discarded.
 - The newly created Enum instance is frozen as part of the `enums.create` call.

## Manual Installation
Ensure you're using the files from the `dist` directory (it contains production-ready code).

## Contributing
In lieu of a formal styleguide, please take care to follow the existing code style. Add unit tests for any new or changed functionality. Lint and test your code using Grunt.
