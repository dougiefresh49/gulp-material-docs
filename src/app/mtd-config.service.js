/** --------------------------------
 * mtd-config.service.js
 * Created by a543119 on 1/15/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    angular
        .module('docsApp')
        .factory('mtdConfigService', mtdConfigService);

    mtdConfigService.$inject = [];

    /* @ngInject */
    function mtdConfigService() {

        var service = {
            NG_DOCS: NG_DOCS,
            MATERIAL_DOCS: getMaterialConfigVars()
        };

        return service;

        ////////////////

        function getMaterialConfigVars() {
            return {
                "legal": {
                    "companyName" : "Fidelity Investments",
                    "privacyLink" : "https://www.fidelity.com/privacy-policy",
                    "termsLink" : "https://www.google.com"
                },
                "scripts": [
                    "https://storage.googleapis.com/code.getmdl.io/1.0.6/material.min.js"
                ]

            }
        }

        //function loadSetupFiles() {
        //    var ngDocsGet = loadFile('js/docs-setup.js')
        //        .then(function (ngDocsFile) {
        //            // Remove invalid json chars
        //            ngDocsFile = ngDocsFile.replace('_NG_DOCS=', '').replace(';', '');
        //            _NG_DOCS = JSON.parse(ngDocsFile);
        //        });
        //
        //    var materialDocsGet = loadFile('js/material-docs-setup.json')
        //        .then(function (ngMaterialFile) {
        //            NG_MATERIAL_DOCS = ngMaterialFile;
        //        });
        //
        //    /* Return the promise so main ctrl knows when all config files loaded */
        //    return $q
        //        .all([ngDocsGet, materialDocsGet])
        //        .then(function(){
        //            areScriptsLoaded = true;
        //        });
        //}

        //function getScriptsLoaded() {
        //    return areScriptsLoaded;
        //}

        //function getNgDocs() {
        //    return _NG_DOCS;
        //}

        //function getNgMaterialDocs() {
        //    return NG_MATERIAL_DOCS;
        //}

        /* --- Helper Functions --- */
        //function loadFile(fileToLoad) {
        //    return $http
        //        .get(fileToLoad)
        //        .then(function (response) {
        //            return response.data;
        //        })
        //}

    }


})();
