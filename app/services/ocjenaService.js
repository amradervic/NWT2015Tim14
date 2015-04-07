/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

services.factory('ocjenaFactory', function($http) {
     
    var factory = {}; 
    var urlBase='/NWT2015Tim14/index.php/api/ocjene';
 
   factory.getOcjene = function () {
        return $http.get(urlBase);
    };
    
    factory.getOcjena = function (id) {
        return $http.get(urlBase + '/' + id);
    };

    factory.insertOcjena = function (ocjena) {
        return $http.post(urlBase, ocjena);
    };

    factory.updateOcjena = function (ocjena) {
        return $http.put(urlBase + '/' + ocjena.ID, ocjena);
    };

    factory.deleteOcjena = function (id) {
        return $http.delete(urlBase + '/' + id);
    };

    factory.getOrders = function (id) {
        return $http.get(urlBase + '/' + id + '/orders');
    };
 
    return factory;
});


