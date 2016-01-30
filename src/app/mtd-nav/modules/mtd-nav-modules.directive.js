/** --------------------------------
 * mtd-module-nav.directive.js
 * Created by dougiefresh49 on 1/11/16.
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

        /**
         * @ngdoc property
         * @name activeLink
         * @propertyOf docsApp.nav.controller:NavModulesController
         * @description
         * String to keep track of the active link. Saves on performance by allowing for direct lookup
         */
        vm.activeLink = $location.path().substr(1) || "";

        /* Functions */
        vm.toggleModule = toggleModule;
        vm.isMatchedPage = mtdSearchService.isMatchedPage;

        /* Watchers */
        /**
         * @ngdoc method
         * @name $watch
         * @methodOf docsApp.nav.controller:NavModulesController
         * @description
         * $watcher function that watches the $location change returned in
         * {@link ddocsApp.nav.controller:NavModulesController#methods_watchPath watchPath}
         * and then {@link docsApp.nav.controller:NavModulesController#methods_updateModules updateModules}
         *
         */
        $scope.$watch(watchPath, updateModules);

        /**
         * @ngdoc method
         * @name $watchSearch
         * @methodOf docsApp.nav.controller:NavModulesController
         * @description
         * $watcher function that watches the isSearching parameter
         * and then {@link docsApp.nav.controller:NavModulesController#methods_updateModules updateModules}
         *
         */
        $scope.$watch(mtdSearchService.isSearching , updateModules);

        ////////////////

        /**
         * @ngdoc method
         * @name toggleModule
         * @methodOf docsApp.nav.controller:NavModulesController
         * @description
         * Toggles a module's content in the side nav if it is defined
         *
         * @param {object} [_module]     single module object from list of modules parameter in the {@link docsApp.nav.directive:mtdNavModules mtdNavModules directive}
         */
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

        /**
         * @ngdoc function
         * @name updateModules
         * @methodOf docsApp.nav.controller:NavModulesController
         * @description
         * Will set the {@link docsApp.nav.controller:NavModulesController#properties_activeLink activeLink}
         * based on the location and toggle the Module's content via
         * {@link docsApp.nav.controller:NavModulesController#methods_updateModules updateModules}
         *
         */
        function updateModules() {
            // Set current active link (saves on lookup time)
            vm.activeLink = $location.$$html5 ? $location.path().substr(1) : '#/' + $location.path().substr(1);

            // If a module was clicked, toggle open or closed (only needed with html5 mode)
            if($location.$$html5) {
                toggleModule();
            }
        }

        /**
         * @ngdoc function
         * @name watchPath
         * @methodOf docsApp.nav.controller:NavModulesController
         * @description
         * Used by the $watch function and returns the $location.path() url string.
         *
         * @returns {string} $location.path() string is returned
         */
        function watchPath() {
            return $location.path();
        }
    }

})();
