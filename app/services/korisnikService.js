services.factory('korisnikFactory', function($http) {
     
    var factory = {}; 
    var urlBase='/NWT2015Tim14/index.php/api/korisnici';
 
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
/*
 * 
 * 
    factory.getOrders = function (id) {
        return $http.get(urlBase + '/' + id + '/orders');
    };
 */

     factory.registerKorisnik = function (korisnik) {
        //return $http.post(urlBase, korisnik);
        
         return $http({
                            method : 'POST',
                            url : urlBase,
                            data : korisnik
                        })
         //return $http.post(urlBase, korisnik)
        
           .success(function(){
                            //$http.post('/mail', registerModel.email);
                             alert("Korisnik je uspjesno registrovan!");
                            
                        })
                         .error(function(){
                            alert("Greška u procesiranju zahtjeva");
                        });
    };
    return factory;
});


