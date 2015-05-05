directive.directive('ngInsertofobject',[ function(){
    
    return{
        template:'<form role="form" ng-submit="insertObjekat()">'+
            '<div class="col-lg-6">'+
                '<div class="well well-sm"><strong><span class="glyphicon glyphicon-asterisk"></span>Obavezna polja</strong></div>'+
                '<div class="form-group">'+
                    '<label for="objekt.naziv">Naziv</label>'+
                    '<div class="input-group">'+
                        '<input type="text" class="form-control" name="objekt.naziv" id="objekt.naziv" placeholder="Naziv" ng-model="objekt.naziv" required>'+
                        '<span class="input-group-addon"><span class="glyphicon glyphicon-asterisk"></span></span>'+
                    '</div>'+
                '</div>'+
                '<div class="form-group">'+
                    '<label for="objekt.adresa">Adresa</label>'+
                    '<div class="input-group">'+
                        '<input type="text" class="form-control" id="objekt.adresa" name="objekt.adresa" placeholder="Adresa" ng-model="objekt.adresa" required>'+
                        '<span class="input-group-addon"><span class="glyphicon glyphicon-asterisk"></span></span>'+
                    '</div>'+
                '</div>'+
				'<div class="form-group">'+
                    '<label for="objekt.grad">Grad</label>'+
                    '<div class="input-group">'+
                        '<input type="text" class="form-control" id="objekt.grad" name="objekt.grad" placeholder="Grad" ng-model="objekt.grad" required>'+
                        '<span class="input-group-addon"><span class="glyphicon glyphicon-asterisk"></span></span>'+
                    '</div>'+
                '</div>'+
                '<div class="form-group">'+
                    '<label for="objekt.tip">Kategorija</label>'+
                    '<div class="input-group">'+
                        '<input type="text" class="form-control" id="objekt.tip" name="objekt.tip" placeholder="Kategorija" ng-model="objekt.tip" required>'+
                        '<span class="input-group-addon"><span class="glyphicon glyphicon-asterisk"></span></span>'+
                    '</div>'+
                '</div>'+
                '<div class="form-group">'+
                    '<label for="objekt.opis">Opis</label>'+
                    '<div class="input-group">'+
                        '<textarea name="objekt.opis" id="objekt.opis" class="form-control" rows="5" ng-model="objekt.opis"></textarea>'+
                        '<span class="input-group-addon">'+
                    '</div>'+
                '</div>'+
				'<input type="submit" name="submit" id="submit" value="Dodaj objekat" class="btn btn-info pull-right">'+
            '</div>'+
'</form>'+
		'<!--<div class="col-lg-5 col-md-push-1">'+
            '<div class="col-md-12">'+
                '<div class="alert alert-success">'+
                    '<strong><span class="glyphicon glyphicon-ok"></span> Objekat unesen.</strong>'+
                '</div>'+
                '<div class="alert alert-danger">'+
                    '<span class="glyphicon glyphicon-remove"></span><strong> Došlo je do greške. Provjerite unesene vrijednosti.</strong>'+
                '</div>'+
            '</div>'+
        '</div>'
    };
}]);

 
