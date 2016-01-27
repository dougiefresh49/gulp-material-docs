/** --------------------------------
 * mtd-chapter-toc.service.js
 * Created by a543119 on 1/13/16.
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

        function addTableOfContents(scope) {
            var chapterHtml = angular.element( document.querySelector('#chapterBody')).html();
            var toc = createTableOfContents(chapterHtml);

            // Note: see this SO for explanation on compiling attached html
            // http://stackoverflow.com/questions/29925950/append-a-html-include-ng-click-in-angularjs
            angular.element( document.querySelector('#description').parentNode).prepend($compile(toc)(scope));
        }

        function createTableOfContents(chapterHtml) {
            var tocBegin = '<nav class="mdl-toc"> <h1>Contents</h1> <ul>';
            var tocEnd = '</ul> </nav>';

            return tocBegin + createTocList(createSections(chapterHtml)) + tocEnd;
        }

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

        function createTocList(sections) {
            var listStr = "";

            sections.forEach(function (section) {
                listStr += '<li><a href="javascript:void(0)" ng-click="vm.scrollTo(\'' + section.id + '\')">' + section.text + '</a></li>';
            });

            return listStr;
        }

        function extractText(str, startSubStr, startAtStr, endSubStr) {
            var startIdx = str.indexOf(startSubStr, startAtStr);
            var endIdx= str.indexOf(endSubStr, startIdx + 1);
            return str.substring(startIdx + 1, endIdx);
        }
    }


})();
