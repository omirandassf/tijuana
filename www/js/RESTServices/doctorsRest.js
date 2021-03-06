angular.module("RESTServices", [])
    .service('doctorsRest', ['$http','$window', function($http,$window) {
        
        var doctorsRest = this;
        var apiUrl = "https://myapp-oscar521.c9users.io/api/doctorUsers";
        
        doctorsRest.postNewUser = function(newUserData) {
            return $http({
                url: apiUrl,
                method: 'POST',
                data: newUserData
            });
            
        };
        doctorsRest.logUser=function(data){
            return $http({
                url:apiUrl+"/login",
                method: 'POST',
                data:data
            });
        };
        
        doctorsRest.logOut=function(){
            return $http({
                url:apiUrl+"/logout",
                method: 'POST',
                 headers:{
                    'Authorization':$window.localStorage.token
                }

            });
        };
        
        doctorsRest.display=function(){
            return $http({
                url:apiUrl,
                method:'GET',
                headers:{
                    'Authorization':$window.localStorage.token
                }
            });
        };
        doctorsRest.profile=function(userId){
            return $http({
                url:apiUrl +"/"+ userId,
                method:'GET',
                headers: {
                    'Authorization': $window.localStorage.token
                }
            });
        };
        
        doctorsRest.changeProfile=function(data){
         return $http({
                url:apiUrl +"/"+ $window.localStorage.userId,
                method:'PUT',
                data:data,
                headers: {
                    'Authorization': $window.localStorage.token
                }   
        });
        };

    }]);
    