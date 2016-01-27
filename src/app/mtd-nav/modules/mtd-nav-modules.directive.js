/** --------------------------------
 * mtd-module-nav.directive.js
 * Created by a543119 on 1/11/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    /**
     * @ngdoc directive
     * @name docsApp.nav.directive:mtdNavModules
     * @scope
     * @restrict E
     *
     * @description
     * Directive responsible for displaying and toggling each module and its contents in the {@link docsApp.nav.directive:mtdNavDrawer NavDrawer}
     *
     * @param {object}  modules   List of modules to display, created by the {@link docsApp.nav.service:mtdNaveModulesService mtdNavModulesService}
     *
     */

    angular
        .module('docsApp.nav')
        .directive('mtdNavModules', mtdNavModules);

    mtdNavModules.$inject = [];

    /* @ngInject */
    function mtdNavModules() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/mtd-nav/modules/mtd-nav-modules.html',
            scope: {
                modules: '='
            },
            controller: NavModulesController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;
    }

    /**
     * @ngdoc controller
     * @name docsApp.nav.controller:NavModulesController
     * @description
     * The main view controller for the {@link docsApp.nav.directive:mtdNavModules mtdNavModules} directive
     *
     * @requires $location
     * @requires $scope
     * @requires docsApp.search.service:mtdSearchService
     */


    NavModulesController.$inject = ['$location', '$scope', 'mtdSearchService'];

    /* @ngInject */
    function NavModulesController($location, $scope, mtdSearchService) {
        /* jshint validthis: true */
        var vm = this;

        /* Attributes */
        vm.title = 'NavModulesController';
        vm.activeLink = $location.path().substr(1) || "";

        /* Functions */
        vm.toggleModule = toggleModule;
        vm.isMatchedPage = mtdSearchService.isMatchedPage;

        /* Watchers */
        $scope.$watch(watchPath, updateModules);
        $scope.$watch(mtdSearchService.isSearching , updateModules);

        ////////////////

        function toggleModule(_module) {
            if(angular.isDefined(_module)) {
                 //Toggle module content visibility var
                _module.showContents = !_module.showContents;
            }
            else {
                // Clicked link is not a module
                if($location.path().indexOf(':') !== -1) {
                    return;
                }

                // Split Path
                var pageId = $location.path().split('/')[2];

                if(angular.isDefined(pageId)) {
                    vm.modules[pageId].showContents = !vm.modules[pageId].showContents;
                }
            }
        }

        /* --- Helper Functions --- */

        function updateModules() {
            // Set current active link (saves on lookup time)
            vm.activeLink = $location.$$html5 ? $location.path().substr(1) : '#/' + $location.path().substr(1);

            // If a module was clicked, toggle open or closed (only needed with html5 mode)
            if($location.$$html5) {
                toggleModule();
            }
        }

        function watchPath() {
            return $location.path();
        }
    }

})();
