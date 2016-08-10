angular.module('ion-google-place')
    .directive('ionGooglePlace', ['$ionicModal', 'LocationService',
        function($ionicModal, LocationService) {
            return {
                restrict: 'A',
                scope: {
                    location: '='
                },
                link: function($scope, element) {
                    console.log('locationSuggestion started!');
                    $scope.search = {};
                    $scope.search.suggestions = [];
                    $scope.search.query = "";
                    $ionicModal.fromTemplateUrl('location.html', {
                        scope: $scope,
                        focusFirstInput: true
                    }).then(function(modal) {
                        $scope.modal = modal;
                    });
                    element[0].addEventListener('focus', function(event) {
                        $scope.open();
                    });
                    $scope.$watch('search.query', function(newValue) {
                        if (newValue) {
                            LocationService.searchAddress(newValue).then(function(result) {
                                $scope.search.error = null;
                                $scope.search.suggestions = result;
                            }, function(status) {
                                $scope.search.error = "There was an error :( " + status;
                            });
                        };
                        $scope.open = function() {
                            $scope.modal.show();
                        };
                        $scope.close = function() {
                            $scope.modal.hide();
                        };
                        $scope.choosePlace = function(place) {
                            LocationService.getDetails(place.place_id).then(function(location) {
                                $scope.location = location;
                                $scope.close();
                            });
                        };
                    });
                }
            };

        }
    ]);