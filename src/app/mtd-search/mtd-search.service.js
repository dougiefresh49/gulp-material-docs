/** --------------------------------
 * mtd-search.service.js
 * Created by a543119 on 1/14/16.
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

        function isMatchedPage(pageRank) {
            return (isSearching) ? pageRank > 0 : true;
        }

        function getIsSearching() {
            return isSearching;
        }

        function setIsSearching(isSearchingActive) {
            isSearching = isSearchingActive
        }

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
