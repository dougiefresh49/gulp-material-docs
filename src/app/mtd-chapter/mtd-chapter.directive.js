/** --------------------------------
 * mtd-chapter.directive.js
 * Created by a543119 on 1/13/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    /**
     * @ngdoc directive
     * @name docsApp.directive:Chapter
     * @scope
     * @restrict E
     *
     * @description
     * Directive for the docsApp module.  It...
     *
     * @param {object}  currentPage   Current Page object created in DocsController
     *
     */

    angular
        .module('docsApp')
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
     * @name docsApp.controller:ChapterController
     * @description
     * The main view controller for the Chapter directive
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

        function onPartialLoad() {
            // TODO: load discussions and google analytics (below)
            //$window._gaq && $window._gaq.push(['_trackPageview', $location.path();]);
            mtdChapterService.updateChapter(vm.currentPage, vm.sections, $scope);
        }

        // Note: see SO for full details on anchor scrolling to an id
        // http://stackoverflow.com/questions/14712223/how-to-handle-anchor-hash-linking-in-angularjs#answer-15935517
        function scrollTo(id) {
            var oldHash = $location.hash();
            $location.hash(id);
            $anchorScroll();
            $location.hash(oldHash);
        }

    }

})();
