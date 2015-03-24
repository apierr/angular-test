/**
 * in order to ...
 * as a .....
 * I need to ....
 */
/*global describe, beforeEach, it*/
describe('In order to check the strength of my password as a visitor I need to see the strong message on the screen', function () {
    var passwordController;
    var $scope;

    beforeEach(function() {
        angular.mock.module('angular-test');

        angular.mock.inject(function ($controller, $rootScope) {
            $scope = $rootScope.$new();

            passwordController = $controller('passwordController', {
                $scope: $scope
            });
        });
    });

    describe('I will test grade method', function() {

        it('should be the password weak when I type 12345', function() {
            // GIVEN
            $scope.password = '12345';
            // AND
            $scope.grade();
            // THEN
            expect($scope.strength).toEqual('weak'); 
        });


        it('should be the password strong when I type asjdhasuhdiuahwuhwakaw', function() {
            // GIVEN
            $scope.password = 'asjdhasuhdiuahwuhwakaw';
            // AND
            $scope.grade();
            // THEN
            expect($scope.strength).toEqual('strong'); 
        });

        
    });

});