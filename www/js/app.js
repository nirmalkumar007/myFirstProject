// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ionic-material', 'starter.controllers', 'starter.services','ngCordova'])


.run(function($ionicPlatform) {
            $ionicPlatform.ready(function() {
                    FCMPlugin.getToken(
                        function(token) {
                            alert(token);
                            console.log('retrieving token: ' + token);
                        },
                        function(err) {
                            console.log('error retrieving token: ' + err);
                        }
                    )

                    //
                    FCMPlugin.onNotification(
                        function(data) {
                            if (data.wasTapped) {
                                    //Notification was received on device tray and tapped by the user.
                                    alert(JSON.stringify(data));

                                }
                                else {
                                    //Notification was received in foreground. Maybe the user needs to be notified.
                                    alert(JSON.stringify(data));
                                }
                            },
                            function(msg) {
                                console.log('onNotification callback successfully registered: ' + msg);
                            },
                            function(err) {
                                console.log('Error registering onNotification callback: ' + err);
                            }
                        );

                    });
            })

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('signin', {
      url: '/signin',
      templateUrl: 'templates/signin.html',
      controller: 'LoginCtrl'
    })
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'openBrowserCtrl'

    })

    $urlRouterProvider.otherwise('/signin');
});


/
