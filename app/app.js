
/* global angular */

//we have to define like that, to call true myapp ing html and call bootstrap.css
//angular.module('app',['ui.bootstrap']);
var app = angular.module('myApp', []);
//scope is a "glue" between view and controllerl, we will use it to define everything we need 
var regApp = angular.module('regApp', []);
//module for login
var loginApp = angular.module('LoginApp', []);

var placestogoApp = angular.module('placestogoApp', ['ngRoute']);
//module for login
//var loginApp = angular.module('LoginApp', []);

// konfiguracija ruta
placestogoApp.config(function($routeProvider, $httpProvider) {
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

	})
        
        //dio koji sluzi da user i dalje ostane logovan na stranici i prilikom ucitavanja drugih stranica
        .run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
  
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to home page if not logged in
            if ($location.path() !== '/' && !$rootScope.globals.currentUser) {
                $location.path('/');
            }
        });
    }]);