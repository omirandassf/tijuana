angular.module('starter.controllers')
    .controller('registerCtrl', ['$scope', '$state','$window','doctorsRest','$cordovaCamera','ButtonService',
    function($scope, $state,$window,doctorsRest,$cordovaCamera,ButtonService) {
        
        // $scope.image=imgURI;
        $scope.user = {};
        $scope.signIn = function(form) {
                if (form.$invalid) {
                    return alert("Please complete the form before proceeding.");
                }
                doctorsRest.postNewUser($scope.user).then(function(response) {
                    // handle different responses and decide what happens next
                    if (response.status == 200) {
                        ButtonService.setshouldShowMyButton(true);
                        $window.localStorage.token=response.data.token;
                        $window.localStorage.userId=response.data.id;
                        $scope.user = {};
                        $state.go("tabs.lobby");

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



        };
        
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
        
        

    }]);