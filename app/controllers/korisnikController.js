controllers.controller('korisnikController',['$scope', 'korisnikFactory', 
        function ($scope, korisnikFactory) {

 //   $scope.status;
   $scope.korisnici=[];
  //  $scope.orders;

$scope.reset = {
    email: ""
};
getKorisnici();


   $scope.labele=["Banovanih", "Aktivnih"];
            korisnikFactory.getKorisnici().then(function (data) {
    var obj=data.data;
//	console.log('prva');
 
//	console.log('druga');
	
    var banovanih = 0;
    for (var i = 0; i<obj.length; i++) {
        if((obj[i].banovan)==1) {banovanih++};
         
    }
    $scope.data = [parseInt(banovanih), parseInt(obj.length-banovanih)];
 });


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

$scope.banKorisnik=function(kor, id) {
         korisnikFactory.getKorisnici().then(function (data) {
    var obj=data.data;
 //   $scope.labels=["Banovanih", "Aktivnih"];
    var banovanih = 0;
    for (var i = 0; i<obj.length; i++) {
        if((obj[i].banovan)==1) banovanih++;
    
    }
    $scope.data = [banovanih+1, obj.length-banovanih-1]; });
   
            kor.banovan=1;
            
                   
             korisnikFactory.updateKorisnik(kor, id);

      


    };
    
    $scope.unbanKorisnik=function(kor, id) {
                             korisnikFactory.getKorisnici().then(function (data) {
    var obj=data.data;
//    $scope.labels=["Banovanih", "Aktivnih"];
    var banovanih = 0;
    for (var i = 0; i<obj.length; i++) {
        if((obj[i].banovan)==1) banovanih++;
      
    }
    $scope.data = [banovanih-1, obj.length-banovanih+1];
 });   
            kor.banovan=0;
          
             korisnikFactory.updateKorisnik(kor, id);

    
    };

    function updateKorisnik(kor, id) {

        korisnikFactory.updateKorisnik(kor, id);
   
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
                 $.notify("Registration finished", "success");
                $scope.status = 'Inserted Korisnik! Refreshing korisnik list.';
                $scope.korisnici.push(kor);
                console.log(data);
            }).
            error(function(error) {
                $scope.status = 'Unable to insert korisnik: ' + error.message;
            });
		}

 $scope.actionRegisterUser=function(){
      var korisnik = {
            
            "korisnickoIme": $scope.korisnik.korisnickoIme,
            "sifra": $scope.korisnik.sifra,
            "email":$scope.korisnik.email,
            "tip": "obicni",
            "banovan": "0",
            "aktivan":"0",
            "idKorisnik":"1"
        };
     
                
		korisnikFactory.registerKorisnik(korisnik, $scope.korisnik.email);
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

    $scope.actionResetPassword=function(){
    //    var email = document.form.reset.email.value;
        korisnikFactory.resetPassword($scope.email);
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