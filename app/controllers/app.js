"use strict";
var services = angular.module('services', ['ngResource']);
var controllers = angular.module('controllers', ['ngResource']);
var directive= angular.module('directive', ['ngResource']);
//var ngCookies=angular.module('ngCookies', ['ngCookies']);
var app, deps;

  deps = ['treeGrid','xtForm',
          'controllers','pascalprecht.translate','services','http-auth-interceptor','ngSanitize','ui.bootstrap.modal','ui.router',
          'ui.bootstrap.tabs','ui.select','ui.bootstrap.datepicker','ui.bootstrap.dateparser','directive', 'ui.bootstrap.navbar'];

app = angular.module('placestogoApp', ['ngRoute', 'ngCookies', 'angular-md5' ,'services', 'controllers', 'directive', 'pascalprecht.translate', 'chart.js']);
//angular.module('app', ['ngCookies']);
// konfiguracija ruta
app.config(function($routeProvider, $httpProvider, $translateProvider, $cookiesProvider) {
	$routeProvider

            // route for the home page
//            .when('/', {
//			templateUrl : 'index.html',
//			controller  : 'mainController'
//		})
                
               
            // route for the login page
            .when('/login', {
			templateUrl : 'views/login.html',
			controller  : 'loginController'
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
                
                .when('/home', {
			templateUrl : 'views/home.html',
			controller  : 'objekatController'
		})

        .when('/profil', {
            templateUrl : 'views/profil.html',
            controller  : 'komentarController'
        })

                .when('/search', {
      templateUrl : 'views/search.html',
      controller  : 'objekatController'
             })   
			 .when('/messages', {
      templateUrl : 'views/messages.html',
      controller  : 'porukaController'
             })   
             
             .when('/dashboard', {
      templateUrl : 'views/dashboard.html',
      controller  : 'dashboardController'
             })  
             
              .when('/useradministration', {
      templateUrl : 'views/useradministration.html',
      controller  : 'korisnikController'
             })  
             
             .otherwise({ redirectTo: '/home' });

 /* $translateProvider.translations('en', {
    HEADLINE: 'Hello there, This is my awesome app!',
    INTRO_TEXT: 'And it has i18n support!',
    BUTTON_TEXT_EN: 'english',
    BUTTON_TEXT_DE: 'german'
  })
  .translations('de', {
    HEADLINE: 'Hey, das ist meine großartige App!',
    INTRO_TEXT: 'Und sie untersützt mehrere Sprachen!'
    BUTTON_TEXT_EN: 'englisch',
    BUTTON_TEXT_DE: 'deutsch'
  });
                $translateProvider.preferredLanguage('en');*/

	});
    app.config(function($translateProvider) {
  $translateProvider.translations('en', {
    HEADLINE: 'Hello there, This is my awesome app!',
    INTRO_TEXT: 'And it has i18n support!',
       BUTTON_TEXT_EN: 'english',
    BUTTON_TEXT_DE: 'bosnian',
    USERNAME: 'Username',
    PASSWORD: 'Password',
    LOGIN: 'Login',
    L1: 'Please fill out the following form with your login credentials:',
    L2: 'Fields with * are required.',
    FP: 'Forgot Password?',
    REGISTRATION: 'Registration',
    POPUNI: 'Please fill out the following form:',
    REGISTER: 'Register',
    ENTERCODE: 'Enter the code here:',
    RP: 'Reset Password',
    RESET: 'Reset'

  })
  .translations('bs', {
    HEADLINE: 'Hey, das ist meine großartige App!',
    INTRO_TEXT: 'Und sie untersützt mehrere Sprachen!',
     BUTTON_TEXT_EN: 'engleski',
    BUTTON_TEXT_DE: 'bosanski',  
    USERNAME: 'Korisnicko ime',
    PASSWORD: 'Sifra',
    LOGIN: 'Prijava',
    L1: 'Molimo popunite sljedecu formu Vasim podacima za prijavu:',
    L2: 'Polja oznacena * su obavezna.',
    FP: 'Zaboravili ste sifru?',
    REGISTRATION: 'Registracija',
    POPUNI: 'Molimo popunite sljedecu formu:',
    REGISTER: 'Registruj se',
    ENTERCODE: 'Unesi kod ovdje:',
    RP: 'Resetovanje sifre',
    RESET: 'Resetuj'
  });
  $translateProvider.preferredLanguage('en');
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
//app.run(['$rootScope', '$location', '$cookieStore', '$http', 'Base64',
//    function ($rootScope, $location, $cookieStore, $http, Base64) {
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