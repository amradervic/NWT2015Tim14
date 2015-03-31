
//we have to define like that, to call true myapp ing html and call bootstrap.css
angular.module('myapp',['ui.bootstrap']);
//scope is a "glue" between view and controllerl, we will use it to define everything we need 

function AccordionDemoCtrl($scope){
$scope.oneAtATime = true;
$scope.groups= [
{
title: "Dynamic group Header 1",
content: "Dynamic Group Body 1";
},

{
title: "Dynamic group Header 2",
content: "Dynamic Group Body 2";
},

];


}