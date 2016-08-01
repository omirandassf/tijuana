angular.module('DoctorsAnswers', [])
    .service('DoctorsAnswersService', ['doctorsRest','postEventsRest', function(doctorsRest,postEventsRest) {
        var service = this;
     
        
        service.getDoctors = function() {
            return doctorsRest.display();
            
        };
        
        service.getProfile = function(userId) {
            return doctorsRest.profile(userId);
            
        };
        
        service.getEvents=function(){
            return postEventsRest.showEvents();
        };
        
        
    }]);