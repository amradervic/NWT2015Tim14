controllers.controller('porukaController',['$scope', 'porukaFactory', 
        function ($scope, porukaFactory) {

    //$scope.status;
  // $scope.poruke='reii';
    //$scope.orders;


   

    function getPoruke() {
        porukaFactory.getPoruke()
            .success(function (_poruke) {
                $scope.poruke = _poruke;
            })
            .error(function (error) {
                $scope.status = 'Unable to load poruke data: ' + error.message;
            });
    }

    function getPoruka(id) {
        porukaFactory.getPoruka(id)
            .success(function (_poruke) {
                $scope.poruke = _poruke;
            })
            .error(function (error) {
                $scope.status = 'Unable to load poruke data: ' + error.message;
            });
    }

    function updatePoruka(por, id) {
      /*       var por = {
          
            "naslov": "test",
            "poruka": "poeruka test",

        };
        for (var i = 0; i < $scope.poruke.length; i++) {
            var currPoruka = $scope.poruke[i];
            if (currPoruka.ID === id) {
                por.ID = currPoruka.ID;
                break;
            }
        }*/
        porukaFactory.updatePoruka(por,id)
          .success(function () {
              $scope.status = 'Updated Poruka! Refreshing poruka list.';
          })
          .error(function (error) {
              $scope.status = 'Unable to update poruka: ' + error.message;
          });
    };

    function insertPoruka(por){
        //Fake  data
/*
        var por = {
          
            "naslov": "test",
            "poruka": "poeruka test",
            "Korisnici_idKorisnik": "47b0997a-d222-11e4-a5ae-74867a3dbcef",
            "Korisnici_idKorisnik1":"574b9989-d256-11e4-a5ae-74867a3dbcef"
        };
*/

        porukaFactory.insertPoruka(por)
            .success(function (data) {
                $scope.status = 'Inserted Poruka! Refreshing poruka list.';
                $scope.poruke.push(por);
                console.log(data);
            }).
            error(function(error) {
                $scope.status = 'Unable to insert poruka: ' + error.message;
            });
        }

    function deletePoruka (id) {
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

}]);


