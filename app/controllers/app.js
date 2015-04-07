"use strict";
var services = angular.module('services', ['ngResource']);
var controllers = angular.module('controllers', ['ngResource']);

var app, deps;

  deps = ['treeGrid','xtForm',
          'controllers','pascalprecht.translate','services','http-auth-interceptor','ngSanitize','ui.bootstrap.modal','ui.router',
          'ui.bootstrap.tabs','ui.select','ui.bootstrap.datepicker','ui.bootstrap.dateparser'/*,'directive'*/];

app = angular.module('placestogoApp', ['ngRoute', 'services', 'controllers']);

// konfiguracija ruta
app.config(function($routeProvider, $httpProvider) {
	$routeProvider

            // route for the home page
            .when('/', {
			templateUrl : 'views/test.html',
			controller  : 'mainController'
		})
                
                 .when('/ocjena', {
			templateUrl : 'index.html',
			controller  : 'ocjenaController'
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
        
        //dio koji sluzi da user i dalje ostane logovan na stranici i prilikom ucitavanja drugih stranica
       /* .run(['$rootScope', '$location', '$cookieStore', '$http',
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
    }]);*/