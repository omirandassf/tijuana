angular.module('starter.controllers')

.controller('doctorsCtrl', ['$scope','users', function($scope,users) {
        
    $scope.user = users;

        
    }]);