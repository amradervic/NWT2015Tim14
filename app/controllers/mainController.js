/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//modul za glavnu app
var placestogoApp = angular.module('placestogoApp', ['ngRoute']);
//module for login
//var loginApp = angular.module('LoginApp', []);

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
		})
             .otherwise({ redirectTo: '/home' });

	});

	// create the controller and inject Angular's $scope
	placestogoApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	
//.run(['$rootScope', '$location', '$cookieStore', '$http',
//    function ($rootScope, $location, $cookieStore, $http) {
//        // keep user logged in after page refresh
//        $rootScope.globals = $cookieStore.get('globals') || {};
//        if ($rootScope.globals.currentUser) {
//            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
//        }
//  
//        $rootScope.$on('$locationChangeStart', function (event, next, current) {
//            // redirect to login page if not logged in
//            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
//                $location.path('/login');
//            }
//        });
//    }]);