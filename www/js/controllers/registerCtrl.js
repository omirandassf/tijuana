angular.module('starter.controllers')
    .controller('registerCtrl', ['$scope', '$state','$window','doctorsRest',
    function($scope, $state,$window,doctorsRest) {

        $scope.user = {};
        $scope.signIn = function(form) {
                if (form.$invalid) {
                    return alert("Please complete the form before proceeding.");
                }

                doctorsRest.postNewUser($scope.user).then(function(response) {
                    // handle different responses and decide what happens next
                    if (response.status == 200) {
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
        
        $scope.previewFile = function() {
  var preview = document.querySelector('img');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }
};

    }]);