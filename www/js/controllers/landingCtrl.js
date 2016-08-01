angular.module('starter.controllers')
    .controller('landingCtrl', ['$scope', '$state','ButtonService',
    function($scope,$state,ButtonService) {
       
       $scope.jumpLogIn=function(){
         ButtonService.setshouldShowMyButton(false);
         $state.go('tabs.lobby');
       }; 
        
        
        
        var deploy = new Ionic.Deploy();
        deploy.setChannel("dev");
        
        // deploy.check().then(function(hasUpdate) {
        //     //App will automatically reload when updated successfully
        //     alert('Ionic Deploy: Update available: ' + hasUpdate);
        //     if (hasUpdate) {
        //         //Perform update
        //         deploy.update().then(function(res) {
        //             //App will automatically reload when updated successfully
        //             // alert('Ionic Deploy: Update Success! ' + JSON.stringify(res));
        //         }, function(err) {
        //             // alert('Ionic Deploy: Update error! ' + JSON.stringify(err));
        //         }, function(prog) {
        //             //This will be a little obnoxious, so remove after the first time it
        //             //works.
        //         });
        //     }
        // }, function(err) {
        //     // alert('Ionic Deploy: Update error! ' + JSON.stringify(err));
        // });
        $scope.doUpdate = function() {
    deploy.update().then(function(res) {
      console.log('Ionic Deploy: Update Success! ', res);
    }, function(err) {
    alert('Ionic Deploy: Update error! ' + JSON.stringify(err));
      console.log('Ionic Deploy: Update error! ', err);
    }, function(prog) {
      console.log('Ionic Deploy: Progress... ', prog);
    });
  };

  // Check Ionic Deploy for new code
  $scope.checkForUpdates = function() {
    console.log('Ionic Deploy: Checking for updates');
    deploy.check().then(function(hasUpdate) {
      console.log('Ionic Deploy: Update available: ' + hasUpdate);
      $scope.hasUpdate = hasUpdate;
    }, function(err) {
    alert('Ionic Deploy: Update error! ' + JSON.stringify(err));
      console.error('Ionic Deploy: Unable to check for updates', err);
    });
  };

        
        

    }]);