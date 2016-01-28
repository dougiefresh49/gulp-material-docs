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
        vm.bestMatch = {page: null, rank:0};
        vm.search = '';
        vm.searchingChanged = false;

        /* Functions */
        vm.submitSearch = submitSearch;
        vm.updateSearch = updateSearch;

        ////////////////

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

            angular.forEach(vm.sections[sectionID].modules, function (module, moduleId) {
                var pages = getAllPages(module);
                pages.forEach(function (page) {
                    var match = mtdSearchService.rank(page, vm.search);
                    if(match.rank > vm.bestMatch.rank) {
                        vm.bestMatch = match;
                    }

                    if(angular.isDefined(page)) {
                        page.rank = match.rank;
                    }
                });
            });

            mtdSearchService.setIsSearching(true);
        }

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

        /* --- Helper Functions --- */

        function getAllPages(module) {
            return [module.pageData]
                .concat(module.controllers)
                .concat(module.directives)
                .concat(module.filters)
                .concat(module.globals)
                .concat(module.others)
                .concat(getServicesFromModule(module))
                .concat(module.types);
        }

        function getServicesFromModule(module) {
            return module.services.map(function (service) {
                if(angular.isDefined(service.instance)) {
                    return service.instance
                }
                if(angular.isDefined(service.provider)) {
                    return service.provider
                }
            })
        }
    }

})();
