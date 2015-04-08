services.factory('objekatFactory', function($http) {
     
    var factory = {}; 
    var urlBase='/NWT2015Tim14/index.php/api/objekti';
 
   factory.getObjekti = function () {
        return $http.get(urlBase);
    };
    
    factory.getObjekat = function (id) {
        return $http.get(urlBase + '/' + id);
    };

    factory.insertObjekat = function (objekat) {
        return $http.post(urlBase, objekat);
    };

    factory.updateObjekat = function (objekat, id) {
        return $http.put(urlBase + '/' + id, objekat);
    };

    factory.deleteObjekat = function (id) {
        return $http.delete(urlBase + '/' + id);
    };

    factory.getOrders = function (id) {
        return $http.get(urlBase + '/' + id + '/orders');
    };
 
    return factory;
});



