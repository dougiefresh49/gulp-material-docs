/** --------------------------------
 * mtd-chapter.service.js
 * Created by dougiefresh49 on 1/14/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    /**
     * @ngdoc service
     * @name docsApp.chapter.service:mtdChapterService
     *
     * @description
     * The main service for generating and updating each chapter when it is loaded.
     *
     * @requires docsApp.chapter.service:mtdChapterTocService
     * @requires docsApp.chapter.service:mtdChapterDependencyService
     * @requires docsApp.nav.service:mtdNaveModulesService
     */

    angular
        .module('docsApp.chapter')
        .factory('mtdChapterService', mtdChapterService);

    mtdChapterService.$inject = ['mtdChapterTocService', 'mtdNaveModulesService', 'mtdChapterDependencyService'];

    /* @ngInject */
    function mtdChapterService(mtdChapterTocService, mtdNaveModulesService, mtdChapterDependencyService) {
        var service = {
            updateChapter: updateChapter
        };

        return service;

        ////////////////

        /**
         * @ngdoc method
         * @name docsApp.chapter.service:mtdChapterService#updateChapter
         * @methodOf docsApp.chapter.service:mtdChapterService
         * @description
         * Main function for coordinating the updates for the chapter.
         * It uses the {@link docsApp.chapter.service:mtdChapterTocService mtdChapterTocService}
         * to create the chapter Table of Contents, the
         * {@link docsApp.chapter.service:mtdChapterDependencyService mtdChapterDependencyService} to update the links
         * of the dependency sections and {@link / updateTitles}.
         *
         *
         * @param {object} currentPage object that
         * @param {object} sections object created in the {@link docsApp.body.controller:BodyController BodyController}
         * @param {$scope} scope variable passed from
         */
        function updateChapter(currentPage, sections, scope) {
            mtdChapterTocService.addTableOfContents(scope);
            updateTitles(currentPage, sections);
            mtdChapterDependencyService.updateAnchors(sections);
        }

        /* --- Helper Functions --- */
        /**
         * @ngdoc method
         * @name updateTitles
         * @methodOf docsApp.chapter.service:mtdChapterService
         * @description
         * Helper function that is responsible for coordinating chapter title and subtitle updates.
         *
         * @private
         * @param {object} currentPage     the current page object to track the active page
         * @param {object} sections     object passed in from {@link docsApp.chapter.service:mtdChapterService#updateChapter updateChapter}
         */
        function updateTitles(currentPage, sections) {
            var moduleName = mtdNaveModulesService.getModuleName(sections, currentPage.section, currentPage.id);

            if(moduleName !== '' && (currentPage.type === 'service' || currentPage.type === 'object')) {
                updateTitle(currentPage.id);
                updateSubtitle();
            }

        }

        /**
         * @ngdoc method
         * @name updateTitle
         * @methodOf docsApp.chapter.service:mtdChapterService
         * @description
         * Helper function that will replace the default chapter title (the currentPage's shortName) with the
         * currentPage's id using angular's querySelector.
         *
         * @private
         * @param {string} pageId     the id of the current page object
         */
        function updateTitle(pageId) {
            angular.element( document.querySelector('#chapterBody h1 code')).html(pageId);
        }

        /**
         * @ngdoc method
         * @name updateSubtitle
         * @methodOf docsApp.chapter.service:mtdChapterService
         * @description
         * Helper function that replaces the phrase 'service in module' with 'sub-module in module' in the
         * event there is a nested module.
         *
         * @private
         */
        function updateSubtitle() {
            var subTitleElement = angular.element( document.querySelector('span.hint') );
            var newSubtitleHtml = subTitleElement.html().replace('service in module', 'sub-module in module');
            subTitleElement.html(newSubtitleHtml);
        }

    }


})();
