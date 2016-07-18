angular.module('starter.controllers')
    .controller('loginCtrl', ['$scope', 'doctorsRest', '$state', '$window',function($scope, doctorsRest, $state, $window) {

        $scope.user = {};

        $scope.signIn = function(form) {
            
            doctorsRest.logMeRightIn($scope.user).then(function(response) {
                // handle different responses and decide what happens next
                if (response.status == 200) {
                    $window.localStorage.token = response.data.id;
                    $window.localStorage.userId = response.data.userId;
                    $scope.user = {};

                    $state.go("tabs.lobby");


                }
            }, function(err) {
                if (err.status == 404) {
                    alert("why are you here?");
                }
                else {
                    alert("Email doesnt exist!");
                }




            });

        };

    }]);
