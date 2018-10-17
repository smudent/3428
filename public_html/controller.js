// app.js
'use strict'; 

var northApp = angular.module('northApp', ['ngRoute']);

northApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl : 'pages/home.html',
        controller  : 'mainController'
    })

    .when('/notes', {
        templateUrl : 'pages/notes.html',
        controller  : 'noteController'
    })

    .when('/lifestyle', {
        templateUrl : 'pages/lifestyle.html',
        controller  : 'lifestyleController'
    });
});

northApp.controller('mainController', function($scope) {
});

northApp.controller('noteController', function($scope) {
    $scope.load = function() {
        setWindow();
    }
});

northApp.controller('lifestyleController', function($scope) {
});

northApp.directive('onResize', ['$window', function($window) {
    return {
        restrict : 'A',
        scope    : {
            onSizeChanged: '&'
        },
        link: function (scope, $element, attr) {
            var element = $element[0];
            $window.addEventListener('resize', onWindowResize);
            function onWindowResize() {
                setWindow();
            }
        }
    }
}]);
