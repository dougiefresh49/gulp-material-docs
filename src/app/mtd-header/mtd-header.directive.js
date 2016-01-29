/** --------------------------------
 * mtd-header.directive.js
 * Created by dougiefresh49 on 1/13/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    /**
     * @ngdoc directive
     * @name docsApp.header.directive:mtdHeader
     * @scope
     * @restrict E
     *
     * @description
     * Directive for the docsApp module.  It will display the main site name along with the name of the active section.
     * On scroll, the header will shrink.
     *
     * @param {object}  sections    List of Sections created by {@link docsApp.nav.service:mtdNavSectionService mtdNavSectionService}
     *
     */

    angular
        .module('docsApp.header')
        .directive('mtdHeader', mtdHeaderHeader);

    function mtdHeaderHeader() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/mtd-header/mtd-header.html',
            scope: {
                sections: '='
            },
            controller: HeaderController,
            controllerAs: 'vm',
            bindToController: true,
            replace: true
        };

        return directive;
    }

    /**
     * @ngdoc controller
     * @name docsApp.header.controller:HeaderController
     * @description
     * The main view controller for the Header directive
     *
     * @requires docsApp.nav.service:mtdNavSectionService
     *
     */

    HeaderController.$inject = ['mtdNavSectionService'];

    /* @ngInject */
    function HeaderController(mtdNavSectionService) {
        /* jshint validthis: true */
        var vm = this;

        /* Attributes */
        vm.title = 'HeaderController';
        
        /**
         * @ngdoc property
         * @name headerTitle
         * @propertyOf docsApp.header.controller:HeaderController
         * @description
         * Header title read from the NG_DOCS options properties
         */
        vm.headerTitle = NG_DOCS.__options.title || 'Material Docs';

        /* Functions */
        /**
         * @ngdoc method
         * @name isActiveSection
         * @methodOf docsApp.header.controller:HeaderController
         * @description
         * Pointer to {@link docsApp.nav.service:mtdNavSectionService#methods_isActiveSection}
         *
         * @param {string} sectionUrl     the section url string
         * @returns {bool} returns if the section url is currently active
         */
        vm.isActiveSection = mtdNavSectionService.isActiveSection;

        ////////////////

    }

})();
