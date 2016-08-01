angular.module('starter.controllers')

.controller('profileDoctorCtrl', ['$scope', 'profile', '$cordovaCamera','doctorsRest','$ionicModal','$window',
    function($scope, profile, $cordovaCamera,doctorsRest,$ionicModal,$window) {

          $ionicModal.fromTemplateUrl('templates/my-modal.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function(modal) {
                $scope.modal = modal;
            });
            $scope.openModal = function() {
                $scope.modal.show();
            };
            $scope.closeModal = function() {
                $scope.modal.hide();
            };
            // Cleanup the modal when we're done with it!
            $scope.$on('$destroy', function() {
                $scope.modal.remove();
            });
            // Execute action on hide modal
            $scope.$on('modal.hidden', function() {
                // Execute action
            });
            // Execute action on remove modal
            $scope.$on('modal.removed', function() {
                // Execute action
            });



        $scope.user = profile;

        $scope.upload = function() {


            var options = {
                quality: 75,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.CAMERA,
                allowEdit: true,
                encodingType: Camera.EncodingType.JPEG,
                targetWidth: 300,
                targetHeight: 300,
                popoverOptions: CameraPopoverOptions,
                saveToPhotoAlbum: false

            };
            $cordovaCamera.getPicture(options).then(function(imageData) {
                        $scope.imgURI = "data:image/jpeg;base64," + imageData;
                }, function(err) {
                        // An error occured. Show a message to the user
                });
            

        };
        
        $scope.newUser = {};
        $scope.changeContact = function(form) {
                doctorsRest.changeProfile($scope.newUser).then(function(response) {
                    // handle different responses and decide what happens next
                    if (response.status == 200) {
                       $scope.user=response.data;
                        $scope.newUser = {};
                        $scope.closeModal();

                }}, function(err) {
                    alert(JSON.stringify(err));
                    return err;
                });



        };
    
        

        }]);