controllers.controller('objekatController',['$scope', 'objekatFactory', 
        function ($scope, objekatFactory) {

  //  $scope.status;
  //  $scope.objekti='reii';
   // $scope.orders;
   
//	insertObjekat();
   // getObjekti();
//
//dobavljanje svih objekata
    function getObjekti() {
        objekatFactory.getObjekti()
            .success(function (_objekti) {
                $scope.objekti = _objekti;
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
    function insertObjekat(obj){
         /*
        var obj = {
			"naziv": "amrads",
			"adresa": "amrads",
			"grad": "amrads",
			"tip": "amrads",
			"opis": "amrads"
        };
        */
        objekatFactory.insertObjekat(obj)
            .success(function (data) {
                $scope.status = 'Inserted Objekat! Refreshing objekat list.';
                $scope.objekti.push(obj);
                console.log(data);
            }).
            error(function(error) {
                $scope.status = 'Unable to insert Objekat: ' + error.message;
            });
		}

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

