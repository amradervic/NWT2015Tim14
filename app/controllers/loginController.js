/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global angular */

angular.module('loginApp.controllers', [])
.controller('LoginController',
    ['$scope', '$rootScope', '$location', 'LoginService',
    function ($scope, $rootScope, $location, LoginService) {
        // reset login status
        LoginService.ClearCredentials();
  
        $scope.login = function () {
            $scope.dataLoading = true;
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
