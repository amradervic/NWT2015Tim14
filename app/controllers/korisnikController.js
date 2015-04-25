'use strict';

controllers.controller('korisnikController',['$scope', 'korisnikFactory', 
        function ($scope, korisnikFactory) {

 //   $scope.status;
 //   $scope.korisnici='';
  //  $scope.orders;
   
 $scope.korisnik = {
     idKorisnik: "null",
        korisnickoIme : "",
        sifra: "",
        email : "",
        tip: "obicni",
        aktivan: "0",
	banovan: "0" 
        
        
    };
//	insertKorisnik();
  
    function getKorisnici() {
        korisnikFactory.getKorisnici()
            .success(function (_korisnici) {
                $scope.korisnici = _korisnici;
            })
            .error(function (error) {
                $scope.status = 'Unable to load korisnici data: ' + error.message;
            });
    }

    function getKorisnik(id) {
        korisnikFactory.getKorisnik(id)
            .success(function (_korisnici) {
                $scope.korisnici = _korisnici;
            })
            .error(function (error) {
                $scope.status = 'Unable to load korisnici data: ' + error.message;
            });
    }


    function updateKorisnik(kor, id) {
        /*var kor;
        for (var i = 0; i < $scope.korisnici.length; i++) {
            var currKorisnik = $scope.korisnici[i];
            if (currKorisnik.ID === id) {
                kor = currKorisnik;
                break;
            }
        }
*/
        korisnikFactory.updateKorisnik(kor, id)
          .success(function () {
              $scope.status = 'Updated Korisnik! Refreshing korisnik list.';
          })
          .error(function (error) {
              $scope.status = 'Unable to update korisnik: ' + error.message;
          });
    };

    function insertKorisnik(kor){
        //Fake customer data
       //nema veze sto je idKorisnika null jer nikad nece biti null upisano u bazu, nego ce se odmah uuid generisati i unijeti 
   /*     var kor = {
			"idKorisnik": "null",
			"korisnickoIme": "amradervic",
			"sifra": "amrad",
			"email": "amradervic@amra.com",
			"tip": "obicni",
			"aktivan": "1",
			"banovan": "0" 
		 };*/
        korisnikFactory.insertKorisnik(kor)
            .success(function (data) {
                $scope.status = 'Inserted Korisnik! Refreshing korisnik list.';
                $scope.korisnici.push(kor);
                console.log(data);
            }).
            error(function(error) {
                $scope.status = 'Unable to insert korisnik: ' + error.message;
            });
		}

//	function actionRegister(){
//		$scope.submit=function(){
//			alert($scope.email);
//		}
//		//req.body.username;
//		var username = document.form.username.value,
//		email = document.form.email.value,
//		password = document.form.password.value;
//		var kor = {
//			"idKorisnik": "null",
//			"korisnickoIme": "hard",
//			"sifra": "kodirane",
//			"email": "vrijednosti",
//			"tip": "obicni",
//			"aktivan": "0",
//			"banovan": "0" 
//		 };
//		
//		 korisnikFactory.insertKorisnik(kor)
//            .success(function (data) {
//                $scope.status = 'Inserted Korisnik! Refreshing korisnik list.';
//                $scope.korisnici.push(kor);
//                console.log(data);
//            }).
//            error(function(error) {
//                $scope.status = 'Unable to insert korisnik: ' + error.message;
//            });
//		//document.form.username.focus();
//		//document.getElementById("errorBox").innerHTML="ime glasi"+username;
//	}

 $scope.actionRegisterUser=function(){
		korisnikFactory.registerKorisnik($scope.korisnik);
		//document.getElementById("errorBox").innerHTML="ime glasi"+username;
	};



    function deleteKorisnik(id) {
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
/*
    $scope.getKorisniciOrders = function (id) {
        korisnikFactory.getOrders(id)
        .success(function (orders) {
            $scope.status = 'Retrieved orders!';
            $scope.orders = orders;
        })
        .error(function (error) {
            $scope.status = 'Error retrieving korisnici! ' + error.message;
        });
    };*/
}]);