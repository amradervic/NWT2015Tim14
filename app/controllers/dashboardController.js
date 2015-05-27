controllers.controller('dashboardController',['$scope', 'objekatFactory', 'ocjenaFactory',
        function ($scope, objekatFactory, ocjenaFactory) {
			
			objekatFactory.getObjekti().then(function (data){
			var obj = data.data;
			$scope.labels = ["Restoran", "Caffe", "Shopping"];
			var restorani=0;
			var kafici=0;
			var shopping=0;
			for(var i=0; i<obj.length; i++){
				if(String(obj[i].tip)=="Restoran"){restorani=restorani+1;}
				if(String(obj[i].tip)=="Caffe"){kafici=kafici+1;}
				if(String(obj[i].tip)=="Shopping"){shopping=shopping+1;}
			}
			$scope.data = [parseInt(restorani), parseInt(kafici), parseInt(shopping)];
			});	
}]);	


