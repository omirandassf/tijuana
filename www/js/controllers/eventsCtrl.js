angular.module('starter.controllers')

.controller('eventsCtrl', ['$scope','events', function($scope,events) {


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

                                // $cordovaCamera.getPicture(options).then(function(imageData) {
                                //         syncArray.$add({
                                //                 image: imageData
                                //         }).then(function() {
                                //                 alert("Image has been uploaded");
                                //         });
                                // }, function(error) {
                                //         alert(error);
                                // });

                        };
                                                
                        $scope.event=events;

        
}]);



 //     var fbAuth = fb.getAuth();
                        // if(fbAuth) {
                        //     var userReference = fb.child("users/" + fbAuth.uid);
                        //     var syncArray = $firebaseArray(userReference.child("images"));
                        //     $scope.images = syncArray;
                        // } else {
                        //     // $state.go("lobby");
                        // }
                        // $scope.profile = function(token,userId){
                        //     DoctorsAnswersService.getProfile(token,userId)
                        //     .then(function(res) {
                        //         return res.data;

                        //     }, function(err) {

                        //         if (err.status == 404) {
                        //             alert("Server not found");
                        //         }
                        //         else if (err.status == 500) {
                        //             alert("The world has ended, or the server just isn’t online");
                        //         }

                        //     }
                        //     )};


                // // var fbAuth = fb.getAuth();
                // // if(fbAuth) {
                // //     var userReference = fb.child("users/" + fbAuth.uid);
                // //     var syncArray = $firebaseArray(userReference.child("images"));
                // //     $scope.images = syncArray;
                // // } else {
                // //     $state.go("firebase");
                // // }
