/** --------------------------------
 * app.module.js
 * Created by a543119 on 1/25/16.
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
     * @requires docsApp.chapter
     */

    angular.module('docsApp', [
        'ngAnimate',
        'docsApp.body',
        'docsApp.chapter',
        'docsApp.header',
        'docsApp.nav'
    ]);

})();
