services.factory('logFactory', function($http) {
     
    var factory = {}; 
    var urlBase='/NWT2015Tim14/index.php/api/log';
 
   factory.getLogs = function () {
        return $http.get(urlBase);
    };
    
    factory.getLog = function (id) {
        return $http.get(urlBase + '/' + id);
    };

    factory.insertLog = function (log) {
        return $http.post(urlBase, log);
    };

    factory.updateLog = function (log) {
        return $http.put(urlBase + '/' + log.ID, log);
    };

    factory.deleteLog = function (id) {
        return $http.delete(urlBase + '/' + id);
    };

    factory.getOrders = function (id) {
        return $http.get(urlBase + '/' + id + '/orders');
    };
 
    return factory;
});




