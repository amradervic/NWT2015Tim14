controllers.controller('LoginController',
    ['$scope', '$rootScope', '$location', 'LoginService',
    function ($scope, $rootScope, $location, LoginService) {
        // reset login status
       // LoginService.ClearCredentials();

        $scope.login = function () {
           // $scope.dataLoading = true;
            LoginService.Login($scope.username, $scope.password, function(response) {
                if(response.success) {
                    LoginService.SetCredentials($scope.username, $scope.password);
                    $location.path('/');
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        };
    }]);
