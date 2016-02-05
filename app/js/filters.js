'use strict';

/**
 * if we didn't need different handling for different filters
 * this could be done with existing 'filter:'
 *
 * Searching title 'Lord' must match "The Lord of the Rings"
 * Searching gender 'Fiction' must NOT match "Non-Fiction"
 **/
angular.module('reedsy').filter('filterBooks', function() {
  return function(input, filters) {
    var reFilters = [];
    var reSearches = [];
    var name = filters.name && filters.name.toLowerCase();

    input.forEach(function(el) {

      // when we're getting similar books, this avoids getting the same
      if(filters.not && filters.not === el.id) {
        return;
      }

      // filter the category and genre
      if((!filters.category && !filters.genre) || // not set
         (el.genre.category === filters.category && !filters.genre) || // only category
         (el.genre.name === filters.genre && !filters.category) || // ony genre
         (el.genre.name === filters.genre && el.genre.category === filters.category)) { // both filters
        reFilters.push(el);
      }

      // filter the author and title (case insensitive)
      if(!name || el.name.toLowerCase().search(name) !== -1 || el.author.name.toLowerCase().search(name) !== -1) {
        reSearches.push(el);
      }
    });

    // return the intersection between the search and the category
    return reFilters.filter(function(n) {
      return reSearches.indexOf(n) != -1;
    });
  };
});