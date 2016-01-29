/** --------------------------------
 * mtd-chapter.directive.js
 * Created by dougiefresh49 on 1/13/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    /**
     * @ngdoc directive
     * @name docsApp.chapter.directive:Chapter
     * @scope
     * @restrict E
     *
     * @description
     * Directive for the docsApp.chapter module.  It is responsible for the chapter behavior and creating and
     * updating titles, creating table of contents, and updating the name of the dependencies when necessary.
     *
     * @param {object}  currentPage   Current Page object created & set in the {@link docsApp.body.controller:BodyController BodyController}
     * @param {object}  sections   Sections object created {@link docsApp.nav.service:mtdNavSectionService mtdNavSectionService}
     *
     */

    angular
        .module('docsApp.chapter')
        .directive('mtdChapter', mtdChapterChapter);

    function mtdChapterChapter() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/mtd-chapter/mtd-chapter.html',
            scope: {
                currentPage: '=',
                sections: '='
            },
            controller: ChapterController,
            controllerAs: 'vm',
            bindToController: true,
            replace: true
        };

        return directive;
    }

    /**
     * @ngdoc controller
     * @name docsApp.chapter.controller:ChapterController
     * @description
     * The main view controller for the Chapter directive
     *
     * @requires ng.$scope
     * @requires ng.$location
     * @requires ng.$anchorScroll
     * @requires docsApp.chapter:mtdChapterService
     *
     */


    ChapterController.$inject = ['$scope', '$location', '$anchorScroll', 'mtdChapterService'];

    /* @ngInject */
    function ChapterController($scope, $location, $anchorScroll, mtdChapterService) {
        /* jshint validthis: true */
        var vm = this;

        /* Attributes */
        vm.title = 'ChapterController';

        /* Functions */
        vm.onPartialLoad = onPartialLoad;
        vm.scrollTo = scrollTo;

        ////////////////

        /**
         * @ngdoc method
         * @name onPartialLoad
         * @methodOf docsApp.chapter.controller:ChapterController
         * @description
         * Responsible for updating the loaded chapter from the partial directory
         *
         *
         */
        function onPartialLoad() {
            // TODO: load discussions and google analytics (below)
            //$window._gaq && $window._gaq.push(['_trackPageview', $location.path();]);
            mtdChapterService.updateChapter(vm.currentPage, vm.sections, $scope);
        }

        /**
         * @ngdoc method
         * @name scrollTo
         * @methodOf docsApp.chapter.controller:ChapterController
         * @description
         * Scrolls to an anchor tag on the current page
         *
         * Note: see {@link http://stackoverflow.com/questions/14712223/how-to-handle-anchor-hash-linking-in-angularjs#answer-15935517 Stack  Overflow}
         * for full details on anchor scrolling to an id
         *
         * @param {string} id of element in the page to scroll to
         */
        function scrollTo(id) {
            var oldHash = $location.hash();
            $location.hash(id);
            $anchorScroll();
            $location.hash(oldHash);
        }

    }

})();
