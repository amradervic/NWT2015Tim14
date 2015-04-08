/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

services.factory('ocjenaFactory', function($http) {

    var factory = {};
    var urlBase='/NWT2015Tim14/index.php/api/kategorije';

    factory.getKategorije = function () {
        return $http.get(urlBase);
    };

    factory.getKategorija = function (id) {
        return $http.get(urlBase + '/' + id);
    };

    factory.insertKategorija = function (ocjena) {
        return $http.post(urlBase, ocjena);
    };

    factory.updateKategorija = function (ocjena, id) {
        return $http.put(urlBase + '/' + id, ocjena);
    };

    factory.deleteKategorija = function (id) {
        return $http.delete(urlBase + '/' + id);
    };

    factory.getOrders = function (id) {
        return $http.get(urlBase + '/' + id + '/orders');
    };

    return factory;
});


