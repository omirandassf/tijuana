// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ionic.service.core', 'starter.controllers', 'ksSwiper', 'ngCordova', 'ion-google-place', 'RESTServices','DoctorsAnswers'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
  .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
      $stateProvider

        .state('landing', {
          url: '/',
          templateUrl: 'templates/landing.html',
          controller: 'landingCtrl'
        })
        .state('login', {
          url: '/login',
          templateUrl: 'templates/login.html',
          controller: 'loginCtrl'
        })
        .state('register', {
          url: '/register',
          templateUrl: 'templates/register.html',
          controller: 'registerCtrl',
          cache: false
        })
        .state('registerDoctors', {
          url: '/registerDoctors',
          templateUrl: 'templates/registerDoctors.html',
          controller: 'registerDoctorsCtrl'

        })
        .state('registerEvents', {
          url: '/registerEvents',
          templateUrl: 'templates/registerEvents.html',
          // controller:'registerEventsCtrl'
        })
        .state('tabs', {
          abstract: true,
          url: '/tabs',
          templateUrl: 'templates/tabs.html',
          // controller:'registerEventsCtrl'
        })
        .state('tabs.events', {
          url: '/events',
          views: {
            'events': {
              templateUrl: 'templates/events.html',
              controller: 'eventsCtrl'
            }
          }
        })
        .state('tabs.doctors', {
            url: '/doctors',
            views: {
              'doctors': {
                templateUrl: 'templates/doctors.html',
                controller: 'doctorsCtrl',
                resolve: {
                  users: ['DoctorsAnswersService',
                    function(DoctorsAnswersService) {
                      return DoctorsAnswersService.getDoctors()
                        .then(function(res) {
                          return res.data;

                        }, function(err) {

                          if (err.status == 404) {
                            alert("Server not found");
                          }
                          else if (err.status == 500) {
                            alert("The world has ended, or the server just isn’t online");
                          }
                          alert("You have some problem with the Internet");

                        }); 
                      
                    }]
                  
                }
                    }
                  }
                })
              .state('tabs.lobby', {
                url: '/lobby',
                views: {
                  'lobby': {
                    templateUrl: 'templates/lobby.html',
                    controller: 'lobbyCtrl'
                  }

                }
              });

            });
