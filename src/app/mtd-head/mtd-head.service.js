/** --------------------------------
 * mtd-head.controller.js
 * Created by dougiefresh49 on 1/30/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    /**
     * @ngdoc service
     * @name docsApp.head.service:mtdHeadService
     * @description
     * Service responsible for appending user's head information such as title and favicon files
     */
    angular
        .module('docsApp.head')
        .factory('mtdHeadService', mtdHeadService);

    mtdHeadService.$inject = [];

    /* @ngInject */
    function mtdHeadService() {
        var service = {
            addTitleAndIco: addTitleAndIco
        };

        return service;

        ////////////////

        /**
         * @ngdoc function
         * @name addTitleAndIco
         * @methodOf docsApp.head.service:mtdHeadService
         * @description
         * Helper function to add the title and favico file to the header section
         *
         */
        function addTitleAndIco() {
            var title = 'Docs';
            var favicon = '';

            if(NG_DOCS.__options) {
                title = (NG_DOCS.__options.title !== '') ? NG_DOCS.__options.title : 'Docs';
                favicon = (NG_DOCS.__options.favicon && NG_DOCS.__options.favicon !== '')
                    ? '../' + NG_DOCS.__options.favicon
                    : '';
            }

            var titleHtml = '<title>' + title + '</title>';
            var icoHtml = '<link rel="shortcut icon" href="' + favicon + '"/>';

            angular.element( document.querySelector('head')).prepend(titleHtml);
            angular.element( document.querySelector('head')).prepend(icoHtml);
        }

        ////////////////

    }

})();
