directive.directive('ngSearchUsers',[ function(){
    return{
		
        template:
        '<form role="form" ng-submit="insertPoruka()">'+
				'<input type="submit" name="submit" id="submit" value="Dodaj objekat" class="btn btn-info pull-right">'+
            '</form>'
    };
}]);
