/** --------------------------------
 * app.config.js
 * Created by a543119 on 1/25/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    angular
        .module('docsApp')
        .config(config);


    config.$inject = ['$locationProvider'];

    /* @ngInject */
    function config($locationProvider) {
        if (angular.isDefined(NG_DOCS) && NG_DOCS.html5Mode) {
            $locationProvider.html5Mode(true).hashPrefix('!');
        }
    }
})();
