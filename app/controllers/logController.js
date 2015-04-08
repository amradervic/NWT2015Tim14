controllers.controller('logController',['$scope', 'logFactory', 
        function ($scope, logFactory) {

  //  $scope.status;
  //  $scope.logs='reii';
  // $scope.orders;
   

 //   getLogs();

//dobavljanje logs
    function getLogs() {
        logFactory.getLogs()
            .success(function (_logs) {
                $scope.logs = _logs;
            })
            .error(function (error) {
                $scope.status = 'Unable to load logs data: ' + error.message;
            });
    }
//dobavljanje loga
    function getLog(id) {
        logFactory.getLog(id)
            .success(function (_logs) {
                $scope.logs = _logs;
            })
            .error(function (error) {
                $scope.status = 'Unable to load logs data: ' + error.message;
            });
    }

//update logs
    function updateLog(log, id) {
     /*   var kor;
        for (var i = 0; i < $scope.logs.length; i++) {
            var currLog = $scope.logs[i];
            if (currLog.ID === id) {
                kor = currLog;
                break;
            }
        }
*/
        logFactory.updateLog(log,id)
          .success(function () {
              $scope.status = 'Updated Log! Refreshing log list.';
          })
          .error(function (error) {
              $scope.status = 'Unable to update log: ' + error.message;
          });
    };

//insert loga
    function insertLog(log){
        //Fake customer data
    /*   var ip=function getip(json){
      alert(json.ip); // alerts the ip address
    };
    var date=new Date();
        var log = {
            vrijemeLogiranja: date,
            ipAdresa: ip,
            Korisnici_idKorisnik:"163e981e-dace-11e4-a387-4c72b97adfe5"
           
        };
*/
        logFactory.insertLog(log)
            .success(function (data) {
                $scope.status = 'Inserted Log! Refreshing log list.';
                $scope.logs.push(log);
                console.log(data);
            }).
            error(function(error) {
                $scope.status = 'Unable to insert log: ' + error.message;
            });
    };

//delete loga
    function deleteLog(id) {
        logFactory.deleteLog(id)
        .success(function () {
            $scope.status = 'Deleted Log! Refreshing log list.';
            for (var i = 0; i < $scope.logs.length; i++) {
                var log = $scope.logs[i];
                if (log.ID === id) {
                    $scope.logs.splice(i, 1);
                    break;
                }
            }
            $scope.orders = null;
        })
        .error(function (error) {
            $scope.status = 'Unable to delete logs: ' + error.message;
        });
    };
/*
//dobavljanje log orders
    $scope.getLogsOrders = function (id) {
        logFactory.getOrders(id)
        .success(function (orders) {
            $scope.status = 'Retrieved orders!';
            $scope.orders = orders;
        })
        .error(function (error) {
            $scope.status = 'Error retrieving logs! ' + error.message;
        });
    };*/
}]);