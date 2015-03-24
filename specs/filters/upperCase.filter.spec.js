/**
 * in order to ...
 * as a .....
 * I need to ....
 */
/*global describe, beforeEach, it*/
describe('In order to set the first letter up as a visitors I need to see the first letter of my input capitalized', function () {
    var upperCaseFilter;

    beforeEach(function() {
        angular.mock.module('angular-test');

        angular.mock.inject(function ($filter) {
            upperCaseFilter = $filter('upperCase');
        });
    });

    describe('I will test upper case method', function() {

        it('Should set the letters in the right way', function() {
            expect(upperCaseFilter('antoNIo pieRRO')).toEqual('Antonio Pierro');
            expect(upperCaseFilter('pieRRO')).toEqual('Pierro');
            expect(upperCaseFilter('PARIS')).toEqual('Paris');
        });
    });

});