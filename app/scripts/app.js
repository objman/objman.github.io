'use strict';

angular.module('alessandroApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/contatti', {
        templateUrl: 'views/contatti.html',
        controller: 'ContattiCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
