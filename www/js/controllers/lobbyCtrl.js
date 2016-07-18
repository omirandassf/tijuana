angular.module('starter.controllers')

.controller('lobbyCtrl',['$scope','$window','doctorsRest','$state', function($scope,$window,doctorsRest,$state) {
    
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
         doctorsRest.logOut($window.localStorage.token);
         $window.localStorage.token="";
         $window.localStorage.userId="";
         $state.go('landing'); 
      };
      
}]);
