angular.module('starter.controllers')

.controller('registerCtrl', function($scope) {
    
    
    
});

angular.module('starter.controllers')
    .controller('RegisterCtrl', ['$scope', 'SSFUsersRest', '$state','$window','IonicPushService',
    function($scope, SSFUsersRest, $state,$window,IonicPushService) {

        $scope.user = {};
        $scope.signupForm = function(form) {
                if (form.$invalid) {
                    return alert("Please complete the form before proceeding.");
                }

                SSFUsersRest.post($scope.user).then(function(response) {
                    // handle different responses and decide what happens next
                    if (response.status == 200) {
                        $window.localStorage.token=response.data.token;
                        $window.localStorage.userId=response.data.id;
                        $scope.user = {};
                        $state.go("lobby");

                }}, function(err) {
                    if (err.status == 422) {
                        alert("Email already registered!");
                    }else if (err.status == 404) {
                        alert("Server not found");
                    }else if (err.status == 500) {
                        alert("The world has ended, or the server just isn’t online");
                    }
                    return err;
                });



         IonicPushService.registerForPush();   
        };



    }]);