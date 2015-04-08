controllers.controller('porukaController',['$scope', 'porukaFactory', 
        function ($scope, porukaFactory) {

    //$scope.status;
  //  $scope.poruke='reii';
    //$scope.orders;
   
    insertporuka();
    getporuke();

    function getPoruke() {
        porukaFactory.getPoruke()
            .success(function (_poruke) {
                $scope.poruke = _poruke;
            })
            .error(function (error) {
                $scope.status = 'Unable to load poruke data: ' + error.message;
            });
    }

    $scope.updatePoruka = function (id) {
        var ocj;
        for (var i = 0; i < $scope.poruke.length; i++) {
            var currPoruka = $scope.poruke[i];
            if (currPoruka.ID === id) {
                ocj = currPoruka;
                break;
            }
        }

        porukaFactory.updatePoruka(ocj)
              $scope.status = 'Updated Poruka! Refreshing poruka list.';
          })
          .error(function (error) {
              $scope.status = 'Unable to update poruka: ' + error.message;
          });
    };

    function insertPoruka(){
        //Fake customer data

        var ocj = {


            "vrijednost": 2,
            "Objekat_idObjekat": 3,
            "Korisnici_idKorisnik":"blabla"
        };



        porukaFactory.insertPoruka(ocj)
            .success(function (data) {
                $scope.status = 'Inserted Poruka! Refreshing poruka list.';
                $scope.poruke.push(ocj);
                console.log(data);
            }).
            error(function(error) {
                $scope.status = 'Unable to insert poruka: ' + error.message;
            });
        }

    $scope.deletePoruka = function (id) {
        porukaFactory.deletePoruka(id)
        .success(function () {
            $scope.status = 'Deleted Poruka! Refreshing poruka list.';
            for (var i = 0; i < $scope.poruke.length; i++) {
                var ocj = $scope.poruke[i];
                if (ocj.ID === id) {
                    $scope.poruke.splice(i, 1);
                    break;
                }
            }
            $scope.orders = null;
        })
        .error(function (error) {
            $scope.status = 'Unable to delete poruka: ' + error.message;
        });
    };

    $scope.getPorukeOrders = function (id) {
        porukaFactory.getOrders(id)
        .success(function (orders) {
            $scope.status = 'Retrieved orders!';
            $scope.orders = orders;
        })
        .error(function (error) {
            $scope.status = 'Error retrieving poruke! ' + error.message;
        });
    };
}]);



