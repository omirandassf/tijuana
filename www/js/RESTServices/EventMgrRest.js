// angular.module("RESTServices")
//     .service('EventMgrRest', ['$http','$window', function($http,$window) {
//         var EventMgrRest = this;
//         var apiUrl = "https://myapp-oscar521.c9users.io/api/doctorsInfos";
        
//         EventMgrRest.sending = function(newUserData) {
//             return $http({
//                 url: apiUrl,
//                 method: 'POST',
//                 data: newUserData
//             });
            
//         };
//         EventMgrRest.display = function(token, userId) {
//             return $http({
//                 url: apiUrl,
//                 method: 'GET',
//                 // headers: {
//                 //     'Authorization': token
//                 // }
//             });
//         };
        

//     }]);