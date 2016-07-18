angular.module('DoctorsAnswers', [])
    .service('DoctorsAnswersService', ['$window', 'doctorsRest', function($window, doctorsRest) {
        var service = this;
     
        
        service.getDoctors = function() {
            // return JSON.parse($window.localStorage.tests)||[];
            return doctorsRest.display();
            
        };
    }]);