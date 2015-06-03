controllers.controller('loginController',
    ['$scope', '$cookies', '$cookieStore', '$rootScope', '$location', 'LoginService',
    function ($scope, $cookies, $cookieStore, $rootScope, $location, LoginService) {
        // reset login status
       // LoginService.ClearCredentials();
 $scope.user = {username: "", password: ""};
        
      $rootScope.cookieUser = $cookieStore.get('placestogo') || {};
    //  $rootScope.cookieUser = {};
        if ($rootScope.cookieUser.currentUser) {
            $rootScope.isAuthenticated = true;
            if($rootScope.cookieUser.currentUser.isAdmin)
                $rootScope.isLoggedAdmin = true;
            else 
                $rootScope.isLoggedAdmin = false;
        }
        else
        {
            $rootScope.isAuthenticated = false;
            $rootScope.isAdmin = false;
        }

$scope.loginMe = function()
        {
            var username = $scope.username;
            var password = $scope.password;
            
            LoginService.Login(username, password)
                    .success(function () {
                    //    alert('Successfully logged in!');
                        //check if user is also admin
                        LoginService.checkIfAdmin(username).then(function(result){
                            if(result.data[0].tip === '1')
                                $rootScope.isLoggedAdmin = true;
                            else
                                $rootScope.isLoggedAdmin = false;
                            
                            $rootScope.isAuthenticated = true;
                            $rootScope.userData = {
                                currentUser: {
                                    username: username,
                                    isAdmin : $rootScope.isLoggedAdmin
                                }
                            }; 
                            var expireDate = new Date();
                            expireDate.setDate(expireDate.getHours() + 12);
                            $cookieStore.put('placestogo', $rootScope.userData, {'expires': expireDate});
                      //       $location.path('/');
                            $location.path('/dashboard.html');
                        });                      
                    })
                    .error(function(){
                        alert('Login failed!');
                        $scope.password = '';
                        $scope.username = '';
                    });
        };
        
        $scope.Logout = function(){
            $rootScope.cookieKey = {};
            $cookieStore.remove('placestogo');
            $rootScope.isAuthenticated = false;
            $rootScope.isLoggedAdmin = false;
        };   


        $scope.login = function () {
           // $scope.dataLoading = true;
            LoginService.Login($scope.username, $scope.password, function(response) {
                if(response.success) {
                    LoginService.SetCredentials($scope.username, $scope.password);
                    $location.path('/');
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        };
    }]);
