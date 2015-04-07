controllers.controller('ocjenaController',['$scope', 'ocjenaFactory', 
        function ($scope, ocjenaFactory) {

    //$scope.status;
  //  $scope.ocjene='reii';
    //$scope.orders;
   
    insertOcjena();
    getOcjene();

    function getOcjene() {
        ocjenaFactory.getOcjene()
            .success(function (_ocjene) {
                $scope.ocjene = _ocjene;
            })
            .error(function (error) {
                $scope.status = 'Unable to load ocjene data: ' + error.message;
            });
    }

    $scope.updateOcjena = function (id) {
        var ocj;
        for (var i = 0; i < $scope.ocjene.length; i++) {
            var currOcjena = $scope.ocjene[i];
            if (currOcjena.ID === id) {
                ocj = currOcjena;
                break;
            }
        }

        ocjenaFactory.updateOcjena(ocj)
          .success(function () {
              $scope.status = 'Updated Ocjena! Refreshing ocjena list.';
          })
          .error(function (error) {
              $scope.status = 'Unable to update ocjena: ' + error.message;
          });
    };

    function insertOcjena(){
        //Fake customer data

        var ocj = {


            "vrijednost": 2,
            "Objekat_idObjekat": 3,
            "Korisnici_idKorisnik":"blabla"
        };



        ocjenaFactory.insertOcjena(ocj)
            .success(function (data) {
                $scope.status = 'Inserted Ocjena! Refreshing ocjena list.';
                $scope.ocjene.push(ocj);
                console.log(data);
            }).
            error(function(error) {
                $scope.status = 'Unable to insert ocjena: ' + error.message;
            });
        }

    $scope.deleteOcjena = function (id) {
        ocjenaFactory.deleteOcjena(id)
        .success(function () {
            $scope.status = 'Deleted Ocjena! Refreshing ocjena list.';
            for (var i = 0; i < $scope.ocjene.length; i++) {
                var ocj = $scope.ocjene[i];
                if (ocj.ID === id) {
                    $scope.ocjene.splice(i, 1);
                    break;
                }
            }
            $scope.orders = null;
        })
        .error(function (error) {
            $scope.status = 'Unable to delete ocjena: ' + error.message;
        });
    };

    $scope.getOcjeneOrders = function (id) {
        ocjenaFactory.getOrders(id)
        .success(function (orders) {
            $scope.status = 'Retrieved orders!';
            $scope.orders = orders;
        })
        .error(function (error) {
            $scope.status = 'Error retrieving ocjene! ' + error.message;
        });
    };
}]);


