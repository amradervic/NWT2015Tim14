directive.directive('ngListofkomentari',[ function(){

    return{
        template:
        '<div style="horizontal-align: middle">' +
        'Unesite ID korisnika: <input type="text" ng-model="bindaj"><br>'   +

        '<ul class="list-group" style="width:350px">' +
        '<li  ng-repeat="komentar in komentare | filter : { Korisnici_idKorisnik : bindaj }"  class="span12" style="border: 4px groove #20b2aa">'+
        '<h2>{{komentar.tekst}}</h2><h5>{{komentar.vrijemeObjave}}</h5>' +

        '</div>'
    };
}]);


