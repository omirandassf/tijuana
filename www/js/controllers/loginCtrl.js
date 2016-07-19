angular.module('starter.controllers')
    .controller('loginCtrl', ['$scope', '$state', '$window','doctorsRest',function($scope, $state, $window,doctorsRest) {

        $scope.user = {};

        $scope.signIn = function(form) {
            
            doctorsRest.logUser($scope.user).then(function(response) {
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
