/** --------------------------------
 * mtd-nav-section.service.js
 * Created by dougiefresh49 on 1/19/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    /**
     * @ngdoc service
     * @name docsApp.nav.service:mtdNavSectionService
     *
     * @description
     * The mtdNavSectionService is responsible for creating, opening, and keeping track of the active sections.
     *
     * @requires docsApp.nav.service:mtdNaveModulesService
     */
    angular
        .module('docsApp.nav')
        .factory('mtdNavSectionService', mtdNavSectionService);

    mtdNavSectionService.$inject = ['mtdNaveModulesService'];

    /* @ngInject */
    function mtdNavSectionService(mtdNaveModulesService) {
        var activeSection = '';


        var service = {
            createSections: createSections,
            isActiveSection: isActiveSection,
            canShowSubSections: canShowSubSections,
            setActiveSection: setActiveSection,
            openSubSection: openSubSection
        };

        return service;

        ////////////////

        /**
         * @ngdoc method
         * @name canShowSubSections
         * @methodOf docsApp.nav.service:mtdNavSectionService
         * @description
         * checks if a section's subSections can be shown
         *
         * @param {object} section     section object
         * @returns {bool} returns true or false
         */
        function canShowSubSections(section) {
            return isActiveSection(section.url) && (angular.isUndefined(section.showSubSections) ||  section.showSubSections);
        }

        /**
         * @ngdoc method
         * @name createSections
         * @methodOf docsApp.nav.service:mtdNavSectionService
         * @description
         * Creates an object of section objects.  This approach allows for direct lookup and no loops to find desired
         * sections.
         *
         * @returns {object} object of section objects
         */
        function createSections() {
            var sections = {};
            var cachedSections = getCachedSections();

            // Add pages and modules to each section
            angular.forEach(NG_DOCS.sections, function(sectionName, url) {
                var section = {
                    url: (NG_DOCS.html5Mode ? '' : '#/') + url,
                    name: sectionName,
                    pages: cachedSections[url] || {},
                    showSubSections: false
                };

                section.modules = mtdNaveModulesService.createModules(section.pages);

                sections[url] = section;
            });

            return sections;
        }

        /**
         * @ngdoc method
         * @name isActiveSection
         * @methodOf docsApp.nav.service:mtdNavSectionService
         * @description
         * Checks if a given sectionUrl is currently active or not
         *
         * @param {string} sectionUrl     the url of a section
         * @returns {bool} true or false
         */
        function isActiveSection(sectionUrl) {
            return activeSection === sectionUrl.replace('#/', '');
        }

        /**
         * @ngdoc method
         * @name setActiveSection
         * @methodOf docsApp.nav.service:mtdNavSectionService
         * @description
         * Set the active section private property
         *
         * @param {string} _activeSection     the new active section url string
         */
        function setActiveSection(_activeSection) {
            activeSection = _activeSection;
        }

        /**
         * @ngdoc method
         * @name openSubSection
         * @methodOf docsApp.nav.service:mtdNavSectionService
         * @description
         * Open the subSection of a given section if that section has a page with the supplied pageId
         *
         * @param {object} section    section object
         * @param {string} pageId     string id of the current page
         */
        function openSubSection(section, pageId) {
            if(angular.isDefined(pageId) && angular.isDefined(section.pages[pageId])) {
                var moduleName = section.pages[pageId].moduleName;
                section.modules[moduleName].showContents = true;
            }
        }

        /* --- Helper Functions --- */
        
        /**
         * @ngdoc function
         * @name getCachedSections
         * @methodOf docsApp.nav.service:mtdNavSectionService
         * @description
         * Helper function used by {@link docsApp.nav.service:mtdNavSectionService#methods_createSections createSections}
         * to save the pages for each section
         *
         * @returns {object}    object of sections with object of pages attached to each section
         */
        function getCachedSections() {
            var cachedSections = {};

            // save pages for each section in cachedSections
            NG_DOCS
                .pages
                .forEach(function (page) {
                    var url = page.section + '/' +  page.id;
                    if (page.id == 'angular.Module') {
                        page.partialUrl = 'partials/api/angular.IModule.html';
                    }
                    else {
                        page.partialUrl = 'partials/' + url.replace(':', '.') + '.html';
                    }
                    page.url = (NG_DOCS.html5Mode ? '' : '#/') + url;

                    if (!cachedSections[page.section]) {
                        cachedSections[page.section] = {};
                    }

                    cachedSections[page.section][page.id] = page;
                });

            return cachedSections;
        }

    }

})();
