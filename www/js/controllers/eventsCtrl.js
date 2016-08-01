angular.module('starter.controllers')

.controller('eventsCtrl', ['$scope', 'events', '$cordovaCamera', '$state','ButtonService',
function($scope, events, $cordovaCamera, $state,ButtonService) {


        // $scope.shouldShowButton=ButtonService.getshouldShowMyBar();



        $scope.upload = function() {


                var options = {
                        quality: 75,
                        destinationType: Camera.DestinationType.DATA_URL,
                        sourceType: Camera.PictureSourceType.CAMERA,
                        allowEdit: false,
                        encodingType: Camera.EncodingType.JPEG,
                        popoverOptions: CameraPopoverOptions,
                        targetWidth: 500,
                        targetHeight: 500,
                        saveToPhotoAlbum: false
                };

                $cordovaCamera.getPicture(options).then(function(imageData) {
                        $scope.imgURI = "data:image/jpeg;base64," + imageData;
                }, function(err) {
                        // An error occured. Show a message to the user
                });

        };



        $scope.event = events;
        
//         $scope.eventsReapeated=[];

//         postEventsRest.showEvents().then(function(res) {
//                         event = res.data;
//                         $scope.eventsRepeated=event;
//                 }
//                 $scope.loadMore = function() {$scope.eventsRepeated.then(function(items){
// 		$scope.items = $scope.items.concat(items);
// 	});
// };

}]);
