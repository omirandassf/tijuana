/* global Camera angular */
angular.module('starter.controllers')

.controller('registerDoctorsCtrl', ['$scope', '$cordovaCamera', 'EventMgrRest', '$window', '$state', function($scope, $cordovaCamera, EventMgrRest, $window, $state) {
                // 1
$scope.images = [];
 
$scope.addImage = function() {
	// 2
	var options = {
		destinationType : Camera.DestinationType.FILE_URI,
		sourceType : Camera.PictureSourceType.CAMERA, // Camera.PictureSourceType.PHOTOLIBRARY
		allowEdit : false,
		encodingType: Camera.EncodingType.JPEG,
		popoverOptions: CameraPopoverOptions,
	};
	
	// 3
	$cordovaCamera.getPicture(options).then(function(imageData) {
 
		// 4
		onImageSuccess(imageData);
 
		function onImageSuccess(fileURI) {
			createFileEntry(fileURI);
		}
 
		function createFileEntry(fileURI) {
			window.resolveLocalFileSystemURL(fileURI, copyFile, fail);
		}
 
		// 5
		function copyFile(fileEntry) {
			var name = fileEntry.fullPath.substr(fileEntry.fullPath.lastIndexOf('/') + 1);
			var newName = makeid() + name;
 
			window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function(fileSystem2) {
				fileEntry.copyTo(
					fileSystem2,
					newName,
					onCopySuccess,
					fail
				);
			},
			fail);
		}
		
		// 6
		function onCopySuccess(entry) {
			$scope.$apply(function () {
				$scope.images.push(entry.nativeURL);
			});
		}
 
		function fail(error) {
			console.log("fail: " + error.code);
		}
 
		function makeid() {
			var text = "";
			var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
 
			for (var i=0; i < 5; i++) {
				text += possible.charAt(Math.floor(Math.random() * possible.length));
			}
			return text;
		}
 
	}, function(err) {
		console.log(err);
	});
};
                        // $scope.takePhoto = function () {
                        //               var options = {
                        //                 quality: 75,
                        //                 destinationType: Camera.DestinationType.DATA_URL,
                        //                 sourceType: Camera.PictureSourceType.CAMERA,
                        //                 allowEdit: true,
                        //                 encodingType: Camera.EncodingType.JPEG,
                        //                 targetWidth: 300,
                        //                 targetHeight: 300,
                        //                 popoverOptions: CameraPopoverOptions,
                        //                 saveToPhotoAlbum: false
                        //             };

                        //                 $cordovaCamera.getPicture(options).then(function (imageData) {
                        //                     $scope.imgURI = "data:image/jpeg;base64," + imageData;
                        //                 }, function (err) {
                        //                     // An error occured. Show a message to the user
                        //                 });
                        //             }

                        //             $scope.choosePhoto = function () {
                        //               var options = {
                        //                 quality: 75,
                        //                 destinationType: Camera.DestinationType.DATA_URL,
                        //                 sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                        //                 allowEdit: true,
                        //                 encodingType: Camera.EncodingType.JPEG,
                        //                 targetWidth: 300,
                        //                 targetHeight: 300,
                        //                 popoverOptions: CameraPopoverOptions,
                        //                 saveToPhotoAlbum: false
                        //             };

                        //                 $cordovaCamera.getPicture(options).then(function (imageData) {
                        //                     $scope.imgURI = "data:image/jpeg;base64," + imageData;
                        //                 }, function (err) {
                        //                     // An error occured. Show a message to the user
                        //                 });
                        //             };




                        $scope.user = {}; $scope.registerMyDoctors = function(form) {
                            if (form.$invalid) {
                                return alert("Please complete the form before proceeding.");
                            }

                            EventMgrRest.sending($scope.user).then(function(response) {
                                // handle different responses and decide what happens next
                                if (response.status == 200) {
                                alert("You entry has been successfully entered!");
                                    $scope.user = {};
                                    $state.go("tabs.doctors");

                                }
                            }, function(err) {

                                return err;
                            });



                        };


                    }]);