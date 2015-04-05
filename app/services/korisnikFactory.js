/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


regApp.factory('korisnikFactory',  function($http) {

    var urlBase = '/api/korisnici/'+ '?callback=JSON_CALLBACK';
    var korisnikFactory = {};

    korisnikFactory.getCustomers = function () {
        return $http.get(urlBase);
       
    };
    /*
    dataFactory.getCustomer = function (id) {
        return $http.get(urlBase + '/' + id);
    };

    dataFactory.insertCustomer = function (cust) {
        return $http.post(urlBase, cust);
    };

    dataFactory.updateCustomer = function (cust) {
        return $http.put(urlBase + '/' + cust.ID, cust)
    };

    dataFactory.deleteCustomer = function (id) {
        return $http.delete(urlBase + '/' + id);
    };

    dataFactory.getOrders = function (id) {
        return $http.get(urlBase + '/' + id + '/orders');
    };
*/
        return korisnikFactory;
});

