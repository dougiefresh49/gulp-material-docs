/** --------------------------------
 * mtd-chapter-toc.service.js
 * Created by dougiefresh49 on 1/13/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    /**
     * @ngdoc service
     * @name docsApp.chapter.service:mtdChapterTocService
     *
     * @description
     * The main service for generating the Table of Contents (TOC) for each chapter when it is loaded.
     * It is called from the {@link docsApp.chapter.service:mtdChapterService mtdChapterService}.
     *
     * @requires ng.$compile
     */

    angular
        .module('docsApp.chapter')
        .factory('mtdChapterTocService', mtdChapterTocService);

    mtdChapterTocService.$inject = ['$compile'];

    /* @ngInject */
    function mtdChapterTocService($compile) {
        var service = {
            addTableOfContents: addTableOfContents
        };

        return service;

        ////////////////

        /**
         * @ngdoc method
         * @name addTableOfContents
         * @methodOf docsApp.chapter.service:mtdChapterTocService
         * @description
         * Adds a table of contents to the top of each chapter for easy navigation.
         * It uses angular's querySelector to append the $compiled table of contents created with
         * {@link docsApp.chapter.service:mtdChapterTocService#methods_createTableOfContents createTableOfContents} function.
         *
         * @param {$scope} scope     the $scope object from the {@link docsApp.chapter.controller:ChapterController ChapterController}
         */
        function addTableOfContents(scope) {
            var chapterHtml = angular.element( document.querySelector('#chapterBody')).html();
            var toc = createTableOfContents(chapterHtml);

            if(document.querySelector('#description') !== null) {
                // Note: see this SO for explanation on compiling attached html
                // http://stackoverflow.com/questions/29925950/append-a-html-include-ng-click-in-angularjs
                angular.element( document.querySelector('#description').parentNode).prepend($compile(toc)(scope));
            }
        }

        /* --- Helper Functions --- */

        /**
         * @ngdoc method
         * @name createTableOfContents
         * @methodOf docsApp.chapter.service:mtdChapterTocService
         * @description
         * Helper function responsible for creating the T.O.C html.
         *
         * Uses {@link docsApp.chapter.service:mtdChapterTocService#methods_createSections createSections} to create
         * sections and pass to {@link docsApp.chapter.service:mtdChapterTocService#methods_createTocList createTocList}
         *
         * @private
         * @param {string} chapterHtml     sting of all chapter html
         * @returns {string} newly created T.O.C html
         */
        function createTableOfContents(chapterHtml) {
            var tocBegin = '<nav class="mdl-toc"> <h1>Contents</h1> <ul>';
            var tocEnd = '</ul> </nav>';

            return tocBegin + createTocList(createSections(chapterHtml)) + tocEnd;
        }

        /**
         * @ngdoc method
         * @name createSections
         * @methodOf docsApp.chapter.service:mtdChapterTocService
         * @description
         * Helper function that finds all sections in the page (inside h2 tags) and extracts the titles
         *
         * @param {string} chapterHtml     sting of all chapter html
         * @returns {Array} list of section titles
         */
        function createSections(chapterHtml) {
            var sectionIdxs = [];
            var sections = [];
            var h2Index, i;

            // find all h2 occurrences and save if not -1
            for(i = 0; i < chapterHtml.length; i++) {
                h2Index = chapterHtml.indexOf('h2', i);

                if(h2Index > -1) {
                    i = h2Index;
                    sectionIdxs.push(h2Index);
                }
            }

            // extract content between h2's
            if(sectionIdxs.length % 2 === 0) {
                var substring;

                for(i = 0; i < sectionIdxs.length; i+=2) {
                    // get text between h2s, then make section objects (name and id)
                    substring = chapterHtml.substring(sectionIdxs[i], sectionIdxs[i+1]);
                    var section = {
                        text: extractText(substring, '>', 0, '</'),
                        id: extractText(substring, '"', substring.indexOf('id='), '"')
                    };

                    // Don't show description section in toc
                    sections.push(section);
                }
            }


            return sections;
        }

        /**
         * @ngdoc method
         * @name createTocList
         * @methodOf docsApp.chapter.service:mtdChapterTocService
         * @description
         * Helper function responsible for creating a list item for each section in the chapter
         *
         * @param {Array} sections     list of section objects {name, id} in the chapter
         * @returns {string} html string of the list of sections
         */
        function createTocList(sections) {
            var listStr = "";

            sections.forEach(function (section) {
                listStr += '<li><a href="javascript:void(0)" ng-click="vm.scrollTo(\'' + section.id + '\')">' + section.text + '</a></li>';
            });

            return listStr;
        }

        /**
         * @ngdoc method
         * @name extractText
         * @methodOf docsApp.chapter.service:mtdChapterTocService
         * @description
         * Helper function used by {@link docsApp.chapter.service:mtdChapterTocService#methods_createSections createSections}
         * to get the text between given tags.
         *
         * @param {string} str  full sting to extract text from
         * @param {string} startSubStr  starting sting of desired text
         * @param {int} startAtIdx      starting index for the starting string
         * @param {string} endSubStr    ending sting of desired text
         *
         * @returns {string} desired substring from given string
         */
        function extractText(str, startSubStr, startAtIdx, endSubStr) {
            var startIdx = str.indexOf(startSubStr, startAtIdx);
            var endIdx= str.indexOf(endSubStr, startIdx + 1);
            return str.substring(startIdx + 1, endIdx);
        }
    }


})();
