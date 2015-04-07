controllers.controller('objekatController',['$scope', 'objekatFactory', 
        function ($scope, objekatFactory) {

    $scope.status;
    $scope.objekti='reii';
    $scope.orders;
   

    getObjekti();

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

//update objekta
    $scope.updateObjekat = function (id) {
        var obj;
        for (var i = 0; i < $scope.objekti.length; i++) {
            var currObjekat = $scope.objekti[i];
            if (currObjekat.ID === id) {
                obj = currObjekat;
                break;
            }
        }

        objekatFactory.updateObjekat(obj)
          .success(function () {
              $scope.status = 'Updated Objekat! Refreshing objekat list.';
          })
          .error(function (error) {
              $scope.status = 'Unable to update objekat: ' + error.message;
          });
    };

//dodavanje objekta
    function insertObjekat(){
        
        var obj = {
            naziv: "Objekat1",
            adresa: "adresa",
            grad:"sarajevo",
            tip:"tip1",
            opis: "opis"
           
        };
        objekatFactory.insertObjekat(obj)
            .success(function (data) {
                $scope.status = 'Inserted Objekat! Refreshing objekat list.';
                $scope.objekti.push(obj);
                console.log(data);
            }).
            error(function(error) {
                $scope.status = 'Unable to insert korisnik: ' + error.message;
            });
    };

//brisanje objekta
    $scope.deleteObjekat = function (id) {
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
}]);
