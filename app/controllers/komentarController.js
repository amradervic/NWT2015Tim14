controllers.controller('komentarController',['$scope', 'komentarFactory',
    function ($scope, komentarFactory) {


        getKomentare();
       // getKomentar(1);


         /*var kom = {


         "tekst": "ovo je komentar sine",
         "vrijemeObjave": "2015-04-08 13:35:44",
         "Recenzija_idRecenzija":"1",
         "Korisnici_idKorisnik":"1"
         };*/


        //insertKomentar(kom);
        //deleteKomentar(2);
        // updateKomentar(kom,1);


        function getKomentare() {
            komentarFactory.getKomentare()
                .success(function (_komentare) {
                    $scope.komentare = _komentare;
                })
                .error(function (error) {
                    $scope.status = 'Unable to load komentare data: ' + error.message;
                });
        }
        function getKomentar(id) {
            komentarFactory.getKomentar(id)
                .success(function (_komentare) {

                    $scope.komentare = _komentare;
                })
                .error(function (error) {
                    $scope.status = 'Unable to load komentare data: ' + error.message;
                });
        }

        function updateKomentar(kom, id) {
            //  var kom;
            /*  for (var i = 0; i < $scope.komentare.length; i++) {
             var currkomentar = $scope.komentare[i];
             if (currkomentar.ID === id) {
             kom = currkomentar;
             break;
             }
             }
             */
            komentarFactory.updateKomentar(kom,id)
                .success(function () {
                    $scope.status = 'Updated komentar! Refreshing komentar list.';
                })
                .error(function (error) {
                    $scope.status = 'Unable to update komentar: ' + error.message;
                });
        };

        function insertKomentar(kom){
            //Fake customer data

            /* var kom = {


             "vrijednost": "4",
             "Objekat_idObjekat": "1",
             "Korisnici_idKorisnik":"426b0556-dd7c-11e4-b520-00269e6cceac"
             };
             */


            komentarFactory.insertKomentar(kom)
                .success(function (data) {
                    $scope.status = 'Inserted komentar! Refreshing komentar list.';
                    $scope.komentare.push(kom);
                    console.log(data);
                }).
                error(function(error) {
                    $scope.status = 'Unable to insert komentar: ' + error.message;
                });
        }


        function deleteKomentar (id) {
            komentarFactory.deleteKomentar(id)
                .success(function () {
                    $scope.status = 'Deleted komentar! Refreshing komentar list.';
                    for (var i = 0; i < $scope.komentare.length; i++) {
                        var kom = $scope.komentare[i];
                        if (kom.ID === id) {
                            $scope.komentare.splice(i, 1);
                            break;
                        }
                    }
                    $scope.orders = null;
                })
                .error(function (error) {
                    $scope.status = 'Unable to delete komentar: ' + error.message;
                });
        };

        /*
         $scope.getkomentareOrders = function (id) {
         komentarFactory.getOrders(id)
         .success(function (orders) {
         $scope.status = 'Retrieved orders!';
         $scope.orders = orders;
         })
         .error(function (error) {
         $scope.status = 'Error retrieving komentare! ' + error.message;
         });
         };  */
    }]);


