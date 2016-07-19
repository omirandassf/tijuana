angular.module("RESTServices")
    .service('postEventsRest', ['$http', function($http) {
        var postEventsRest = this;
        var apiUrl = "https://myapp-oscar521.c9users.io/api/postEvents";
        
        postEventsRest.postingEvent = function(newUserData) {
            return $http({
                url: apiUrl,
                method: 'POST',
                data: newUserData
            });
            
        };
        postEventsRest.showEvents = function() {
            return $http({
                url: apiUrl,
                method: 'GET'
            });
        };
        

    }]);