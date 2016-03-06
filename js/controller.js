'use strict';

angular.module('reedsy').controller('BookController', [
  '$scope', '$stateParams', '$http', 'itemsPerPage',
  function ($scope, $stateParams, $http, itemsPerPage) {

    // initialize variables
    $scope.p = {
      page: 1,
      itemsPerPage: itemsPerPage
    };
    $scope.books = [];
    $scope.filters = {category: undefined, genre: undefined};

    $scope.initBooks = function(callback) {
      $http.get('data/book.json')
        .success(
        function(books){
          $scope.books = books;

          // get the categories and genres
          $scope.categories = {'All': undefined};
          $scope.genres = {'All': undefined};
          $scope.books.forEach(function(el) {
            if(typeof $scope.categories[el.genre.category] === 'undefined') {
              $scope.categories[el.genre.category] = el.genre.category;
            }
            if(typeof $scope.genres[el.genre.name] === 'undefined') {
              $scope.genres[el.genre.name] = el.genre.name;
            }
          });

          // used to get the info of the book, only when we have all the books
          if(typeof callback === 'function') {
            callback();
          }
        })
        .error(
        function(error) {
          $scope.error = error;
        });
    };

    // finds the selected book from the list and set it on scope
    $scope.showBook = function() {
      // make sure we have the books when searching
      // in a real case situation we would get the specific book, instead of all of them
      $scope.initBooks(function(){
        $scope.error = 'Not found.';
        var len=$scope.books.length;
        
        for (var i=0; i<len; i++) {
          if ($scope.books[i].id === $stateParams.id) {
            $scope.book = $scope.books[i];
            $scope.filters = {category: $scope.book.genre.category, genre: $scope.book.genre.name, not: $scope.book.id};
            $scope.error = '';

            break;
          }
        }
      });
    };
  }
]);