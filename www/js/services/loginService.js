angular.module("RESTServices", [])
    .service('loginService', ['$http', function($http) {
        var loginService = this;
        
                        //points to backend
        var apiUrl = "https://myapp-oscar521.c9users.io/explorer";
        loginService.post = function(newUserData) {
            return $http({
                url: apiUrl,
                method: 'POST',
                data: newUserData
            });
            
        };
        loginService.display=function(data){
            return $http({
                url:apiUrl+"/login",
                method: 'POST',
                data:data
            });
        };
        

    }]);