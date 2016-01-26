/** --------------------------------
 * mtd-nav-section.service.js
 * Created by a543119 on 1/19/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    angular
        .module('docsApp')
        .factory('mtdNavSectionService', mtdNavSectionService);

    mtdNavSectionService.$inject = ['mtdConfigService', 'mtdNaveModulesService'];

    /* @ngInject */
    function mtdNavSectionService(mtdConfigService, mtdNaveModulesService) {
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

        function canShowSubSections(section) {
            return isActiveSection(section.url) && (angular.isUndefined(section.showSubSections) ||  section.showSubSections);
        }

        function createSections() {
            var sections = {};
            var cachedSections = getCachedSections();

            // Add pages and modules to each section
            angular.forEach(mtdConfigService.NG_DOCS.sections, function(sectionName, url) {
                var section = {
                    url: (mtdConfigService.NG_DOCS.html5Mode ? '' : '#/') + url,
                    name: sectionName,
                    pages: cachedSections[url] || {},
                    showSubSections: false
                };

                section.modules = mtdNaveModulesService.createModules(section.pages);

                sections[url] = section;
            });

            return sections;
        }

        function isActiveSection(sectionUrl) {
            return activeSection === sectionUrl.replace('#/', '');
        }

        function setActiveSection(_activeSection) {
            activeSection = _activeSection;
        }

        function openSubSection(section, pageId) {
            if(angular.isDefined(pageId) && angular.isDefined(section.pages[pageId])) {
                var moduleName = section.pages[pageId].moduleName;
                section.modules[moduleName].showContents = true;
            }
        }

        /* --- Helper Functions --- */
        function getCachedSections() {
            var cachedSections = {};

            // save pages for each section in cachedSections
            mtdConfigService
                .NG_DOCS
                .pages
                .forEach(function (page) {
                    var url = page.section + '/' +  page.id;
                    if (page.id == 'angular.Module') {
                        page.partialUrl = 'partials/api/angular.IModule.html';
                    }
                    else {
                        page.partialUrl = 'partials/' + url.replace(':', '.') + '.html';
                    }
                    page.url = (mtdConfigService.NG_DOCS.html5Mode ? '' : '#/') + url;

                    if (!cachedSections[page.section]) {
                        cachedSections[page.section] = {};
                    }

                    cachedSections[page.section][page.id] = page;
                });

            return cachedSections;
        }

    }

})();
