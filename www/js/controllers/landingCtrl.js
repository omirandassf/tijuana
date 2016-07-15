angular.module('starter.controllers')
    .controller('landingCtrl', ['$scope', function($scope) {
        var deploy = new Ionic.Deploy();
        deploy.setChannel("dev");
        
        deploy.check().then(function(hasUpdate) {
            //App will automatically reload when updated successfully
            alert('Ionic Deploy: Update available: ' + hasUpdate);
            if (hasUpdate) {
                //Perform update
                deploy.update().then(function(res) {
                    //App will automatically reload when updated successfully
                    alert('Ionic Deploy: Update Success! ' + JSON.stringify(res));
                }, function(err) {
                    alert('Ionic Deploy: Update error! ' + JSON.stringify(err));
                }, function(prog) {
                    //This will be a little obnoxious, so remove after the first time it
                    //works.
                });
            }
        }, function(err) {
            alert('Ionic Deploy: Update error! ' + JSON.stringify(err));
        });

    }]);
