angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $state) {

    $scope.logNav = function() {
        /* $location.path('/tab/newpost'); */
        /* this variant doesnt work */
        $state.go("home");
    };
})

.controller('openBrowserCtrl', function($scope, $cordovaInAppBrowser) {

    var options = {
        location: 'yes',
        clearcache: 'yes',
        toolbar: 'no'
    };

    $scope.openBrowser = function(urlValue) {



        $cordovaInAppBrowser.open(urlValue, '_blank', options)

        .then(function(event) {
            // success
        })

        .catch(function(event) {
            // error
        });
    }

});
