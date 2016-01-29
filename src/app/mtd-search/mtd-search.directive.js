/** --------------------------------
 * mtd-search.directive.js
 * Created by dougiefresh49 on 1/13/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    /**
     * @ngdoc directive
     * @name docsApp.search.directive:mtdSearch
     * @scope
     * @restrict E
     *
     * @description
     * Directive for the docsApp.search module.  It is responsible for the search form and setting the status of
     * the user's search activity
     *
     * @param {object}  sections   List of Sections created by {@link docsApp.nav.service:mtdNavSectionService mtdNavSectionService}
     *
     */

    angular
        .module('docsApp.search')
        .directive('mtdSearch', mtdSearchSearch);

    function mtdSearchSearch() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/mtd-search/mtd-search.html',
            scope: {
                sections: '='
            },
            controller: SearchController,
            controllerAs: 'vm',
            bindToController: true,
            replace: true
        };

        return directive;
    }

    /**
     * @ngdoc controller
     * @name docsApp.search.controller:SearchController
     * @description
     * The main view controller for the Search directive
     *
     * @requires ng.$location
     * @requires docsApp.search.service:mtdSearchService
     */

    SearchController.$inject = ['$location', 'mtdSearchService'];

    /* @ngInject */
    function SearchController($location, mtdSearchService) {
        /* jshint validthis: true */
        var vm = this;

        /* Attributes */
        vm.title = 'SearchController';

        /**
         * @ngdoc property
         * @name bestMatch
         * @propertyOf docsApp.search.controller:SearchController
         * @type {object}
         * @description
         * object containing the page with the best match with the search terms
         */
        vm.bestMatch = {page: null, rank:0};

        /**
         * @ngdoc property
         * @name search
         * @propertyOf docsApp.search.controller:SearchController
         * @type {string}
         * @description
         * string that stores the search terms
         */
        vm.search = '';

        /**
         * @ngdoc property
         * @name searchingChanged
         * @propertyOf docsApp.search.controller:SearchController
         * @type {bool}
         * @description
         * flag to notify when user is searching
         */
        vm.searchingChanged = false;

        /* Functions */
        vm.submitSearch = submitSearch;
        vm.updateSearch = updateSearch;

        ////////////////

        /**
         * @ngdoc method
         * @name updateSearch
         * @methodOf docsApp.search.controller:SearchController
         * @description
         * Will be called every time text is updated in the search box.
         * It updates the {@link docsApp.search.controller:SearchController#properties_bestMatch bestMatch}, applies a rank to each page in the section,
         * and sets the searching status with
         * {@link docsApp.search.service:mtdSearchService#methods_setIsSearching setIsSearching}
         *
         */
        function updateSearch() {
            vm.bestMatch = {page: null, rank:0};
            var sectionID = $location.path().split('/')[1];

            if(angular.isUndefined(vm.sections) || angular.isUndefined(vm.sections[sectionID].modules)) {
                return;
            }

            if(vm.search === '') {
                mtdSearchService.setIsSearching(false);
                return;
            }

            // Apply rank to each page in the given section
            angular.forEach(vm.sections[sectionID].pages, function (page, pageId) {
                var match = mtdSearchService.rank(page, vm.search);
                if(match.rank > vm.bestMatch.rank) {
                    vm.bestMatch = match;
                }

                if(angular.isDefined(page)) {
                    page.rank = match.rank;

                    // Update containing module's rank
                    if(vm.sections[sectionID].pages[page.moduleName].rank === 0 && page.rank > 0) {
                        vm.sections[sectionID].pages[page.moduleName].rank = 1;
                    }

                }
            });

            mtdSearchService.setIsSearching(true);
        }

        /**
         * @ngdoc method
         * @name submitSearch
         * @methodOf docsApp.search.controller:SearchController
         * @description
         * On submission of the search form, the page with the best match is navigated to.
         *
         */
        function submitSearch() {
            if(vm.bestMatch && vm.bestMatch.page && vm.search !== '') {
                var url = vm.bestMatch.page.url;
                mtdSearchService.setIsSearching(true);
                $location.path( $location.$$html5 ? url : url.substring(1) );
            }

            // Clear Matched pages
            if(vm.search === '') {
                mtdSearchService.setIsSearching(false);
            }
        }

    }

})();
