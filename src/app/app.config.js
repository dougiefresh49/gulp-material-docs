/** --------------------------------
 * app.config.js
 * Created by a543119 on 1/25/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    /**
     * @ngdoc object
     * @name docsApp.object:config
     *
     * @description
     * The configuration function for the docsApp. It will set the application with HTML5 mode or not based on the
     * users given configuration
     *
     * @requires ng.$locationProvider
     */

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
