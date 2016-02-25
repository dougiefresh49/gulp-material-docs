/** --------------------------------
 * mtd-nav-drawer.directive.js
 * Created by dougiefresh49 on 1/13/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    /**
     * @ngdoc directive
     * @name docsApp.nav.directive:mtdNavDrawer
     * @scope
     * @restrict E
     *
     * @description
     * Directive for the docsApp.nav module.  It is the main panel the user will see on the left.
     * If the screen is too small, it will be hidden and can be accessed with the menu icon
     *
     * @param {object}  sections    List of Sections created by {@link docsApp.nav.service:mtdNavSectionService mtdNavSectionService}
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
     * The main view controller for the {@link docsApp.nav.directive:mtdNavDrawer mtdNavDrawer} directive
     *
     * @requires docsApp.nav.service:mtdNavSectionService
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
        vm.sectionsList = [];

        /* Functions */
        vm.canShowLink = canShowLink;
        vm.canShowSubSections = mtdNavSectionService.canShowSubSections;
        vm.isActiveSection = mtdNavSectionService.isActiveSection;
        vm.toggleSection = toggleSection;

        activate();

        ////////////////

        /**
         * @ngdoc method
         * @name activate
         * @methodOf docsApp.nav.controller:NavDrawerController
         * @description
         * Activation function that sets properties need in the dom from the NG_DOCS.__options object
         *
         */
        function activate() {
            vm.companyName = NG_DOCS.__options.legal.companyName;
            vm.privacyLink = NG_DOCS.__options.legal.privacyLink;
            vm.termsLink = NG_DOCS.__options.legal.termsLink;
            vm.imageLink = NG_DOCS.__options.imageLink;
            vm.image = NG_DOCS.__options.image;
            vm.sectionsList = mtdNavSectionService.getSectionsAsList(vm.sections)
        }

        /**
         * @ngdoc method
         * @name canShowLink
         * @methodOf docsApp.nav.controller:NavDrawerController
         * @description
         * Determines if a link can be displayed
         *
         * @param {string} attr     string attribute of vm
         * @returns {bool} returns if the link can be shown or not
         */
        function canShowLink(attr) {
            return angular.isDefined(attr) && attr !== '';
        }

        /**
         * @ngdoc method
         * @name toggleSection
         * @methodOf docsApp.nav.controller:NavDrawerController
         * @description
         * Toggles a section's subSections once clicked
         *
         * @param {object} section     single section object inside sections property
         */
        function toggleSection(section) {
            if(angular.isDefined(section)) {
                section.showSubSections = !section.showSubSections;
            }
        }

    }

})();
