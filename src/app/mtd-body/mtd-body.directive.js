/** --------------------------------
 * mtd-body.directive.js
 * Created by dougiefresh49 on 1/19/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    /**
     * @ngdoc directive
     * @name docsApp.body.directive:mtdBody
     * @scope
     * @restrict E
     *
     * @description
     * Directive for the docsApp module.  It...
     *
     *
     */

    angular
        .module('docsApp.body')
        .directive('mtdBody', mtdBodyBody);

    function mtdBodyBody() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/mtd-body/mtd-body.html',
            scope: {},
            controller: BodyController,
            controllerAs: 'vm',
            bindToController: true,
            replace: true
        };

        return directive;
    }

    /**
     * @ngdoc controller
     * @name docsApp.body.controller:BodyController
     * @description
     * The main view controller for the Body directive
     *
     * @requires ng.$scope
     * @requires ng.$location
     * @requires docsApp.nav.service:mtdNavSectionService
     */


    BodyController.$inject = ['$scope', '$location', 'mtdNavSectionService'];

    /* @ngInject */
    function BodyController($scope, $location, mtdNavSectionService) {
        /* jshint validthis: true */
        var vm = this;

        /* Private Attributes */
        var isActivated = false;
        var landingSectionOpen = false;

        /* Attributes */
        vm.title = 'BodyController';

        /**
         * @ngdoc property
         * @name sections
         * @propertyOf docsApp.body.controller:BodyController
         * @description
         * object used to house all section objects
         */
        vm.sections = {};

        /**
         * @ngdoc property
         * @name currentPage
         * @propertyOf docsApp.body.controller:BodyController
         * @description
         * object used to keep track of the current page
         */
        vm.currentPage = {};

        /* Functions */
        vm.activate = activate;

        /* Watchers */
        /**
         * @ngdoc method
         * @name $watch
         * @methodOf docsApp.body.controller:BodyController
         * @description
         * $watcher function that watches the $location change returned in
         * {@link docsApp.body.controller:BodyController#methods_watchPath watchPath}
         * and then {@link docsApp.body.controller:BodyController#methods_updateActivePage updateActivePage}
         *
         */
        $scope.$watch(watchPath, updateActivePage);

        activate();

        ////////////////

        /**
         * @ngdoc method
         * @name activate
         * @methodOf docsApp.body.controller:BodyController
         * @description
         * The activate method that will use the {@link docsApp.nav.service:mtdNavSectionService mtdNavSectionService}
         * to create the sections object once on the first page load.
         *
         * After sections are created, it set a private flag to announce that isActivated = true.
         *
         */
        function activate() {
            vm.sections = mtdNavSectionService.createSections();
            isActivated = true;
        }

        /**
         * @ngdoc function
         * @name updateActivePage
         * @methodOf docsApp.body.controller:BodyController
         * @description
         * On $location change, the active section is saved and the {@link docsApp.body.controller:BodyController#properties_currentPage currentPage} is updated based on the
         * new path in the url.
         *
         * Upon landing, it will pre-open the necessary left nav sections based on the url.
         *
         */
        function updateActivePage() {
            if(!isActivated) {
                return;
            }

            var sectionID = $location.path().split('/')[1];
            var pageId = $location.path().split('/')[2];

            // save active section
            mtdNavSectionService.setActiveSection(sectionID);

            // On start, open desired section / subsections
            if(!landingSectionOpen && vm.sections[sectionID]) {
                vm.sections[sectionID].showSubSections = true;
                landingSectionOpen = true;
            }

            mtdNavSectionService.openSubSection(vm.sections[sectionID], pageId);

            // update active page
            if(vm.sections[sectionID]) {
                vm.currentPage = vm.sections[sectionID].pages[pageId];
            }

        }

        /**
         * @ngdoc function
         * @name watchPath
         * @methodOf docsApp.body.controller:BodyController
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
