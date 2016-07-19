angular.module('starter.controllers')

.controller('profileDoctorCtrl', ['$scope','profile', function($scope,profile) {
        
    $scope.user = profile;

        
    }]);