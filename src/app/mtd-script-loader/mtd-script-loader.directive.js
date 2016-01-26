/** --------------------------------
 * mtd-script-loader.directive.js
 * Created by a543119 on 1/15/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    /**
     * @ngdoc directive
     * @name docsApp.directive:ScriptLoader
     * @scope
     * @restrict E
     *
     * @description
     * Directive for the docsApp module.  It...
     *
     *
     */

    angular
        .module('docsApp')
        .directive('mtdScriptLoader', mtdScriptLoaderScriptLoader);

    function mtdScriptLoaderScriptLoader() {
        var directive = {
            restrict: 'E',
            scope: {},
            controller: ScriptLoaderController,
            controllerAs: 'vm',
            bindToController: true,
            link: ScriptLoaderLink
        };

        return directive;
    }

    function ScriptLoaderLink(scope, element, attrs, scriptLoaderController) {
        scriptLoaderController.activate(element);
    }

    /**
     * @ngdoc controller
     * @name docsApp.controller:ScriptLoaderController
     * @description
     * The main view controller for the ScriptLoader directive
     */


    ScriptLoaderController.$inject = ['mtdConfigService'];

    /* @ngInject */
    function ScriptLoaderController(mtdConfigService) {
        /* jshint validthis: true */
        var vm = this;

        /* Attributes */
        vm.title = 'ScriptLoaderController';
        vm.element = {};

        /* Functions */
        vm.activate = activate;

        ////////////////

        function activate(element) {
            vm.element = element;
            loadScripts();
        }

        function loadScripts() {
            mtdConfigService.NG_DOCS.scripts.forEach(function (script) {
                // use global document since Angular's $document is weak
                var s = document.createElement('script');
                s.src = script;
                document.body.appendChild(s);
            });
        }

    }

})();
