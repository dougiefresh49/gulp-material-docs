/** --------------------------------
 * mtd-nav-drawer.directive.js
 * Created by a543119 on 1/13/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    /**
     * @ngdoc directive
     * @name docsApp.nav.directive:NavDrawer
     * @scope
     * @restrict E
     *
     * @description
     * Directive for the docsApp module.  It...
     *
     * @param {object}  sections    List of Sections created by DocsController
     * @param {object}  modules    List of Modules created by DocsController
     *
     */

    angular
        .module('docsApp.nav')
        .directive('mtdNavDrawer', mtdNavDrawerNavDrawer);

    function mtdNavDrawerNavDrawer() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/mtd-nav/drawer/mtd-nav-drawer.html',
            scope: {
                sections: '='
            },
            controller: NavDrawerController,
            controllerAs: 'vm',
            bindToController: true,
            replace: true
        };

        return directive;
    }

    /**
     * @ngdoc controller
     * @name docsApp.nav.controller:NavDrawerController
     * @description
     * The main view controller for the NavDrawer directive
     */


    NavDrawerController.$inject = ['mtdNavSectionService'];

    /* @ngInject */
    function NavDrawerController(mtdNavSectionService) {
        /* jshint validthis: true */
        var vm = this;

        /* Attributes */
        vm.title = 'NavDrawerController';
        vm.companyName = '';
        vm.privacyLink = '';
        vm.termsLink = '';
        vm.imageLink = '';
        vm.image = '';

        /* Functions */
        vm.canShowLink = canShowLink;
        vm.canShowSubSections = mtdNavSectionService.canShowSubSections;
        vm.isActiveSection = mtdNavSectionService.isActiveSection;
        vm.toggleSection = toggleSection;

        activate();

        ////////////////

        function activate() {
            vm.companyName = NG_DOCS.__options.legal.companyName;
            vm.privacyLink = NG_DOCS.__options.legal.privacyLink;
            vm.termsLink = NG_DOCS.__options.legal.termsLink;
            vm.imageLink = NG_DOCS.__options.imageLink;
            vm.image = NG_DOCS.__options.image;
        }

        function canShowLink(attr) {
            return angular.isDefined(attr) && attr !== '';
        }

        function toggleSection(section) {
            if(angular.isDefined(section)) {
                section.showSubSections = !section.showSubSections;
            }
        }

    }

})();
