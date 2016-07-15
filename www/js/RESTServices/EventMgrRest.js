// angular.module("RESTServices", [])
//     .service('EventMgrRest', ['$http','$window', function($http,$window) {
//         var EventMgrRest = this;
//         var apiUrl = "https://myapp-oscar521.c9users.io/api/event_Mgr";
        
//         EventMgrRest.post = function(newUserData) {
//             return $http({
//                 url: apiUrl,
//                 method: 'POST',
//                 data: newUserData
//             });
            
//         };
//         EventMgrRest.display=function(data){
//             return $http({
//                 url:apiUrl,
//                 method: 'GET',
//                 data:data
//             });
//         };
        

//     }]);