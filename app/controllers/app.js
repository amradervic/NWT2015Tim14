"use strict";
var services = angular.module('services', ['ngResource']);
var controllers = angular.module('controllers', ['ngResource']);


angular.module('Authentication', []);
angular.module('Home', []);



var app, deps;

  deps = ['treeGrid','xtForm',
          'controllers','pascalprecht.translate','services','http-auth-interceptor','ngSanitize','ui.bootstrap.modal','ui.router',
          'ui.bootstrap.tabs','ui.select','ui.bootstrap.datepicker','ui.bootstrap.dateparser'/*,'directive'*/];

app = angular.module('placestogoApp', ['ngRoute', 'services', 'controllers','Authentication', 'Home', 'ngCookies']);

// konfiguracija ruta
app.config(['$routeProvider', function($routeProvider, $httpProvider) {
	$routeProvider


            .when('/home', {
			templateUrl : 'views/home.html',
			controller  : 'mainController'
		})


        .when('/login', {
            controller: 'LoginController',
            templateUrl: 'views/login.html'
        })

            // route for the registration page
            .when('/registration', {
			templateUrl : 'views/registration.html',
			controller  : 'korisnikController'
		})
            // route for the reset page
            .when('/reset', {
			templateUrl : 'views/reset.html',
			controller  : 'korisnikController'
		})

        .when('/profil', {
            controller: 'HomeController',
            templateUrl: 'views/profil.html'
        })
             .otherwise({ redirectTo: '/home' });

	}])
    .run(['$rootScope', '$location', '$cookieStore', '$http',
        function ($rootScope, $location, $cookieStore, $http) {
            // keep user logged in after page refresh
            $rootScope.globals = $cookieStore.get('globals') || {};
            if ($rootScope.globals.currentUser) {
                $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
            }

            $rootScope.$on('$locationChangeStart', function (event, next, current) {
                // redirect to login page if not logged in

                if ($location.path() == '/profil' && !$rootScope.globals.currentUser) {
                    $location.path('/login');
                }
            });
        }]);
        
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