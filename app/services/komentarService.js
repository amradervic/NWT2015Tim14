/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

services.factory('komentarFactory', function($http) {

    var factory = {};
    var urlBase='/NWT2015Tim14/index.php/api/komentar';

    factory.getKomentare = function () {
        return $http.get(urlBase);
    };

    factory.getKomentar = function (id) {
        return $http.get(urlBase + '/' + id);
    };

    factory.insertKomentar = function (komentar) {
        return $http.post(urlBase, komentar);
    };

    factory.updateKomentar = function (komentar) {
        return $http.put(urlBase + '/' + komentar.ID, komentar);
    };

    factory.deleteKomentar = function (id) {
        return $http.delete(urlBase + '/' + id);
    };

    factory.getOrders = function (id) {
        return $http.get(urlBase + '/' + id + '/orders');
    };

    return factory;
});


