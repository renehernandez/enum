/**
* enums.js
*/
describe('enums', function () {
    /**
    * Enum
    */
    describe('Enum', function () {
        var errorType = 'All arguments must be of string type, a string array or an object.';
        var errorMultipleDefs = 'Multiple definitions of the same key.';
        var errorArgsRequired = 'At least one argument must be supplied.';
        var errorEmptyContainer = 'The array (object) must contains at least one element (property).';
        var errorInvalidIdentifier = 'Keys must be ASCII valid identifiers.';

        it('throws error with empty arguments',  function() {
            expect(enums.create).toThrowError(errorArgsRequired);
        });

        it('throws error with empty array or object', function() {
            expect(function() { enums.create([]); }).toThrowError(errorEmptyContainer);
            expect(function() { enums.create({ }); }).toThrowError(errorEmptyContainer);
        });

        it('throws error with invalid type argument', function() {
            expect(function() { enums.create(1); }).toThrowError(errorType);
            expect(function() { enums.create(false); }).toThrowError(errorType);
            expect(function() { enums.create(undefined); }).toThrowError(errorType);
            expect(function() { enums.create(null); }).toThrowError(errorType);
        });

        it('throws error with multiple keys definition', function() {
            expect(function() { enums.create('Red', 'Blue', 'Red'); }).toThrowError(errorMultipleDefs);
            expect(function() { enums.create(['Red', 'Red']); }).toThrowError(errorMultipleDefs);
        });

        it('throws error with invalid identifiers', function() {
            expect(function() { enums.create('1Hello', 'Hello!'); }).toThrowError(errorInvalidIdentifier);
            expect(function() { enums.create(['^Red', 'Hello!']); }).toThrowError(errorInvalidIdentifier);
            expect(function() { enums.create({ '-Test': 'Test', Hello: 1}); }).toThrowError(errorInvalidIdentifier);
        })

        it('freezes Enum object upon creation', function() {
            expect(Object.isFrozen(enums.create('Hello'))).toBe(true);
            expect(Object.isFrozen(enums.create(['Hello', 'Hi']))).toBe(true);
            expect(Object.isFrozen(enums.create({ Hello: 1, Salut: 2 }))).toBe(true);
        });

        it('values equals keys when create with multiple args', function(){
            var colors = enums.create('Red', 'Blue', 'Yellow');
            expect(colors.Red).toBe('Red');
            expect(colors.Blue).toBe('Blue');
            expect(colors.Yellow).toBe('Yellow');
        });

        it('values equals keys when create with array argument', function() {
            var colors = enums.create('Red', 'Blue', 'Yellow');
            expect(colors.Red).toBe('Red');
            expect(colors.Blue).toBe('Blue');
            expect(colors.Yellow).toBe('Yellow');
        });

        it('values equals values when create with object argument', function(){
            var colors = enums.create({ Red: 1, Blue: 2, Yellow: 3 });

            expect(colors.Red).toBe(1);
            expect(colors.Blue).toBe(2);
            expect(colors.Yellow).toBe(3);
        });

    });

});
