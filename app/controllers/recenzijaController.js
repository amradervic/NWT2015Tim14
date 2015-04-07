/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


controllers.controller('recenzijaController',['$scope', 'recenzijaFactory', 
        function ($scope, recenzijaFactory) {

    $scope.status;
    $scope.orders;
   

   deleteRecenzija(1);

    function getRecenzije() {
        recenzijaFactory.getRecenzije()
            .success(function (_recenzije) {
                $scope.recenzije = _recenzije;
            })
            .error(function (error) {
                $scope.status = 'Unable to load recenzije data: ' + error.message;
            });
    }

    function updateRecenzija(id) {
        var rec;
        for (var i = 0; i < $scope.recenzije.length; i++) {
            var currRecenzija = $scope.recenzije[i];
            if (currRecenzija.ID === id) {
                rec = currRecenzija;
                break;
            }
        }

        ocjenaFactory.updateRecenzija(rec)
          .success(function () {
              $scope.status = 'Updated Recenzija! Refreshing recenzija list.';
          })
          .error(function (error) {
              $scope.status = 'Unable to update recenzija: ' + error.message;
          });
    }

    function insertRecenzija(){
        //Fake customer data
       // $post_data = json_encode(array('item' => $post_data), JSON_FORCE_OBJECT)
    
        var rec = {
            vrijednost:'3',
            Objekat_idObjekat:'1' ,
            Korisnici_idKorisnik:'91f01abb-dd5e-11e4-abde-006d236aaa16'
        };
        ocjenaFactory.insertRecenzija(rec)
            .success(function (data) {
                $scope.status = 'Inserted Recenzija! Refreshing recenzija list.';
                $scope.recenzije.push(rec);
                console.log(data);
            }).
            error(function(error) {
                $scope.status = 'Unable to insert recenzija: ' + error.message;
            });
    }

    function deleteRecenzija(id) {
        recenzijaFactory.deleteRecenzija(id)
        .success(function () {
            $scope.status = 'Deleted Recenzija! Refreshing recenzija list.';
            for (var i = 0; i < $scope.recenzije.length; i++) {
                var rec = $scope.recenzije[i];
                if (rec.ID === id) {
                    $scope.recenzije.splice(i, 1);
                    break;
                }
            }
            $scope.recenzije = null;
        })
        .error(function (error) {
            $scope.status = 'Unable to delete Recenzija: ' + error.message;
        });
    }

    function getRecenzijeOrders(id) {
        recenzijaFactory.getOrders(id)
        .success(function (orders) {
            $scope.status = 'Retrieved orders!';
            $scope.orders = orders;
        })
        .error(function (error) {
            $scope.status = 'Error retrieving recenzije! ' + error.message;
        });
    }
}]);


