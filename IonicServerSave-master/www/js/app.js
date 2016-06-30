// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.controller('AppCtrl', function($scope, $http) {
    $scope.data = {};

    // click button
    $scope.submit = function(){
        myobject = { 
            name : $scope.data.name,
            email : $scope.data.email,
            phone : $scope.data.phone
        }
    };        

    // parameter conversion
    Object.toparams = function ObjecttoParams(obj) 
    {
      var p = [];
      for (var key in obj) 
      {
        p.push(key + '=' + encodeURIComponent(obj[key]));
      }
      return p.join('&');
    };

    // target url
    var link = 'http://dev8.imajiku.com/woe/recommendation2.php';

    // create request object
    var req = 
        {
            method: 'POST',
            url: link,
            data: Object.toparams(myobject),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }


    // call api
    $http(req).
    success(function(data, status, headers, config) 
    {
        //success
        console.log("data", data);
    }).
    error(function(data, status, headers, config) 
    {
        //error
        console.log("error");
    });

    };
});