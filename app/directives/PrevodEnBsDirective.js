directive.directive('ngPrevodEnBs',[ function(){
    
    return{
        template:'<div ng-controller="TranslateController">'
    				+'<p align="right">'
 					   +'<button ng-click="changeLanguage(\'bs\')" translate="BUTTON_TEXT_DE">BS</button>'
			           +'<button ng-click="changeLanguage(\'en\')" translate="BUTTON_TEXT_EN">EN</button>'
					+'</p>'
				+'</div>'
    };
}]);
