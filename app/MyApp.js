
/* global angular */

//we have to define like that, to call true myapp ing html and call bootstrap.css
//angular.module('app',['ui.bootstrap']);
var app = angular.module('myApp', []);
//scope is a "glue" between view and controllerl, we will use it to define everything we need 
var regApp = angular.module('regApp', []);