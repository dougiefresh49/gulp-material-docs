/** --------------------------------
 * mtd-chapter-dependencies.service.js
 * Created by a543119 on 1/14/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    angular
        .module('docsApp')
        .factory('mtdChapterDependencyService', mtdChapterDependencyService);

    mtdChapterDependencyService.$inject = ['mtdNaveModulesService'];

    /* @ngInject */
    function mtdChapterDependencyService(mtdNaveModulesService) {
        var service = {
            updateAnchors: updateAnchors
        };

        return service;

        ////////////////

        function updateAnchors(sections) {
            var listHtml = angular.element( document.querySelector('#chapterBody ul.dependencies')).html();

            if(listHtml === undefined) {
                return;
            }

            listHtml = getUpdatedListHtml(listHtml, sections);

            angular.element( document.querySelector('#chapterBody ul.dependencies')).html(listHtml);

        }

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
