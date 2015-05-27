controllers.controller('dashboardController',['$scope', 'objekatFactory', 'ocjenaFactory',
        function ($scope, objekatFactory, ocjenaFactory) {
			
			objekatFactory.getObjekti().then(function (data){
			var obj = data.data;
			$scope.labels = ["Restaurant", "Caffe", "Shopping", "Hotel"];
			var restorani=0;
			var kafici=0;
			var shopping=0;
			var hotel =0;
			for(var i=0; i<obj.length; i++){
				if(String(obj[i].tip)=="Restoran"){restorani=restorani+1;}
				if(String(obj[i].tip)=="Caffe"){kafici=kafici+1;}
				if(String(obj[i].tip)=="Shopping"){shopping=shopping+1;}
				if(String(obj[i].tip)=="Hotel"){hotel=hotel+1;}
			}
			$scope.data = [parseInt(restorani), parseInt(kafici), parseInt(shopping), parseInt(hotel)];
			});	
			 $scope.onClick = function (points, evt) {
				 console.log(points, evt);
				 };
			$scope.series = ['Series A', 'Series B'];
			 $scope.randomScalingFactor = function(){ return Math.round(Math.random()*100)};
			 
			 var randomScalingFactor = function(){ return Math.round(Math.random()*100)};

	var barChartData = {
		labels : ["January","February","March","April","May","June","July"],
		datasets : [
			{
				fillColor : "rgba(220,220,220,0.5)",
				strokeColor : "rgba(220,220,220,0.8)",
				highlightFill: "rgba(220,220,220,0.75)",
				highlightStroke: "rgba(220,220,220,1)",
				data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
			},
			{
				fillColor : "rgba(151,187,205,0.5)",
				strokeColor : "rgba(151,187,205,0.8)",
				highlightFill : "rgba(151,187,205,0.75)",
				highlightStroke : "rgba(151,187,205,1)",
				data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
			}
		]

	}

if(document.getElementById("canvas")!=null){	
var ctx = document.getElementById("canvas").getContext("2d");

		window.myBar = new Chart(ctx).Bar(barChartData, {
			responsive : true
		});
}
				
			 var polarData = [
				{
					value: 300,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "Red"
				},
				{
					value: 50,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "Green"
				},
				{
					value: 100,
					color: "#FDB45C",
					highlight: "#FFC870",
					label: "Yellow"
				},
				{
					value: 40,
					color: "#949FB1",
					highlight: "#A8B3C5",
					label: "Grey"
				},
				{
					value: 120,
					color: "#4D5360",
					highlight: "#616774",
					label: "Dark Grey"
				}

			];

			if(document.getElementById("chart-area2")!=null){	
				var ctx3 = document.getElementById("chart-area2").getContext("2d");
				window.myPolarArea = new Chart(ctx3).PolarArea(polarData, {
					responsive:true
				});
			}
			var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
		var lineChartData = {
			labels : ["January","February","March","April","May","June","July"],
			datasets : [
				{
					label: "My First dataset",
					fillColor : "rgba(220,220,220,0.2)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(220,220,220,1)",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				},
				{
					label: "My Second dataset",
					fillColor : "rgba(151,187,205,0.2)",
					strokeColor : "rgba(151,187,205,1)",
					pointColor : "rgba(151,187,205,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(151,187,205,1)",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				}
			]

		}

if(document.getElementById("canvas2")!=null){	
		var ctx4 = document.getElementById("canvas2").getContext("2d");
		window.myLine = new Chart(ctx4).Line(lineChartData, {
			responsive: true
		});
}
         if(document.getElementById("canvas3")!=null){	       
                var ctx5 = document.getElementById("canvas3").getContext("2d");
		window.myLine = new Chart(ctx5).Line(lineChartData, {
			responsive: true
		});
		 }
}]);	


