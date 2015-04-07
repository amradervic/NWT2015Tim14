controllers.controller('komentarController',['$scope', 'komentarFactory',
    function ($scope, komentarFactory) {

        //$scope.status;
        //  $scope.komentare='reii';
        //$scope.orders;


        getKomentare();

        function getKomentare() {
            komentarFactory.getKomentare()
                .success(function (_komentare) {
                    $scope.komentare = _komentare;
                })
                .error(function (error) {
                    $scope.status = 'Unable to load komentare data: ' + error.message;
                });
        }

        $scope.updateKomentar = function (id) {
            var ocj;
            for (var i = 0; i < $scope.komentare.length; i++) {
                var currkomentar = $scope.komentare[i];
                if (currkomentar.ID === id) {
                    ocj = currkomentar;
                    break;
                }
            }

            komentarFactory.updateKomentar(ocj)
                .success(function () {
                    $scope.status = 'Updated komentar! Refreshing komentar list.';
                })
                .error(function (error) {
                    $scope.status = 'Unable to update komentar: ' + error.message;
                });
        };

        function insertKomentar(){
            //Fake customer data

            var ocj = {
                ID: 10,
                IDosobe: 1,
                IDobjekta:1,
                Vrijednost: 5
            };
            komentarFactory.insertKomentar(ocj)
                .success(function (data) {
                    $scope.status = 'Inserted komentar! Refreshing komentar list.';
                    $scope.komentare.push(ocj);
                    console.log(data);
                }).
                error(function(error) {
                    $scope.status = 'Unable to insert komentar: ' + error.message;
                });
        }

        $scope.deleteKomentar = function (id) {
            komentarFactory.deleteKomentar(id)
                .success(function () {
                    $scope.status = 'Deleted komentar! Refreshing komentar list.';
                    for (var i = 0; i < $scope.komentare.length; i++) {
                        var ocj = $scope.komentare[i];
                        if (ocj.ID === id) {
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

        $scope.getKomentareOrders = function (id) {
            komentarFactory.getOrders(id)
                .success(function (orders) {
                    $scope.status = 'Retrieved orders!';
                    $scope.orders = orders;
                })
                .error(function (error) {
                    $scope.status = 'Error retrieving Komentare! ' + error.message;
                });
        };
    }]);


