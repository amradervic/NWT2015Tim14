/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

	var placestogoApp = angular.module('placestogoApp', ['ngRoute']);

	// configure our routes
	placestogoApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'views/test.html',
				controller  : 'mainController'
			})

			// route for the login page
			.when('/login', {
				templateUrl : 'views/login.html',
				controller  : 'mainController'
			})

			// route for the registration page
			.when('/registration', {
				templateUrl : 'views/registration.html',
				controller  : 'mainController'
			});
	});

	// create the controller and inject Angular's $scope
	placestogoApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	
