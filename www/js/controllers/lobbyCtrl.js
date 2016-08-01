angular.module('starter.controllers')

.controller('lobbyCtrl',['$scope','$window','$state','doctorsRest','ButtonService',
function($scope,$window,$state,doctorsRest,ButtonService) {
    
    
    $scope.shouldShowButton=ButtonService.getshouldShowMyButton();
    
    $scope.swiper = {};
 
    $scope.onReadySwiper = function (swiper) {
 
        swiper.on('slideChangeStart', function () {
            console.log('slide start');
        });
         
        swiper.on('onSlideChangeEnd', function () {
            console.log('slide end');
        });     
    };
    

    $scope.logOut=function(){
         $scope.shouldShowButton=ButtonService.setshouldShowMyButton(false);
         doctorsRest.logOut();
         $window.localStorage.token="";
         $window.localStorage.userId="";
         $state.go('landing'); 
      };
      
}]);
