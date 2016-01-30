/** --------------------------------
 * app.module.js
 * Created by dougiefresh49 on 1/25/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    /**
     * @ngdoc object
     * @name docsApp
     * @description
     *
     * The docsApp module definition.
     *
     * @requires ngAnimate
     * @requires docsApp.body
     * @requires docsApp.chapter
     * @requires docsApp.head
     * @requires docsApp.header
     * @requires docsApp.nav
     * @requires docsApp.search
     */

    angular.module('docsApp', [
        'ngAnimate',
        'docsApp.body',
        'docsApp.chapter',
        'docsApp.head',
        'docsApp.header',
        'docsApp.nav',
        'docsApp.search'
    ]);

})();
