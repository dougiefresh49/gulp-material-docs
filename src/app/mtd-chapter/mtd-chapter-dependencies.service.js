/** --------------------------------
 * mtd-chapter-dependencies.service.js
 * Created by dougiefresh49 on 1/14/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    /**
     * @ngdoc service
     * @name docsApp.chapter.service:mtdChapterDependencyService
     *
     * @description
     * A service for updating the names of dependencies in each chapter
     *
     * @requires docsApp.nav.service:mtdNaveModulesService
     */

    angular
        .module('docsApp.chapter')
        .factory('mtdChapterDependencyService', mtdChapterDependencyService);

    mtdChapterDependencyService.$inject = ['mtdNaveModulesService'];

    /* @ngInject */
    function mtdChapterDependencyService(mtdNaveModulesService) {
        var service = {
            updateAnchors: updateAnchors
        };

        return service;

        ////////////////

        
        /**
         * @ngdoc method
         * @name updateAnchors
         * @methodOf docsApp.chapter.service:mtdChapterDependencyService
         * @description
         * Main coordinating function for updating the anchor tags of the dependency sections of each chapter.
         *
         * @param {object} sections     object passed from the {@link docsApp.chapter.service:mtdChapterService#methods_updateChapter updateChapter}
         */
        function updateAnchors(sections) {
            var listHtml = angular.element( document.querySelector('#chapterBody ul.dependencies')).html();

            if(listHtml === undefined) {
                return;
            }

            listHtml = getUpdatedListHtml(listHtml, sections);

            angular.element( document.querySelector('#chapterBody ul.dependencies')).html(listHtml);

        }
        
        /* --- Helper Functions --- */
        

        /**
         * @ngdoc method
         * @name getUpdatedListHtml
         * @methodOf docsApp.chapter.service:mtdChapterDependencyService
         * @description
         * Helper function that gets the updated list of dependency anchor tags with proper names
         *
         * @private
         * @param {string} listHtml     string of html from the dom
         * @param {object} sections  object passed from the {@link docsApp.chapter.service:mtdChapterDependencyService#methods_getUpdatedListHtml updateAnchors}
         * @returns {string} string of the updated dependency list html
         */
        function getUpdatedListHtml(listHtml, sections) {
            var anchorStartIdx = 0,
                anchorEndIdx = 0,
                anchorStartHtml = '<a',
                anchorEndHtml = '</a>';

            // Replace each anchor text that has an incorrect name
            for(var i = 0; i < listHtml.length; i++) {
                anchorStartIdx = listHtml.indexOf(anchorStartHtml, i);

                if(anchorStartIdx === -1) {
                    break;
                }

                anchorEndIdx = listHtml.indexOf(anchorEndHtml, anchorStartIdx);

                // Validate there is an ending anchor tag
                if(anchorEndIdx > -1) {
                    var anchorHtml = listHtml.substring(anchorStartIdx, anchorEndIdx + anchorEndHtml.length);
                    listHtml = listHtml.replace(anchorHtml, getUpdatedAnchor(sections, anchorHtml));

                    i = anchorEndIdx + anchorEndHtml.length;
                }
                else {
                    i = anchorStartIdx + anchorStartHtml.length;
                }
            }

            return listHtml;
        }

        /**
         * @ngdoc method
         * @name getUpdatedAnchor
         * @methodOf docsApp.chapter.service:mtdChapterDependencyService
         * @description
         * Helper function used to update individual anchor tag names in the dependency list
         *
         * @param {object} sections  object passed from the {@link docsApp.chapter.service:mtdChapterDependencyService#methods_getUpdatedListHtml getUpdatedListHtml}
         * @param {string} anchorHtml string of html ex: '<a href="/some/ur/">moduleName</a>'
         * @returns {string} updated anchorHtml with proper module.name
         */
        function getUpdatedAnchor(sections, anchorHtml) {
            var hrefStart = anchorHtml.indexOf('href="') + 6,
                hrefEnd = anchorHtml.indexOf('"', hrefStart);

            var linkTextStart = anchorHtml.indexOf('>') + 1,
                linkTextEnd = anchorHtml.indexOf('<', linkTextStart);

            var anchorLink = anchorHtml.substring(hrefStart, hrefEnd);
            var anchorText = anchorHtml.substring(linkTextStart, linkTextEnd);

            var sectionId = NG_DOCS.html5Mode ? anchorLink.split('/')[0] : anchorLink.split('/')[1];
            var pageId = NG_DOCS.html5Mode ? anchorLink.split('/')[1] : anchorLink.split('/')[2];

            var moduleName = mtdNaveModulesService.getModuleName(sections, sectionId, pageId);

            if(moduleName !== '' && pageId !== anchorText) {
                anchorHtml = anchorHtml.substring(0, linkTextStart) + pageId + anchorHtml.substring(linkTextStart + anchorText.length);
            }

            return anchorHtml;
        }
    }

})();
