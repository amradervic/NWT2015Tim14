controllers.controller('ocjenaController',['$scope', 'ocjenaFactory', 
        function ($scope, ocjenaFactory) {

    //$scope.status;
  //  $scope.ocjene='reii';
    //$scope.orders;
   //getOcjene();
   //getOcjena(2);

/*
            var ocj = {


                "vrijednost": "4",
                "Objekat_idObjekat": "1",
                "Korisnici_idKorisnik":"KAKAKAKAK"
            };
            */

            //insertOcjena(ocj);
            //deleteOcjena(2);
           // updateOcjena(ocj,1);


    function getOcjene() {
        ocjenaFactory.getOcjene()
            .success(function (_ocjene) {
                $scope.ocjene = _ocjene;
            })
            .error(function (error) {
                $scope.status = 'Unable to load ocjene data: ' + error.message;
            });
    }
    function getOcjena(id) {
        ocjenaFactory.getOcjena(id)
            .success(function (_ocjene) {

                $scope.ocjene = _ocjene;
            })
            .error(function (error) {
                $scope.status = 'Unable to load ocjene data: ' + error.message;
            });
    }

    function updateOcjena(ocj, id) {
      //  var ocj;
      /*  for (var i = 0; i < $scope.ocjene.length; i++) {
            var currOcjena = $scope.ocjene[i];
            if (currOcjena.ID === id) {
                ocj = currOcjena;
                break;
            }
        }
*/
        ocjenaFactory.updateOcjena(ocj,id)
          .success(function () {
              $scope.status = 'Updated Ocjena! Refreshing ocjena list.';
          })
          .error(function (error) {
              $scope.status = 'Unable to update ocjena: ' + error.message;
          });
    };

    function insertOcjena(ocj){
        //Fake customer data

       /* var ocj = {


            "vrijednost": "4",
            "Objekat_idObjekat": "1",
            "Korisnici_idKorisnik":"426b0556-dd7c-11e4-b520-00269e6cceac"
        };
*/


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


     function deleteOcjena (id) {
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

/*
    $scope.getOcjeneOrders = function (id) {
        ocjenaFactory.getOrders(id)
        .success(function (orders) {
            $scope.status = 'Retrieved orders!';
            $scope.orders = orders;
        })
        .error(function (error) {
            $scope.status = 'Error retrieving ocjene! ' + error.message;
        });
    };  */
}]);


