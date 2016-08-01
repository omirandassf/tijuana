angular.module('starter.controllers')
    .controller('registerEventsCtrl', ['$scope', 'postEventsRest', '$state',
        function($scope, postEventsRest, $state) {

            $scope.user = {};
            $scope.eventSignUp = function(form) {
                if (form.$invalid) {
                    return alert("Please complete the form before proceeding.");
                }

                postEventsRest.postingEvent($scope.user).then(function(response) {
                    // handle different responses and decide what happens next
                    if (response.status == 200) {
                        alert("Event has been posted Successfully." + "You can check it out now!");
                        postEventsRest.showEvents();
                        $scope.user = {};
                        $state.go("tabs.events");

                    }
                }, function(err) {
                    console.log(err);
                });



            };


        }]);