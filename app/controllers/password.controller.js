app.controller('passwordController', function ($scope) {
    $scope.password = '';
    $scope.strength =  'weak';

    $scope.grade = function () {

        var size = $scope.password.length;

        if (size > 10 ) {
            $scope.strength = 'strong';
        } else if (size > 8) {
            $scope.strength = 'medium';
        } else {
            $scope.strength = 'weak';
        }
    };
});
