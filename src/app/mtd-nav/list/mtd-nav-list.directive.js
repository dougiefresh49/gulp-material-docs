/** --------------------------------
 * mtd-nav-list.directive.js
 * Created by dougiefresh49 on 1/11/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    /**
     * @ngdoc directive
     * @name docsApp.nav.directive:mtdNavList
     * @scope
     * @restrict E
     *
     * @description
     * Directive for the docsApp module.  It...
     *
     * @param {object}  objectList   List of page objects to display in the {@link docsApp.nav.directive:mtdNavDrawer NavDrawer}
     * @param {string}  activeLink   The current active link as determined bt the {@link docsApp.nav.directive:mtdNavModules mtdNavModules} directive
     *
     */

    angular
        .module('docsApp.nav')
        .directive('mtdNavList', mtdNavListNavList);

    function mtdNavListNavList() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/mtd-nav/list/mtd-nav-list.html',
            scope: {
                objectList: '=',
                activeLink: '='
            },
            controller: NavListController,
            controllerAs: 'vm',
            bindToController: true,
            replace: true
        };

        return directive;
    }

    /**
     * @ngdoc controller
     * @name docsApp.nav.controller:NavListController
     * @description
     * The main view controller for the {@link docsApp.nav.directive:mtdNavList mtdNavList} directive
     *
     * @requires docsApp.search.service:mtdSearchService
     */

    NavListController.$inject = ['mtdSearchService'];

    /* @ngInject */
    function NavListController(mtdSearchService) {
        /* jshint validthis: true */
        var vm = this;

        /* Attributes */
        vm.title = 'NavListController';

        /* Functions */
        vm.isMatchedPage = mtdSearchService.isMatchedPage;

        ////////////////

    }

})();
