/** --------------------------------
 * mtd-body.directive.js
 * Created by a543119 on 1/19/16.
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
        vm.sections = {};
        vm.currentPage = {};

        /* Functions */
        vm.activate = activate;

        /* Watchers */
        $scope.$watch(watchPath, updateActivePage);

        activate();

        ////////////////

        function activate() {
            vm.sections = mtdNavSectionService.createSections();
            isActivated = true;
        }

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
                mtdNavSectionService.openSubSection(vm.sections[sectionID], pageId);
                landingSectionOpen = true;
            }

            // update active page
            if(vm.sections[sectionID]) {
                vm.currentPage = vm.sections[sectionID].pages[pageId];
            }

        }

        function watchPath() {
            return $location.path();
        }

    }

})();
