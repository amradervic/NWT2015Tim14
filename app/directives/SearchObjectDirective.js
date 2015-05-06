directive.directive('ngSearchObject',[ function(){

    return{
        template:
        '<div style="horizontal-align: middle">' +
        '<label>Any: <input ng-model="search.$"></label> <br>'+
		'<label>Name only <input ng-model="search.naziv"></label><br>'+
		'<label>City only <input ng-model="search.grad"></label><br>'+
		'<label>Equality <input type="checkbox" ng-model="strict"></label><br>'+
        '<ul class="list-group" style="width:350px">' +
        '<li ng-repeat="objekt in objekti | filter:search:strict"  class="span12" style="border: 4px groove #20b2aa">'+
       '<h2>Naziv: {{objekt.naziv}}</h2><h5>Grad: {{objekt.grad}}</h5><h5>Adresa: {{objekt.adresa}}</h5><h6>Tip: {{objekt.tip}}</h6><p class="list-group-item-text">Opis: {{objekt.opis}}</p><h6>Ocjena: {{objekt.prosjek}} <span ng-repeat="i in objekt.totalReviews track by $index"> <span class="glyphicon glyphicon-star" aria-hidden="true"></span></span></h6>'+

        '</div>'
    };
}]);
