controllers.controller('objekatController',['$scope', 'objekatFactory', 'ocjenaFactory',
        function ($scope, objekatFactory, ocjenaFactory) {



  getObjekti();
//
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

    function getObjekti() {
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
            
           
            
    }
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
                $scope.status = 'Inserted Objekat! Refreshing objekat list.';
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
}]);

