/* global Camera angular */
angular.module('starter.controllers')

.controller('registerDoctorsCtrl',['$scope','$cordovaCamera','EventMgrRest','$window','$state', function($scope,$cordovaCamera,EventMgrRest,$window,$state){
    
    $scope.takePhoto = function () {
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
   
                    $cordovaCamera.getPicture(options).then(function (imageData) {
                        $scope.imgURI = "data:image/jpeg;base64," + imageData;
                    }, function (err) {
                        // An error occured. Show a message to the user
                    });
                }
                
                $scope.choosePhoto = function () {
                  var options = {
                    quality: 75,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                    allowEdit: true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 300,
                    targetHeight: 300,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false
                };
   
                    $cordovaCamera.getPicture(options).then(function (imageData) {
                        $scope.imgURI = "data:image/jpeg;base64," + imageData;
                    }, function (err) {
                        // An error occured. Show a message to the user
                    });
                };
                

            
        
    $scope.user = {};
        $scope.registerMyDoctors = function(form) {
                if (form.$invalid) {
                    return alert("Please complete the form before proceeding.");
                }

                EventMgrRest.sending($scope.user).then(function(response) {
                    // handle different responses and decide what happens next
                    if (response.status == 200) {
                        
                        $scope.user = {};
                        $state.go("doctors");

                }}, function(err) {
                    
                    return err;
                });



        };    
        
    
}]);