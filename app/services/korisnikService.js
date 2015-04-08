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
    factory.getOrders = function (id) {
        return $http.get(urlBase + '/' + id + '/orders');
    };
 */
    return factory;
});


