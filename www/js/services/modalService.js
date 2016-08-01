angular.module('modalService',[])
.service('utilsService', function($ionicModal) {

    this.showModal = function($scope) {


        $ionicModal.fromTemplateUrl('templates/my-modal.html', {
          scope: $scope,
        }).then(function(modal) {
            $scope.modal = modal;
            $scope.modal.show();

        });
    };

    // this.hideModal = function() {
    //     $scope.modal.hide();
    // };

});