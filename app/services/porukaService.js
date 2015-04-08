/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

services.factory('porukaFactory', function($http) {
     
    var factory = {}; 
    var urlBase='/NWT2015Tim14/index.php/api/poruke';
 
   factory.getPoruke = function () {
        return $http.get(urlBase);
    };
    
    factory.getPoruka = function (id) {
        return $http.get(urlBase + '/' + id);
    };

    factory.insertPoruka = function (poruka) {
        return $http.post(urlBase, poruka);
    };

    factory.updatePoruka = function (poruka) {
        return $http.put(urlBase + '/' + poruka.ID, poruka);
    };

    factory.deletePoruka = function (id) {
        return $http.delete(urlBase + '/' + id);
    };

    factory.getOrders = function (id) {
        return $http.get(urlBase + '/' + id + '/orders');
    };
 
    return factory;
});


