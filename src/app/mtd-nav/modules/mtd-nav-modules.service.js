/** --------------------------------
 * mtd-nav-modules.service.js
 * Created by a543119 on 1/15/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    /**
     * @ngdoc service
     * @name docsApp.nav.service:mtdNaveModulesService
     *
     * @description
     * The main service for generating and fetching the modules visible in the
     * {@link docsApp.nav.directive:mtdNavDrawer NavDrawer}
     *
     */

    angular
        .module('docsApp.nav')
        .factory('mtdNaveModulesService', mtdNaveModulesService);

    mtdNaveModulesService.$inject = [];

    /* @ngInject */
    function mtdNaveModulesService() {
        var modules = {};

        var GLOBALS = /^angular\.([^\.]+)$/,
            MODULE = /^([^:]+)$/,
            MODULE_MOCK = /^angular\.mock\.([^\.]+)$/,
            MODULE_CONTROLLER = /^(.+)\.controllers?:([^\.]+)$/,
            MODULE_DIRECTIVE = /^(.+)\.directives?:([^\.]+)$/,
            MODULE_DIRECTIVE_INPUT = /^(.+)\.directives?:input\.([^\.]+)$/,
            MODULE_FILTER = /^(.+)\.filters?:([^\.]+)$/,
            MODULE_CUSTOM = /^(.+)\.([^\.]+):([^\.]+)$/,
            MODULE_SERVICE = /^(.+)\.([^\.]+?)(Provider)?$/,
            MODULE_TYPE = /^([^\.]+)\..+\.([A-Z][^\.]+)$/,
            MODULE_PROVIDER = /^.+Provider$/;

        var service = {
            createModules: createModules,
            getModuleName: getModuleName
        };

        return service;

        ////////////////

        function createModules(pages) {
            // Clear data
            modules = {};

            angular.forEach(pages, function (page, pageId) {
                matchPage(page);
            });

            return modules;
        }

        function getModuleName(sections, sectionId, pageId) {
            return (angular.isDefined(sectionId) && angular.isDefined(sections[sectionId]) && sections[sectionId].modules && sections[sectionId].modules[pageId])
                ? sections[sectionId].modules[pageId].name
                : '';
        }

        /* --- Helper Functions --- */

        function matchPage(page) {
            var match, module;

            if (page.id == 'index') {
                // Skip index page
            }
            else if (page.id == 'angular.Module') {
                fetchModule('ng', page).types.push(page);
            }
            else if (page.id.match(GLOBALS)) {
                fetchModule('ng', page).globals.push(page);
            }
            else if (match = page.id.match(MODULE)) {
                fetchModule(page.moduleName || match[1], page, MODULE);
            }
            else if (match = page.id.match(MODULE_FILTER)) {
                fetchModule(page.moduleName || match[1], page, MODULE_FILTER).filters.push(page);
            }
            else if (match = page.id.match(MODULE_CONTROLLER) && page.type === 'controller') {
                fetchModule(page.moduleName || match[1], page, MODULE_CONTROLLER).controllers.push(page);
            }
            else if (match = page.id.match(MODULE_DIRECTIVE)) {
                fetchModule(page.moduleName || match[1], page, MODULE_DIRECTIVE).directives.push(page);
            }
            else if (match = page.id.match(MODULE_DIRECTIVE_INPUT)) {
                fetchModule(page.moduleName || match[1], page, MODULE_DIRECTIVE_INPUT).directives.push(page);
            }
            else if (match = page.id.match(MODULE_CUSTOM)) {
                module = fetchModule(page.moduleName || match[1], page, MODULE_CUSTOM);

                (page.type === 'service')
                    ? createService(module, match[3], page, page.id.match(MODULE_PROVIDER))
                    : (module[page.type + 's'])
                        ? module[page.type + 's'].push(page)
                        : module.others.push(page);
            }
            else if (match = page.id.match(MODULE_TYPE) && page.type === 'type') {
                fetchModule(page.moduleName || match[1], page, MODULE_TYPE).types.push(page);
            }
            else if (match = page.id.match(MODULE_SERVICE)) {
                if (page.type === 'overview') {
                    fetchModule(page.id, page, MODULE_SERVICE);
                }
                else {
                    module = fetchModule(page.moduleName || match[1], page, MODULE_SERVICE);
                    createService(module, match[2], page, match[3]);
                }
            }
            else if (page.id.match(MODULE_MOCK)) {
                fetchModule('ngMock', page, MODULE_MOCK).globals.push(page);
            }

        }

        function fetchModule(name, page, matchingRegex) {
            // Correct the incorrect labeling of nested modules (a nested module is a module not service)
            if(page.moduleName !== page.id && matchingRegex === MODULE) {
                name = page.id;
                page.parentModule = page.moduleName;
                page.moduleName = page.id;
            }

            // If module doesn't exist, create it
            if(!modules[name]) {
                modules[name] = createModule(name, page);
            }

            return modules[name];
        }

        function createModule(name, page) {
            return {
                name: name,
                pageData: page,
                url: (NG_DOCS.html5Mode ? '' : '#/') + page.section + '/' + name,
                globals: [],
                controllers: [],
                directives: [],
                services: [],
                others: [],
                types: [],
                filters: [],
                showContents: false
            }
        }

        // Used in place of module.service() in ng docs (docs.js - line 465)
        function createService(module, serviceName, page, providerCondition) {

            // Create service
            var service = { name: serviceName };

            // Add page to the service
            var providerOrInstance = providerCondition ? 'provider' : 'instance';
            service[providerOrInstance] = page;

            module.services.push(service);

            return service;
        }

    }

})();
