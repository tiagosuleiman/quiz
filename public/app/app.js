'use strict';
var REST_SERVICE_URI = 'http://localhost:5000';
var app = angular.module('quizApp', ['ngResource','ngRoute', 'ngSanitize'])
// Routing has been added to keep flexibility in mind. This will be used in future.
angular.module('quizApp')
.config(['$routeProvider',
  function ($routeProvider, $httpProvider) {

      var routes = [
          {
              url: '/home',
              template: 'templates/quiz.html',
              controller: 'quizCtrl'
          },
          {
              url: '/review',
              template: 'templates/review.html',
              controller: 'reviewCtrl'
          },
          {
              url: '/result',
              template: 'templates/result.html',
              controller: 'resultCtrl'
          },
          {
              url: '/create',
              template: 'templates/create.html',
              controller: 'createCtrl'
          }
      ];
      routes.forEach(function (r, index) {
          $routeProvider.when(r.url, { templateUrl: r.template, controller: r.controller });
      });

      $routeProvider.otherwise({ redirectTo: '/home' });
        
  }]);



