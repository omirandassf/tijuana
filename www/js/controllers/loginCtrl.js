angular.module('starter.controllers')
    .controller('loginCtrl', ['$scope', '$state', '$window', 'doctorsRest', 'ButtonService', '$ionicPopup',
        function($scope, $state, $window, doctorsRest, ButtonService, $ionicPopup) {

            // $ionicModal.fromTemplateUrl('templates/my-modal.html', {
            //     scope: $scope,
            //     animation: 'slide-in-up'
            // }).then(function(modal) {
            //     $scope.modal = modal;
            // });
            // $scope.openModal = function() {
            //     $scope.modal.show();
            // };
            // $scope.closeModal = function() {
            //     $scope.modal.hide();
            // };
            // // Cleanup the modal when we're done with it!
            // $scope.$on('$destroy', function() {
            //     $scope.modal.remove();
            // });
            // // Execute action on hide modal
            // $scope.$on('modal.hidden', function() {
            //     // Execute action
            // });
            // // Execute action on remove modal
            // $scope.$on('modal.removed', function() {
            //     // Execute action
            // });



            $scope.user = {};

            $scope.signIn = function(form) {
                ButtonService.setshouldShowMyButton(true);
                doctorsRest.logUser($scope.user).then(function(response) {
                    // handle different responses and decide what happens next
                    if (response.status == 200) {
                        $window.localStorage.token = response.data.id;
                        $window.localStorage.userId = response.data.userId;
                        $scope.user = {};
                        $state.go("tabs.lobby");


                    }
                }, function(err) {
                    var alertPopup = $ionicPopup.alert({
                        title: 'Login failed!',
                        template: 'Please check your credentials!\n or Register?'
                    });

                });

            };

        }
    ]);
