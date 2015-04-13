/**
* enums.js
*/
describe('enums', function () {
    /**
    * Enum
    */
    describe('Enum', function () {

        it('throw error with empty arguments',  function () {
            expect(enums.create).toThrowError('At least one argument must be supplied.');
        });
    });

});
