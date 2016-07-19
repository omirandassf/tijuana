angular.module('starter.controllers')

.controller('doctorsCtrl', ['$scope','users','doctorsRest','$window','$state', function($scope,users,doctorsRest,$window,$state) {
        
    $scope.user = users;
    
    $scope.logOut=function(){
         doctorsRest.logOut($window.localStorage.token);
         $window.localStorage.token="";
         $window.localStorage.userId="";
         $state.go('landing'); 
      };



        
    }]);