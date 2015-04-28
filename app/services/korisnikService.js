services.factory('korisnikFactory', function($http) {
     
    var factory = {}; 
    var urlBase='/NWT2015Tim14/index.php/api/korisnici';
    var urlB = '/NWT2015Tim14/index.php/api/reset';
    var urlActivate='/NWT2015Tim14/index.php/api/activate'
   factory.getKorisnici = function () {
        return $http.get(urlBase);
    };
    
    factory.getKorisnik = function (id) {
       return $http.get(urlBase + '/' + id);
        
    };

    factory.insertKorisnik = function (korisnik) {
        return $http.post(urlBase, korisnik);
    };

    factory.updateKorisnik = function (korisnik, id) {
        return $http.put(urlBase + '/' + id, korisnik);
    };

    factory.deleteKorisnik = function (id) {
        return $http.delete(urlBase + '/' + id);
    };
    factory.resetPassword = function (email) {
   //   return $http.get(urlB + '/' + email);
   // return $http.get(urlB);
            return $http({
                            method : 'GET',
                            url : urlB + '/' + email
                            
                        })
              .success(function(){ 
                  alert("Sifra je resetovana");
              })
              .error(function(){
                            alert("Greška u procesiranju zahtjeva");
                        });
    }
    
/*
 * 
 * 
    factory.getOrders = function (id) {
        return $http.get(urlBase + '/' + id + '/orders');
    };
 */

     factory.registerKorisnik = function (korisnik, email) {
        //return $http.post(urlBase, korisnik);
        
         return $http({
                            method : 'POST',
                            url : urlBase,
                            data : korisnik
                        })
         //return $http.post(urlBase, korisnik)
        
           .success(function(){
           
               return $http({
                            method : 'GET',
                            url : urlActivate + '/' + email
                            
                        })
              .success(function(){ 
                  setTimeout(function(){ alert("Podaci za korisnika su uneseni. Uskoro cete dobiti aktivacijski email."); }, 3000);
                 
              })
              .error(function(){
                            alert("Greška u procesiranju zahtjeva");
                        });
               
           
                      alert("Korisnik je dodan");
                               
                           
                            
                            
                        })
                         .error(function(){
                            alert("Greška u procesiranju zahtjeva");
                        });
    };
    return factory;
});


