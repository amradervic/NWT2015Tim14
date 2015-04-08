controllers.controller('porukaController',['$scope', 'porukaFactory', 
        function ($scope, porukaFactory) {

    //$scope.status;
   $scope.poruke='reii';
    //$scope.orders;
   

    getPoruke();


    function getPoruke() {
        porukaFactory.getPoruke()
            .success(function (_poruke) {
                $scope.poruke = _poruke;
            })
            .error(function (error) {
                $scope.status = 'Unable to load poruke data: ' + error.message;
            });
    }

    function updatePoruka(id) {
        var por;
        for (var i = 0; i < $scope.poruke.length; i++) {
            var currPoruka = $scope.poruke[i];
            if (currPoruka.ID === id) {
                por = currPoruka;
                break;
            }
        }

        porukaFactory.updatePoruka(por)
          .success(function () {
              $scope.status = 'Updated Poruka! Refreshing poruka list.';
          })
          .error(function (error) {
              $scope.status = 'Unable to update poruka: ' + error.message;
          });
    };

    function insertPoruka(){
        //Fake  data

        var por = {


            "vrijednost": 2,
            "Objekat_idObjekat": 3,
            "Korisnici_idKorisnik":"blabla"
        };


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


