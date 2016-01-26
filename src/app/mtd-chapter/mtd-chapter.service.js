/** --------------------------------
 * mtd-chapter.service.js
 * Created by a543119 on 1/14/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    angular
        .module('docsApp')
        .factory('mtdChapterService', mtdChapterService);

    mtdChapterService.$inject = ['mtdChapterTocService', 'mtdNaveModulesService', 'mtdChapterDependencyService'];

    /* @ngInject */
    function mtdChapterService(mtdChapterTocService, mtdNaveModulesService, mtdChapterDependencyService) {
        var service = {
            updateChapter: updateChapter
        };

        return service;

        ////////////////

        function updateChapter(currentPage, sections, scope) {
            mtdChapterTocService.addTableOfContents(scope);
            updateTitles(currentPage, sections);
            mtdChapterDependencyService.updateAnchors(sections);
        }

        /* --- Helper Functions --- */
        function updateTitles(currentPage, sections) {
            var moduleName = mtdNaveModulesService.getModuleName(sections, currentPage.section, currentPage.id);

            if(moduleName !== '' && (currentPage.type === 'service' || currentPage.type === 'object')) {
                updateTitle(currentPage.id);
                updateSubtitle();
            }

        }

        function updateTitle(pageId) {
            angular.element( document.querySelector('#chapterBody h1 code')).html(pageId);
        }

        function updateSubtitle() {
            var subTitleElement = angular.element( document.querySelector('span.hint') );
            var newSubtitleHtml = subTitleElement.html().replace('service in module', 'sub-module in module');
            subTitleElement.html(newSubtitleHtml);
        }

    }


})();
