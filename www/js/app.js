// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic','ionic.service.core',  'starter.controllers', 'ksSwiper', 'ngCordova', 'RESTServices', 'DoctorsAnswers','ShowButon','modalService','ion-google-place']);

app.run(function($ionicPlatform) {
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
  app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    
      .state('landing', {
        url: '/',
        templateUrl: 'templates/landing.html',
        controller: 'landingCtrl',
        cache: false

      })
      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl',
        cache: false

      })
      .state('register', {
        url: '/register',
        templateUrl: 'templates/register.html',
        controller: 'registerCtrl',
        cache: false
      })
      .state('registerEvents', {
        url: '/registerEvents',
        templateUrl: 'templates/registerEvents.html',
        controller:'registerEventsCtrl'
      })
      .state('tabs', {
        abstract: true,
        url: '/tabs',
        templateUrl: 'templates/tabs.html'
      })
      .state('locations', {
        url: '/locations',
        templateUrl: 'templates/locations.html',
        controller:'locationCtrl'
      })
      .state('tabs.events', {
        url: '/events',
        cache:false,
        views: {
          'events': {
            templateUrl: 'templates/events.html',
            controller: 'eventsCtrl',
            resolve: {
              events: ['postEventsRest','$state',
                function(postEventsRest,$state) {
                  return postEventsRest.showEvents()
                    .then(function(res) {
                      return res.data;

                    }, function(err) {

                      if (err.status == 404) {
                        alert("Server not found");
                        $state.go('lobby');
                      }
                      else if (err.status == 500) {
                        alert("The world has ended, or the server just isn’t online");
                        $state.go('lobby');

                      }

                    });

                }]}
            
          }
        }
      })
      .state('tabs.doctors', {
        url: '/doctors',
        cache:false,
        views: {
          'doctors': {
            templateUrl: 'templates/doctors.html',
            controller: 'doctorsCtrl',
            resolve: {
              users: ['DoctorsAnswersService','$window',
                function(DoctorsAnswersService,$window) {
                  return DoctorsAnswersService.getDoctors($window.localStorage.token, $window.localStorage.userId)
                    .then(function(res) {
                      return res.data;

                    }, function(err) {

                      if (err.status == 404) {
                        alert("Server not found");
                      }
                      else if (err.status == 500) {
                        alert("The world has ended, or the server just isn’t online");
                      }

                    });

                }]}
          }
        }
      })
      .state('tabs.lobby', {
        url: '/lobby',
        cache:false,
        views: {
          'lobby': {
            templateUrl: 'templates/lobby.html',
            controller: 'lobbyCtrl'
          }

        }
      })
      .state('tabs.profile', {
        url: '/profile',
        cache:false,
        views: {
          'profile': {
            templateUrl: 'templates/profile.html',
            controller: 'profileDoctorCtrl',
            resolve: {
              profile: ['DoctorsAnswersService','$window','$state',
                function(DoctorsAnswersService,$window,$state) {
                  return DoctorsAnswersService.getProfile($window.localStorage.userId)
                    .then(function(res) {
                      return res.data;

                    }, function(err) {
                      if (err.status == 500) {
                        alert("You are not Logged In, Please Log In!");
                        $state.go('tabs.lobby');
                      } else if (err.status == 404){
                        alert("You are not Logged In, Please Log In!");
                        $state.go('tabs.lobby');
                        
                      }else{
                        alert("You are not Logged In, Please Log In!");
                        $state.go('tabs.lobby');
                      }
                      

                    });

                }]}
          }

        }
      });
 }); 
