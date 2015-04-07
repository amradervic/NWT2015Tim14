controllers.controller('korisnikController',['$scope', 'korisnikFactory', 
        function ($scope, korisnikFactory) {

    $scope.status;
    $scope.korisnici='';
    $scope.orders;
   

       
        getKorisnici();
//deleteKorisnik('163e981e-dace-11e4-a387-4c72b97adfe5');
    function getKorisnici() {
        korisnikFactory.getKorisnici()
            .success(function (_korisnici) {
                $scope.korisnici = _korisnici;
            })
            .error(function (error) {
                $scope.status = 'Unable to load korisnici data: ' + error.message;
            });
    }

    $scope.updateKorisnik = function (id) {
        var kor;
        for (var i = 0; i < $scope.korisnici.length; i++) {
            var currKorisnik = $scope.korisnici[i];
            if (currKorisnik.ID === id) {
                kor = currKorisnik;
                break;
            }
        }

        korisnikFactory.updateKorisnik(kor)
          .success(function () {
              $scope.status = 'Updated Korisnik! Refreshing korisnik list.';
          })
          .error(function (error) {
              $scope.status = 'Unable to update korisnik: ' + error.message;
          });
    };

    function insertKorisnik(){
        //Fake customer data
       
        var kor = {
            korisnickoIme: 'Melika',
            sifra: 'Melika',
            email:'melika@gmail.com',
            tip:'test',
            aktivan: 1
           
        };
        korisnikFactory.insertKorisnik(kor)
            .success(function (data) {
                $scope.status = 'Inserted Korisnik! Refreshing korisnik list.';
                $scope.korisnici.push(kor);
                console.log(data);
            }).
            error(function(error) {
                $scope.status = 'Unable to insert korisnik: ' + error.message;
            });
    };

    $scope.deleteKorisnik = function (id) {
        korisnikFactory.deleteKorisnik(id)
        .success(function () {
            $scope.status = 'Deleted Korisnik! Refreshing korisnik list.';
            for (var i = 0; i < $scope.korisnici.length; i++) {
                var kor = $scope.korisnici[i];
                if (kor.ID === id) {
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

    $scope.getKorisniciOrders = function (id) {
        korisnikFactory.getOrders(id)
        .success(function (orders) {
            $scope.status = 'Retrieved orders!';
            $scope.orders = orders;
        })
        .error(function (error) {
            $scope.status = 'Error retrieving korisnici! ' + error.message;
        });
    };
}]);