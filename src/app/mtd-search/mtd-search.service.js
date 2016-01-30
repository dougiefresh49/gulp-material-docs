/** --------------------------------
 * mtd-search.service.js
 * Created by dougiefresh49 on 1/14/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    /**
     * @ngdoc service
     * @name docsApp.search.service:mtdSearchService
     *
     * @description
     * The main service for searching. It will will apply ranks to each page and keep track of
     * the user's searching status.
     *
     */

    angular
        .module('docsApp.search')
        .factory('mtdSearchService', mtdSearchService);

    mtdSearchService.$inject = [];

    /* @ngInject */
    function mtdSearchService() {
        var isSearching = false;

        var service = {
            rank: rank,
            isMatchedPage: isMatchedPage,
            isSearching: getIsSearching,
            setIsSearching: setIsSearching
        };

        return service;

        ////////////////

        /**
         * @ngdoc method
         * @name isMatchedPage
         * @methodOf docsApp.search.service:mtdSearchService
         * @description
         * Checks to see if the provided page rank is grater than 0 and the user is searching
         *
         * @param {int} pageRank     rank of a page
         * @returns {bool} true if is searching and pageRank > 0
         */
        function isMatchedPage(pageRank) {
            return (isSearching) ? pageRank > 0 : true;
        }

        /**
         * @ngdoc method
         * @name getIsSearching
         * @methodOf docsApp.search.service:mtdSearchService
         * @description
         * Getter for the private isSearching property
         *
         * @returns {bool} isSearching private property
         */
        function getIsSearching() {
            return isSearching;
        }

        /**
         * @ngdoc method
         * @name setIsSearching
         * @methodOf docsApp.search.service:mtdSearchService
         * @description
         * Setter for the private isSearching property
         *
         * @param {bool} isSearchingActive     boolean to set the private isSearching property to
         */
        function setIsSearching(isSearchingActive) {
            isSearching = isSearchingActive
        }

        /**
         * @ngdoc method
         * @name rank
         * @methodOf docsApp.search.service:mtdSearchService
         * @description
         * Responsible for applying a rank to each page.
         * It uses {@link docsApp.search.service:mtdSearchService#methods_getRankingPoints getRankingPoints} to collect
         * the total ranking points
         *
         * @param {object} page     page object
         * @param {string} terms    string of search terms to rank the page on, taken from search field
         */
        function rank(page, terms) {
            var ranking = { page: page, rank: 0};

            if(angular.isDefined(terms) && terms !== '' && angular.isDefined(page)){

                terms
                    .toLowerCase()
                    .split(' ')
                    .forEach(function (term) {
                        if(ranking) {
                            ranking.rank += getRankingPoints(page, term);
                        }
                    });
            }

            return ranking;
        }

        /* --- Helper Functions --- */

        /**
         * @ngdoc function
         * @name getRankingPoints
         * @methodOf docsApp.search.service:mtdSearchService
         * @description
         * Helper function to get the ranking points when comparing the search term with the a specific page
         *
         * @param {object} page     page object
         * @param {string} term    single term from the set of terms input in search field
         * @returns {int} the calculated rank
         */
        function getRankingPoints(page, term) {
            var rank = 0,
                index = page.shortName.toLowerCase().indexOf(term);

            if(page.keywords.indexOf(term) !== -1) {
                rank++; // one point for each term found

                // ten points if you match title
                if(index !== -1) {
                    rank += 20 - index;
                }
            }

            return rank;
        }

    }

})();
