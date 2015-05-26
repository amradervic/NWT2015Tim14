controllers.controller('objekatController',['$scope', 'objekatFactory', 'ocjenaFactory',
        function ($scope, objekatFactory, ocjenaFactory) {
            $scope.objekti={};

//$scope.getDashboard=function(){
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
var ctx = document.getElementById("canvas").getContext("2d");
		window.myBar = new Chart(ctx).Bar(barChartData, {
			responsive : true
		});

var pieData = [
				{
					value: 25,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "5"
				},
				{
					value: 18,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "4"
				},
				{
					value: 10,
					color: "#FDB45C",
					highlight: "#FFC870",
					label: "3"
				},
				{
					value: 5,
					color: "#949FB1",
					highlight: "#A8B3C5",
					label: "2"
				},
				{
					value: 0,
					color: "#4D5360",
					highlight: "#616774",
					label: "1"
				}

			];
      
      var ctx2 = document.getElementById("chart-area").getContext("2d");
				window.myPie = new Chart(ctx2).Pie(pieData);
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

			
				var ctx3 = document.getElementById("chart-area2").getContext("2d");
				window.myPolarArea = new Chart(ctx3).PolarArea(polarData, {
					responsive:true
				});

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


		var ctx4 = document.getElementById("canvas2").getContext("2d");
		window.myLine = new Chart(ctx4).Line(lineChartData, {
			responsive: true
		});
                
                var ctx5 = document.getElementById("canvas3").getContext("2d");
		window.myLine = new Chart(ctx5).Line(lineChartData, {
			responsive: true
		});
 //               };
//dobavljanje svih objekata
function getOcjene(){
    ocjenaFactory.getOcjene()
            .success(function (_ocjene) {
                $scope.ocjene = _ocjene;
                var zbir=parseInt("0");
                var ukupno=0;
                for (var i = 0; i < $scope.ocjene.length; i++) {
                var ocj = $scope.ocjene[i];
                if(ocj.Objekat_idObjekat==1){
                zbir=zbir+parseInt(ocj.vrijednost);
                ukupno ++;
            }
            }
            var prosjecna=zbir/ukupno;
            $scope.prosjek=zbir/ukupno;
            })
            .error(function (error) {
                $scope.status = 'Unable to load ocjene data: ' + error.message;
            });
    
   
         
}


    $scope.getObjekti=function () {
        getOcjene();
        objekatFactory.getObjekti()
            .success(function (_objekti) {
                $scope.objekti = _objekti;
                
              ocjenaFactory.getOcjene()
            .success(function (_ocjene) {
                $scope.ocjene = _ocjene;
                for (var i = 0; i < $scope.objekti.length; i++) {
                var zbir=parseInt("0");
                var ukupno=0;
                for (var j = 0; j < $scope.ocjene.length; j++) {
                var ocj = $scope.ocjene[j];
                var obj = $scope.objekti[i];
                if(parseInt(ocj.Objekat_idObjekat)==parseInt(obj.idObjekat)){
                zbir=zbir+parseInt(ocj.vrijednost);
                ukupno ++;
            }
            }
            var prosjecna=zbir/ukupno;
            $scope.objekti[i].prosjek=zbir/ukupno;
            $scope.objekti[i].totalReviews = new Array(zbir/ukupno);
            }})
            .error(function (error) {
                $scope.status = 'Unable to load ocjene data: ' + error.message;
            });
               
                })
            .error(function (error) {
                $scope.status = 'Unable to load objekti data: ' + error.message;
            });
            
           
            
    };
    
  $scope.getObjekti();
// dobavljanje objekta
    function getObjekat(id) {
        objekatFactory.getObjekat(id)
            .success(function (_objekti) {
                $scope.objekti = _objekti;
            })
            .error(function (error) {
                $scope.status = 'Unable to load objekti data: ' + error.message;
            });
    }

//update objekta
    function updateObjekat(obj, id) {
    /*    var obj;
        for (var i = 0; i < $scope.objekti.length; i++) {
            var currObjekat = $scope.objekti[i];
            if (currObjekat.ID === id) {
                obj = currObjekat;
                break;
            }
        }
*/
        objekatFactory.updateObjekat(obj)
          .success(function () {
              $scope.status = 'Updated Objekat! Refreshing objekat list.';
          })
          .error(function (error) {
              $scope.status = 'Unable to update objekat: ' + error.message;
          });
    };

    //dodavanje objekta
    //function insertObjekat(){
	$scope.insertObjekat=function(){
			console.log('doslo do prve');
			 /*
			var obj = {
			"naziv": "amrads",
			"adresa": "amrads",
			"grad": "amrads",
			"tip": "amrads",
			"opis": "amrads"
        };
        */
        objekatFactory.insertObjekat($scope.objekt)
            .success(function (data) {
                
                //$scope.status = 'Inserted Objekat! Refreshing objekat list.';
                $scope.objekti.push($scope.objekt);
                console.log(data);
            }).
            error(function(error) {
                $scope.status = 'Unable to insert Objekat: ' + error.message;
            });
		};

//brisanje objekta
    function deleteObjekat(id) {
        objekatFactory.deleteObjekat(id)
        .success(function () {
            $scope.status = 'Deleted Objekat! Refreshing objekat list.';
            for (var i = 0; i < $scope.objekti.length; i++) {
                var obj = $scope.objekti[i];
                if (obj.ID === id) {
                    $scope.korisnici.splice(i, 1);
                    break;
                }
            }
            $scope.orders = null;
        })
        .error(function (error) {
            $scope.status = 'Unable to delete korisnici: ' + error.message;
        });
    };
    
     var daftPoints = [[0, 4]],
        punkPoints = [[1, 20]];
    
    var data1 = [
        {
            data: daftPoints,
            color: '#00b9d7',
            bars: {show: true, barWidth:1, fillColor: '#00b9d7', order: 1, align: "center" }
        },
        {
            data: punkPoints,
            color: '#3a4452',
            bars: {show: true, barWidth:1, fillColor: '#3a4452', order: 2, align: "center" }
        }
    ];      
    
    $scope.data2 = data1;
/*
    $scope.getObjektiOrders = function (id) {
        objekatFactory.getOrders(id)
        .success(function (orders) {
            $scope.status = 'Retrieved orders!';
            $scope.orders = orders;
        })
        .error(function (error) {
            $scope.status = 'Error retrieving korisnici! ' + error.message;
        });
    };
    */
   
  
    // => activePoints is an array of segments on the canvas that are at the same position as the click event.

}]);

