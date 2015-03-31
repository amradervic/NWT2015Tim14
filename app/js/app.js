
//we have to define like that, to call true myapp ing html and call bootstrap.css
//angular.module('app',['ui.bootstrap']);
var app = angular.module('app', []);
//scope is a "glue" between view and controllerl, we will use it to define everything we need 

app.service('CalculatorService', function(MathService){
     
    this.square = function(a) { return a*a; };
 
});

app.controller('TestController', function($scope, CalculatorService) {
    $scope.doSquare = function() {
       // $scope.answer = CalculatorService.square($scope.number);
	   $scope.answer = 5;
    }
 
});