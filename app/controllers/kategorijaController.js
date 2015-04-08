controllers.controller('kategorijaController',['$scope', 'kategorijaFactory',
    function ($scope, kategorijaFactory) {

        //$scope.status;
        //  $scope.kategorije='reii';
        //$scope.orders;
        //getKategorije();
        //getkategorija(2);

        /*
         var ocj = {


         "vrijednost": "4",
         "Objekat_idObjekat": "1",
         "Korisnici_idKorisnik":"KAKAKAKAK"
         };
         */

        //insertkategorija(ocj);
        //deletekategorija(2);
        // updatekategorija(ocj,1);


        function getKategorije() {
            kategorijaFactory.getKategorije()
                .success(function (_kategorije) {
                    $scope.kategorije = _kategorije;
                })
                .error(function (error) {
                    $scope.status = 'Unable to load kategorije data: ' + error.message;
                });
        }
        function getKategorija(id) {
            kategorijaFactory.getKategorija(id)
                .success(function (_kategorije) {

                    $scope.kategorije = _kategorije;
                })
                .error(function (error) {
                    $scope.status = 'Unable to load kategorije data: ' + error.message;
                });
        }

        function updateKategorija(ocj, id) {
            //  var ocj;
            /*  for (var i = 0; i < $scope.kategorije.length; i++) {
             var currkategorija = $scope.kategorije[i];
             if (currkategorija.ID === id) {
             ocj = currkategorija;
             break;
             }
             }
             */
            kategorijaFactory.updateKategorija(ocj,id)
                .success(function () {
                    $scope.status = 'Updated kategorija! Refreshing kategorija list.';
                })
                .error(function (error) {
                    $scope.status = 'Unable to update kategorija: ' + error.message;
                });
        };

        function insertKategorija(ocj){
            //Fake customer data

            /* var ocj = {


             "vrijednost": "4",
             "Objekat_idObjekat": "1",
             "Korisnici_idKorisnik":"426b0556-dd7c-11e4-b520-00269e6cceac"
             };
             */


            kategorijaFactory.insertKategorija(ocj)
                .success(function (data) {
                    $scope.status = 'Inserted kategorija! Refreshing kategorija list.';
                    $scope.kategorije.push(ocj);
                    console.log(data);
                }).
                error(function(error) {
                    $scope.status = 'Unable to insert kategorija: ' + error.message;
                });
        }


        function deleteKategorija (id) {
            kategorijaFactory.deleteKategorija(id)
                .success(function () {
                    $scope.status = 'Deleted kategorija! Refreshing kategorija list.';
                    for (var i = 0; i < $scope.kategorije.length; i++) {
                        var ocj = $scope.kategorije[i];
                        if (ocj.ID === id) {
                            $scope.kategorije.splice(i, 1);
                            break;
                        }
                    }
                    $scope.orders = null;
                })
                .error(function (error) {
                    $scope.status = 'Unable to delete kategorija: ' + error.message;
                });
        };

        /*
         $scope.getkategorijeOrders = function (id) {
         kategorijaFactory.getOrders(id)
         .success(function (orders) {
         $scope.status = 'Retrieved orders!';
         $scope.orders = orders;
         })
         .error(function (error) {
         $scope.status = 'Error retrieving kategorije! ' + error.message;
         });
         };  */
    }]);


