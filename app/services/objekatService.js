services.factory('objekatFactory', function($http) {
     
    var factory = {}; 
    var urlBase='/NWT2015Tim14/index.php/api/objekti';
   var urlBaseOcjene='/NWT2015Tim14/index.php/api/ocjene';
 
   factory.getOcjene = function () {
        return $http.get(urlBaseOcjene);
    };
    
   factory.getObjekti = function () {
        return $http.get(urlBase);
    };
    
    factory.getObjekat = function (id) {
        return $http.get(urlBase + '/' + id);
    };

    factory.insertObjekat = function (objekat) {
        //return $http.post(urlBase, objekat);
		return $http({
                            method : 'POST',
                            url : urlBase,
                            data : objekat
                        })
           .success(function(){
                $.notify("Objekat je uspjesno dodan!", "success");

                            
                        })
                         .error(function(){
                             $.notify("Greska u procesiranju zahtjeva", "danger");
                        });
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



