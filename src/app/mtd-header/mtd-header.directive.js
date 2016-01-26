/** --------------------------------
 * mtd-header.directive.js
 * Created by a543119 on 1/13/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    /**
     * @ngdoc directive
     * @name docsApp.directive:Header
     * @scope
     * @restrict E
     *
     * @description
     * Directive for the docsApp module.  It...
     *
     * @param {object}  sections    List of Sections created by DocsController
     *
     */

    angular
        .module('docsApp')
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
     * @name docsApp.controller:HeaderController
     * @description
     * The main view controller for the Header directive
     */


    HeaderController.$inject = ['mtdNavSectionService'];

    /* @ngInject */
    function HeaderController(mtdNavSectionService) {
        /* jshint validthis: true */
        var vm = this;

        /* Attributes */
        vm.title = 'HeaderController';

        /* Functions */
        vm.isActiveSection = mtdNavSectionService.isActiveSection;

        ////////////////

    }

})();
