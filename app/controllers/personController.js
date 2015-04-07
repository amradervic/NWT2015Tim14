//var app = angular.module('app', []);
 
 
services.factory('MathService', function() {
     
    var factory = {}; 
 
    factory.add = function(a,b) {
         return a + b };
 
    factory.multiply = function(a,b) {
             return a * b };
  factory.divide = function(a, b) { return a / b };
 
    return factory;
});
 

controllers.controller('CalculatorController', function($scope, MathService) {
 
    $scope.doSquare = function() {
        $scope.answer = MathService.multiply($scope.number, $scope.number);
    };
 
    $scope.doCube = function() {
        $scope.answer = MathService.multiply($scope.number,$scope.number);
    };
});