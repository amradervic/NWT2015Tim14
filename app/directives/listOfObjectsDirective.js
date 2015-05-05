directive.directive('ngListofobjects',[ function(){
    
    return{
        template:'<div style="horizontal-align: middle">' +
                  '<ul class="list-group" style="width:350px">' +
                  '<li  ng-repeat="objekt in objekti" class="span12" style="border: 4px groove #20b2aa">'+
'<h2>{{objekt.naziv}}</h2><h5>{{objekt.grad}}</h5><h5>{{objekt.adresa}}</h5><h6>Kategorija:{{objekt.tip}}</h6><p class="list-group-item-text">{{objekt.opis}}</p><h6>Ocjena: {{objekt.prosjek}} <span ng-repeat="i in objekt.totalReviews track by $index"> <span class="glyphicon glyphicon-star" aria-hidden="true"></span></span></h6>'+
                    
                    '</div>'
    };
}]);


