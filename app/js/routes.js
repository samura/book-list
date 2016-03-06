'use strict';

angular.module('reedsy').config([
  '$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    // go to index if wrong route
    $urlRouterProvider.otherwise('/');

    // Now set up the states
    $stateProvider
      .state('books', {
      url: '/',
      views: {'@': {
        controller: 'BookController',
        templateUrl: 'views/index.html'
      }}
    })
      .state('books.show', {
      url: ':id',
      views: {'@': {
        controller: 'BookController',
        templateUrl: 'views/show.html'
      }}      
    });
  }
]);