/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

services.factory('recenzijaFactory', function($http) {
     
    var factory = {}; 
    var urlBase='/NWT2015Tim14/index.php/api/recenzije';
 
   factory.getRecenzije = function () {
        return $http.get(urlBase);
    };
    
    factory.getRecenzija = function (id) {
        return $http.get(urlBase + '/' + id);
    };

    factory.insertRecenzija = function (recenzija) {
        return $http.post(urlBase, recenzija);
    };

    factory.updateRecenzija = function (recenzija) {
        return $http.put(urlBase + '/' + recenzija.ID, recenzija);
    };

    factory.deleteRecenzija = function (id) {
        return $http.delete(urlBase + '/' + id);
    };

    factory.getOrders = function (id) {
        return $http.get(urlBase + '/' + id + '/orders');
    };
 
    return factory;
});


