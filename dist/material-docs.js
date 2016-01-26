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
     */

    angular.module('docsApp', ['ngAnimate']);

})();

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
        //if (angular.isDefined(NG_DOCS) && angular.isDefined(NG_DOCS.html5Mode)) {
        //    $locationProvider.html5Mode(true).hashPrefix('!');
        //}
    }
})();

NG_DOCS={
  "sections": {
    "rtmiApp": "Margin Impact App",
    "bootstrapApi": "Bootstrapping API"
  },
  "pages": [
    {
      "section": "rtmiApp",
      "id": "app",
      "shortName": "app",
      "type": "object",
      "moduleName": "app",
      "shortDescription": "This is the main module of the Margin Impact application.  It list out all other main modules that the app",
      "keywords": "app application balances depends impact layout list main margin module modules object rtmiapp shared"
    },
    {
      "section": "rtmiApp",
      "id": "app.balances",
      "shortName": "app.balances",
      "type": "object",
      "moduleName": "app",
      "shortDescription": "The balances module definition. It includes the balances impacted module.",
      "keywords": "app balances definition impacted includes module object rtmiapp"
    },
    {
      "section": "rtmiApp",
      "id": "app.balances.impacted",
      "shortName": "app.balances.impacted",
      "type": "object",
      "moduleName": "app.balances",
      "shortDescription": "The impacted-balances module definition.  It has no dependencies",
      "keywords": "app balances definition dependencies filters impacted impacted-balances module object rtmiapp shared"
    },
    {
      "section": "rtmiApp",
      "id": "app.balances.impacted.controller:ImpactedBalancesController",
      "shortName": "ImpactedBalancesController",
      "type": "controller",
      "moduleName": "app.balances.impacted",
      "shortDescription": "The main view controller for the ImpactedBalances directive",
      "keywords": "app balances based call controller determines directive doshow false impacted impactedbalance impactedbalances impactedbalancescontroller indicator main method object rtmiapp true view weather"
    },
    {
      "section": "rtmiApp",
      "id": "app.balances.impacted.directive:ImpactedBalances",
      "shortName": "ImpactedBalances",
      "type": "directive",
      "moduleName": "app.balances.impacted",
      "shortDescription": "Directive for the app.balances.impacted module.  It...",
      "keywords": "app balance balances directive impacted impactedbalance impactedbalancemodel impactedbalances model module rtmiapp service"
    },
    {
      "section": "rtmiApp",
      "id": "app.balances.impacted.service:ImpactedBalanceModel",
      "shortName": "ImpactedBalanceModel",
      "type": "service",
      "moduleName": "app.balances.impacted",
      "shortDescription": "The ImpactedBalance Model",
      "keywords": "00 13 60 75 amount app app-balances-impacted-service-impactedbalancemodel-page app-balances-impacted-service-page attribute balances buying call callind class data dp exchangesurplus fed house housesurplus impacted impactedbalance impactedbalancedata impactedbalancedetail impactedbalancemodel indicates margin marginbuyingpower margnbuyingpower method model nyse object passed power returned returns rtmiapp service sma surplus true var weather"
    },
    {
      "section": "rtmiApp",
      "id": "app.layout",
      "shortName": "app.layout",
      "type": "object",
      "moduleName": "app",
      "shortDescription": "The layout module definition. All layout-related directives / componenets defined inside",
      "keywords": "app componenets defined definition directives inside layout layout-related module object rtmiapp"
    },
    {
      "section": "rtmiApp",
      "id": "app.layout.footnotes",
      "shortName": "app.layout.footnotes",
      "type": "object",
      "moduleName": "app.layout",
      "shortDescription": "The footnotes module definition.  It has no dependencies.",
      "keywords": "app definition dependencies footnotes layout module object rtmiapp"
    },
    {
      "section": "rtmiApp",
      "id": "app.layout.layer-content",
      "shortName": "app.layout.layer-content",
      "type": "object",
      "moduleName": "app.layout",
      "shortDescription": "The layer-content module definition.  This is the main container of the entire Margin Impact App",
      "keywords": "app container definition entire impact layer-content layout main margin module object rtmiapp"
    },
    {
      "section": "rtmiApp",
      "id": "app.layout.layer-content.controller:LayerContentController",
      "shortName": "LayerContentController",
      "type": "controller",
      "moduleName": "app.layout.layer-content",
      "shortDescription": "The main view controller for the layer-content directive",
      "keywords": "$scope activate app call consumingappdata controller directive dp impact layer-content layercontentcontroller layout main margin method point populated rtmiapp service starting triggered view vm"
    },
    {
      "section": "rtmiApp",
      "id": "app.layout.layer-content.directive:rtmiLayerContent",
      "shortName": "rtmiLayerContent",
      "type": "directive",
      "moduleName": "app.layout.layer-content",
      "shortDescription": "Directive for the layer-content module.  It accepts 1 parameter that is passed in from the consuming application",
      "keywords": "accepts app application consuming consumingappdata data directive dpurlprefix layer-content layout module oauthheaders object parameter passed properties rtmiapp rtmilayercontent"
    },
    {
      "section": "rtmiApp",
      "id": "app.shared",
      "shortName": "app.shared",
      "type": "object",
      "moduleName": "app",
      "shortDescription": "The shared module definition",
      "keywords": "app definition directives module object rtmiapp services shared"
    },
    {
      "section": "rtmiApp",
      "id": "app.shared.directives",
      "shortName": "app.shared.directives",
      "type": "object",
      "moduleName": "app.shared",
      "shortDescription": "The shared directives module definition",
      "keywords": "app definition directives module object rtmiapp shared"
    },
    {
      "section": "rtmiApp",
      "id": "app.shared.filters",
      "shortName": "app.shared.filters",
      "type": "object",
      "moduleName": "app.shared",
      "shortDescription": "The Filters module definition.",
      "keywords": "app definition filters module object rtmiapp shared"
    },
    {
      "section": "rtmiApp",
      "id": "app.shared.filters.filter:capitalizeEachWord",
      "shortName": "capitalizeEachWord",
      "type": "filter",
      "moduleName": "app.shared.filters",
      "shortDescription": "A filter for capitalizing the first letter of each word in a sentence",
      "keywords": "$filter app capitalizeeachword capitalizing filter filters http letter overflow reference return returns rtmiapp sentence shared stack vm word"
    },
    {
      "section": "rtmiApp",
      "id": "app.shared.filters.filter:capitalizeFirstLetter",
      "shortName": "capitalizeFirstLetter",
      "type": "filter",
      "moduleName": "app.shared.filters",
      "shortDescription": "A filter for capitalizing the first letter of a string in the dom",
      "keywords": "app capitalizefirstletter capitalizing dom filter filters http letter overflow reference returns rtmiapp shared stack string vm"
    },
    {
      "section": "rtmiApp",
      "id": "app.shared.filters.filter:negativeCurrency",
      "shortName": "negativeCurrency",
      "type": "filter",
      "moduleName": "app.shared.filters",
      "shortDescription": "A custom currency Filter that will display currency with a negative sign in front as apposed to",
      "keywords": "$filter 30122327 angular app apposed currency custom default display filter filters front http negative negativecurrency overflow parenthesis reference returns rtmiapp shared sign somenegativevalue stack vm"
    },
    {
      "section": "rtmiApp",
      "id": "app.system-messages.filter:systemMessages",
      "shortName": "systemMessages",
      "type": "filter",
      "moduleName": "app.system-messages",
      "shortDescription": "A System Message filter that returns the correct verbage for system messages depending",
      "keywords": "app correct depending filter message messages mode release returns rtmiapp system system-messages systemmessages systemmessagesservice verbage vm"
    }
  ],
  "apis": {
    "rtmiApp": true,
    "bootstrapApi": true
  },
  "__file": "_FAKE_DEST_/js/docs-setup.js",
  "__options": {
    "startPage": "/rtmiApp",
    "scripts": [
      "js/angular.min.js",
      "js/angular-animate.min.js",
      "js/marked.js",
      "https://storage.googleapis.com/code.getmdl.io/1.0.6/material.min.js",
      "js/config/docs/material-docs.controller.js"
    ],
    "styles": [
      "css/config/docs/material-docs.css",
      "https://storage.googleapis.com/code.getmdl.io/1.0.6/material.green-blue.min.css",
      "https://fonts.googleapis.com/icon?family=Material+Icons",
      "https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&lang=en"
    ],
    "title": "Margin Impact Docs",
    "html5Mode": false,
    "editExample": true,
    "navTemplate": false,
    "navContent": "",
    "navTemplateData": {},
    "image": "img/fid-docs-logo.svg",
    "imageLink": "https://www.docs.fmr.com/",
    "titleLink": "/rtmiApp",
    "template": "config/docs/docs-template.html",
    "loadDefaults": {
      "angular": true,
      "angularAnimate": true,
      "marked": true
    }
  },
  "html5Mode": false,
  "editExample": true,
  "startPage": "/rtmiApp",
  "scripts": [
    "js/angular.min.js",
    "js/angular-animate.min.js",
    "js/marked.js",
    "https://storage.googleapis.com/code.getmdl.io/1.0.6/material.min.js",
    "js/config/docs/material-docs.controller.js"
  ]
};
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

angular.module("docsApp").run(["$templateCache", function($templateCache) {$templateCache.put("app/mtd-body/mtd-body.html","<div class=\"mdl-layout mdl-js-layout mdl-layout--fixed-drawer has-drawer is-upgraded\"><mtd-header sections=vm.sections></mtd-header><mtd-nav-drawer sections=vm.sections></mtd-nav-drawer><mtd-chapter current-page=vm.currentPage sections=vm.sections></mtd-chapter></div>");
$templateCache.put("app/mtd-chapter/mtd-chapter.html","<main class=\"mdl-layout__content mdl-color--grey-50\"><div class=\"mdl-grid mdl-chapter\"><div class=\"mdl-cell mdl-cell--2-col\"></div><div class=\"mdl-cell mdl-cell--8-col\"><div id=loading data-ng-show=loading>Loading...</div><div id=chapterBody src=vm.currentPage.partialUrl onload=vm.onPartialLoad() autoscroll class=\"content slide-reveal\" data-ng-hide=loading data-ng-include></div></div><div class=\"mdl-cell mdl-cell--2-col\"></div></div></main>");
$templateCache.put("app/mtd-header/mtd-header.html","<header id=waterfallHeader class=\"mdl-layout__header mdl-layout--fixed-header mdl-layout__header--waterfall\"><div class=mdl-layout_header--top-section><div class=mdl-layout__header-row><span class=mdl-layout_header--section-title>Margin Impact Docs <span data-ng-repeat=\"section in vm.sections\"><span class=mdl-layout_header--section-subtitle data-ng-if=vm.isActiveSection(section.url)>- {{ section.name }}</span></span></span><div class=mdl-layout-spacer></div><mtd-search sections=vm.sections></mtd-search></div></div></header>");
$templateCache.put("app/mtd-nav-drawer/mtd-nav-drawer.html","<div class=\"mdl-layout__drawer mdl-color--white mdl-color-text--grey-800\"><div class=mdl-layout__drawer-wrapper><header id=logo class=mdl-layout__header-row><a href=\"{{ vm.imageLink }}\"><img class=pull-left src=\"{{ vm.image }}\"></a></header><nav class=mdl-navigation><div data-ng-repeat=\"(id, section) in vm.sections | orderBy: \'name\'\"><a class=\"mdl-navigation__link section-link\" href=\"{{ section.url }}\" data-ng-class=\"{\'active--section-link\' : vm.isActiveSection(section.url)}\" data-ng-click=vm.toggleSection(section)>{{ section.name }}</a><nav class=\"mdl-navigation mdl-color--white mdl-color-text--grey-800\" data-ng-if=vm.canShowSubSections(section)><mtd-nav-modules modules=section.modules></mtd-nav-modules></nav></div></nav><div class=mdl-legal><p data-ng-if=vm.canShowLink(vm.companyName)>{{ vm.companyName}} ©</p><div class=privacy-and-terms><a href=\"{{ vm.privacyLink }}\" data-ng-if=vm.canShowLink(vm.privacyLink)>Privacy</a> <span data-ng-if=\"vm.canShowLink(vm.privacyLink) && vm.canShowLink(vm.termsLink)\">&</span> <a href={{vm.termsLink}} data-ng-if=vm.canShowLink(vm.termsLink)>Terms</a></div><p class=powered-by>Powered by <a href=https://github.com/dougiefresh49/gulp-material-docs>Gulp Material Docs</a></p></div></div></div>");
$templateCache.put("app/mtd-nav-list/mtd-nav-list.html","<div data-ng-repeat=\"page in vm.objectList track by page.url\"><a class=mdl-navigation__link href=\"{{ page.url }}\" data-ng-class=\"(vm.activeLink === page.url) ? \'active\' : \'\'\" data-ng-if=vm.isMatchedPage(page.rank)>{{ page.shortName }}</a></div>");
$templateCache.put("app/mtd-nav-modules/mtd-nav-modules.html","<div data-ng-repeat=\"(id, module) in vm.modules track by module.url\"><a class=\"mdl-navigation__link mdl-bold\" href=\"{{ module.url }}\" data-ng-click=vm.toggleModule(module) data-ng-if=vm.isMatchedPage(module.pageData.rank) data-ng-class=\"{ \'active\' : vm.activeLink === module.url }\">{{ module.name }}</a><div class=mdl-navigation_nested data-ng-if=module.showContents><mtd-nav-list object-list=module.others active-link=vm.activeLink></mtd-nav-list><mtd-nav-list object-list=module.directives active-link=vm.activeLink></mtd-nav-list><mtd-nav-list object-list=module.controllers active-link=vm.activeLink></mtd-nav-list><mtd-nav-list object-list=module.filters active-link=vm.activeLink></mtd-nav-list><div data-ng-repeat=\"service in module.services track by service.instance.url\"><a class=mdl-navigation__link href=\"{{ service.instance.url }}\" data-ng-class=\"(vm.activeLink === service.instance.url) ? \'active\' : \'\'\" data-ng-if=vm.isMatchedPage(service.instance.rank)>{{service.name}}</a> <a class=mdl-navigation__link href=\"{{ service.provider.url }}\" data-ng-show=service.provider data-ng-class=\"(vm.activeLink === service.provider.url) ? \'active\' : \'\'\" data-ng-if=vm.isMatchedPage(service.provider.rank)><i class=material-icons role=presentation>settings</i></a></div><mtd-nav-list object-list=module.types active-link=vm.activeLink></mtd-nav-list><mtd-nav-list object-list=module.globals active-link=vm.activeLink></mtd-nav-list></div></div>");
$templateCache.put("app/mtd-search/mtd-search.html","<form data-ng-submit=vm.submitSearch()><div class=\"mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right\"><label class=\"mdl-button mdl-js-button mdl-button--icon mdl-button--search\" for=waterfall-search><i class=material-icons>search</i></label><div class=mdl-textfield__expandable-holder><input id=waterfall-search class=mdl-textfield__input type=text name=search accesskey=s data-ng-change=vm.updateSearch() data-ng-model=vm.search></div></div></form>");}]);
/** --------------------------------
 * mtd-body.directive.js
 * Created by a543119 on 1/19/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    /**
     * @ngdoc directive
     * @name docsApp.directive:Body
     * @scope
     * @restrict E
     *
     * @description
     * Directive for the docsApp module.  It...
     *
     *
     */

    angular
        .module('docsApp')
        .directive('mtdBody', mtdBodyBody);

    function mtdBodyBody() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/mtd-body/mtd-body.html',
            scope: {},
            controller: BodyController,
            controllerAs: 'vm',
            bindToController: true,
            replace: true
        };

        return directive;
    }

    /**
     * @ngdoc controller
     * @name docsApp.controller:BodyController
     * @description
     * The main view controller for the Body directive
     */


    BodyController.$inject = ['$scope', '$location', 'mtdNavSectionService'];

    /* @ngInject */
    function BodyController($scope, $location, mtdNavSectionService) {
        /* jshint validthis: true */
        var vm = this;

        /* Private Attributes */
        var isActivated = false;
        var landingSectionOpen = false;

        /* Attributes */
        vm.title = 'BodyController';
        vm.sections = {};
        vm.currentPage = {};

        /* Functions */
        vm.activate = activate;

        /* Watchers */
        $scope.$watch(watchPath, updateActivePage);

        activate();

        ////////////////

        function activate() {
            vm.sections = mtdNavSectionService.createSections();
            isActivated = true;
        }

        function updateActivePage() {
            if(!isActivated) {
                return;
            }

            var sectionID = $location.path().split('/')[1];
            var pageId = $location.path().split('/')[2];

            // save active section
            mtdNavSectionService.setActiveSection(sectionID);

            // On start, open desired section / subsections
            if(!landingSectionOpen && vm.sections[sectionID]) {
                vm.sections[sectionID].showSubSections = true;
                mtdNavSectionService.openSubSection(vm.sections[sectionID], pageId);
                landingSectionOpen = true;
            }

            // update active page
            if(vm.sections[sectionID]) {
                vm.currentPage = vm.sections[sectionID].pages[pageId];
            }

        }

        function watchPath() {
            return $location.path();
        }

    }

})();

/** --------------------------------
 * mtd-chapter-dependencies.service.js
 * Created by a543119 on 1/14/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    angular
        .module('docsApp')
        .factory('mtdChapterDependencyService', mtdChapterDependencyService);

    mtdChapterDependencyService.$inject = ['mtdNaveModulesService'];

    /* @ngInject */
    function mtdChapterDependencyService(mtdNaveModulesService) {
        var service = {
            updateAnchors: updateAnchors
        };

        return service;

        ////////////////

        function updateAnchors(sections) {
            var listHtml = angular.element( document.querySelector('#chapterBody ul.dependencies')).html();

            if(listHtml === undefined) {
                return;
            }

            listHtml = getUpdatedListHtml(listHtml, sections);

            angular.element( document.querySelector('#chapterBody ul.dependencies')).html(listHtml);

        }

        function getUpdatedListHtml(listHtml, sections) {
            var anchorStartIdx = 0,
                anchorEndIdx = 0,
                anchorStartHtml = '<a',
                anchorEndHtml = '</a>';

            // Replace each anchor text that has an incorrect name
            for(var i = 0; i < listHtml.length; i++) {
                anchorStartIdx = listHtml.indexOf(anchorStartHtml, i);

                if(anchorStartIdx === -1) {
                    break;
                }

                anchorEndIdx = listHtml.indexOf(anchorEndHtml, anchorStartIdx);

                // Validate there is an ending anchor tag
                if(anchorEndIdx > -1) {
                    var anchorHtml = listHtml.substring(anchorStartIdx, anchorEndIdx + anchorEndHtml.length);
                    listHtml = listHtml.replace(anchorHtml, getUpdatedAnchor(sections, anchorHtml));

                    i = anchorEndIdx + anchorEndHtml.length;
                }
                else {
                    i = anchorStartIdx + anchorStartHtml.length;
                }
            }

            return listHtml;
        }

        function getUpdatedAnchor(sections, anchorHtml) {
            var hrefStart = anchorHtml.indexOf('href="') + 6,
                hrefEnd = anchorHtml.indexOf('"', hrefStart);

            var linkTextStart = anchorHtml.indexOf('>') + 1,
                linkTextEnd = anchorHtml.indexOf('<', linkTextStart);

            var anchorLink = anchorHtml.substring(hrefStart, hrefEnd);
            var anchorText = anchorHtml.substring(linkTextStart, linkTextEnd);

            var sectionId = NG_DOCS.html5Mode ? anchorLink.split('/')[0] : anchorLink.split('/')[1];
            var pageId = NG_DOCS.html5Mode ? anchorLink.split('/')[1] : anchorLink.split('/')[2];

            var moduleName = mtdNaveModulesService.getModuleName(sections, sectionId, pageId);

            if(moduleName !== '' && pageId !== anchorText) {
                anchorHtml = anchorHtml.substring(0, linkTextStart) + pageId + anchorHtml.substring(linkTextStart + anchorText.length);
            }

            return anchorHtml;

        }



    }


})();

/** --------------------------------
 * mtd-chapter-toc.service.js
 * Created by a543119 on 1/13/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    angular
        .module('docsApp')
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

/** --------------------------------
 * mtd-chapter.service.js
 * Created by a543119 on 1/14/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    angular
        .module('docsApp')
        .factory('mtdChapterService', mtdChapterService);

    mtdChapterService.$inject = ['mtdChapterTocService', 'mtdNaveModulesService', 'mtdChapterDependencyService'];

    /* @ngInject */
    function mtdChapterService(mtdChapterTocService, mtdNaveModulesService, mtdChapterDependencyService) {
        var service = {
            updateChapter: updateChapter
        };

        return service;

        ////////////////

        function updateChapter(currentPage, sections, scope) {
            mtdChapterTocService.addTableOfContents(scope);
            updateTitles(currentPage, sections);
            mtdChapterDependencyService.updateAnchors(sections);
        }

        /* --- Helper Functions --- */
        function updateTitles(currentPage, sections) {
            var moduleName = mtdNaveModulesService.getModuleName(sections, currentPage.section, currentPage.id);

            if(moduleName !== '' && (currentPage.type === 'service' || currentPage.type === 'object')) {
                updateTitle(currentPage.id);
                updateSubtitle();
            }

        }

        function updateTitle(pageId) {
            angular.element( document.querySelector('#chapterBody h1 code')).html(pageId);
        }

        function updateSubtitle() {
            var subTitleElement = angular.element( document.querySelector('span.hint') );
            var newSubtitleHtml = subTitleElement.html().replace('service in module', 'sub-module in module');
            subTitleElement.html(newSubtitleHtml);
        }

    }


})();

/** --------------------------------
 * mtd-header.directive.js
 * Created by a543119 on 1/13/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    /**
     * @ngdoc directive
     * @name docsApp.directive:Header
     * @scope
     * @restrict E
     *
     * @description
     * Directive for the docsApp module.  It...
     *
     * @param {object}  sections    List of Sections created by DocsController
     *
     */

    angular
        .module('docsApp')
        .directive('mtdHeader', mtdHeaderHeader);

    function mtdHeaderHeader() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/mtd-header/mtd-header.html',
            scope: {
                sections: '='
            },
            controller: HeaderController,
            controllerAs: 'vm',
            bindToController: true,
            replace: true
        };

        return directive;
    }

    /**
     * @ngdoc controller
     * @name docsApp.controller:HeaderController
     * @description
     * The main view controller for the Header directive
     */


    HeaderController.$inject = ['mtdNavSectionService'];

    /* @ngInject */
    function HeaderController(mtdNavSectionService) {
        /* jshint validthis: true */
        var vm = this;

        /* Attributes */
        vm.title = 'HeaderController';

        /* Functions */
        vm.isActiveSection = mtdNavSectionService.isActiveSection;

        ////////////////

    }

})();

/** --------------------------------
 * mtd-nav-drawer.directive.js
 * Created by a543119 on 1/13/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    /**
     * @ngdoc directive
     * @name docsApp.directive:NavDrawer
     * @scope
     * @restrict E
     *
     * @description
     * Directive for the docsApp module.  It...
     *
     * @param {object}  sections    List of Sections created by DocsController
     * @param {object}  modules    List of Modules created by DocsController
     *
     */

    angular
        .module('docsApp')
        .directive('mtdNavDrawer', mtdNavDrawerNavDrawer);

    function mtdNavDrawerNavDrawer() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/mtd-nav-drawer/mtd-nav-drawer.html',
            scope: {
                sections: '='
            },
            controller: NavDrawerController,
            controllerAs: 'vm',
            bindToController: true,
            replace: true
        };

        return directive;
    }

    /**
     * @ngdoc controller
     * @name docsApp.controller:NavDrawerController
     * @description
     * The main view controller for the NavDrawer directive
     */


    NavDrawerController.$inject = ['mtdConfigService', 'mtdNavSectionService'];

    /* @ngInject */
    function NavDrawerController(mtdConfigService, mtdNavSectionService) {
        /* jshint validthis: true */
        var vm = this;

        /* Attributes */
        vm.title = 'NavDrawerController';
        vm.companyName = '';
        vm.privacyLink = '';
        vm.termsLink = '';
        vm.imageLink = '';
        vm.image = '';

        /* Functions */
        vm.canShowLink = canShowLink;
        vm.canShowSubSections = mtdNavSectionService.canShowSubSections;
        vm.isActiveSection = mtdNavSectionService.isActiveSection;
        vm.toggleSection = toggleSection;

        activate();

        ////////////////

        function activate() {
            vm.companyName = mtdConfigService.MATERIAL_DOCS.legal.companyName;
            vm.privacyLink = mtdConfigService.MATERIAL_DOCS.legal.privacyLink;
            vm.termsLink = mtdConfigService.MATERIAL_DOCS.legal.termsLink;
            vm.imageLink = mtdConfigService.NG_DOCS.__options.imageLink;
            vm.image = mtdConfigService.NG_DOCS.__options.image;
        }

        function canShowLink(attr) {
            return angular.isDefined(attr) && attr !== '';
        }

        function toggleSection(section) {
            if(angular.isDefined(section)) {
                section.showSubSections = !section.showSubSections;
            }
        }

    }

})();

/** --------------------------------
 * mtd-nav-list.directive.js
 * Created by a543119 on 1/11/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    /**
     * @ngdoc directive
     * @name docsApp.directive:NavList
     * @scope
     * @restrict E
     *
     * @description
     * Directive for the docsApp module.  It...
     *
     * @param {object}  objectList   List of objects to display in the side nav bar
     *
     */

    angular
        .module('docsApp')
        .directive('mtdNavList', mtdNavListNavList);

    function mtdNavListNavList() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/mtd-nav-list/mtd-nav-list.html',
            scope: {
                objectList: '=',
                activeLink: '='
            },
            controller: NavListController,
            controllerAs: 'vm',
            bindToController: true,
            replace: true
        };

        return directive;
    }

    /**
     * @ngdoc controller
     * @name docsApp.controller:NavListController
     * @description
     * The main view controller for the NavList directive
     */


    NavListController.$inject = ['mtdSearchService'];

    /* @ngInject */
    function NavListController(mtdSearchService) {
        /* jshint validthis: true */
        var vm = this;

        /* Attributes */
        vm.title = 'NavListController';

        /* Functions */
        vm.isMatchedPage = mtdSearchService.isMatchedPage;

        ////////////////

    }

})();

/** --------------------------------
 * mtd-nav-section.service.js
 * Created by a543119 on 1/19/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    angular
        .module('docsApp')
        .factory('mtdNavSectionService', mtdNavSectionService);

    mtdNavSectionService.$inject = ['mtdConfigService', 'mtdNaveModulesService'];

    /* @ngInject */
    function mtdNavSectionService(mtdConfigService, mtdNaveModulesService) {
        var activeSection = '';


        var service = {
            createSections: createSections,
            isActiveSection: isActiveSection,
            canShowSubSections: canShowSubSections,
            setActiveSection: setActiveSection,
            openSubSection: openSubSection
        };

        return service;

        ////////////////

        function canShowSubSections(section) {
            return isActiveSection(section.url) && (angular.isUndefined(section.showSubSections) ||  section.showSubSections);
        }

        function createSections() {
            var sections = {};
            var cachedSections = getCachedSections();

            // Add pages and modules to each section
            angular.forEach(mtdConfigService.NG_DOCS.sections, function(sectionName, url) {
                var section = {
                    url: (mtdConfigService.NG_DOCS.html5Mode ? '' : '#/') + url,
                    name: sectionName,
                    pages: cachedSections[url] || {},
                    showSubSections: false
                };

                section.modules = mtdNaveModulesService.createModules(section.pages);

                sections[url] = section;
            });

            return sections;
        }

        function isActiveSection(sectionUrl) {
            return activeSection === sectionUrl.replace('#/', '');
        }

        function setActiveSection(_activeSection) {
            activeSection = _activeSection;
        }

        function openSubSection(section, pageId) {
            if(angular.isDefined(pageId) && angular.isDefined(section.pages[pageId])) {
                var moduleName = section.pages[pageId].moduleName;
                section.modules[moduleName].showContents = true;
            }
        }

        /* --- Helper Functions --- */
        function getCachedSections() {
            var cachedSections = {};

            // save pages for each section in cachedSections
            mtdConfigService
                .NG_DOCS
                .pages
                .forEach(function (page) {
                    var url = page.section + '/' +  page.id;
                    if (page.id == 'angular.Module') {
                        page.partialUrl = 'partials/api/angular.IModule.html';
                    }
                    else {
                        page.partialUrl = 'partials/' + url.replace(':', '.') + '.html';
                    }
                    page.url = (mtdConfigService.NG_DOCS.html5Mode ? '' : '#/') + url;

                    if (!cachedSections[page.section]) {
                        cachedSections[page.section] = {};
                    }

                    cachedSections[page.section][page.id] = page;
                });

            return cachedSections;
        }

    }

})();

/** --------------------------------
 * mtd-module-nav.directive.js
 * Created by a543119 on 1/11/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    /**
     * @ngdoc directive
     * @name docsApp.directive:NavModules
     * @scope
     * @restrict E
     *
     * @description
     * Directive for the docsApp module.  It...
     *
     * @param {object}  modules   List of modules to display
     *
     */

    angular
        .module('docsApp')
        .directive('mtdNavModules', mtdNavModules);

    mtdNavModules.$inject = [];

    /* @ngInject */
    function mtdNavModules() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/mtd-nav-modules/mtd-nav-modules.html',
            scope: {
                modules: '='
            },
            controller: NavModulesController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;
    }

    /**
     * @ngdoc controller
     * @name docsApp.controller:NavModulesController
     * @description
     * The main view controller for the NavModule directive
     */


    NavModulesController.$inject = ['$location', '$scope', 'mtdSearchService'];

    /* @ngInject */
    function NavModulesController($location, $scope, mtdSearchService) {
        /* jshint validthis: true */
        var vm = this;

        /* Attributes */
        vm.title = 'NavModulesController';
        vm.activeLink = $location.path().substr(1) || "";

        /* Functions */
        vm.toggleModule = toggleModule;
        vm.isMatchedPage = mtdSearchService.isMatchedPage;

        /* Watchers */
        $scope.$watch(watchPath, updateModules);
        $scope.$watch(mtdSearchService.isSearching , updateModules);

        ////////////////

        function toggleModule(_module) {
            if(angular.isDefined(_module)) {
                 //Toggle module content visibility var
                _module.showContents = !_module.showContents;
            }
            else {
                // Clicked link is not a module
                if($location.path().indexOf(':') !== -1) {
                    return;
                }

                // Split Path
                var pageId = $location.path().split('/')[2];

                if(angular.isDefined(pageId)) {
                    vm.modules[pageId].showContents = !vm.modules[pageId].showContents;
                }
            }
        }

        /* --- Helper Functions --- */

        function updateModules() {
            // Set current active link (saves on lookup time)
            vm.activeLink = $location.$$html5 ? $location.path().substr(1) : '#/' + $location.path().substr(1);

            // If a module was clicked, toggle open or closed (only needed with html5 mode)
            if($location.$$html5) {
                toggleModule();
            }
        }

        function watchPath() {
            return $location.path();
        }
    }

})();

/** --------------------------------
 * mtd-nav-modules.service.js
 * Created by a543119 on 1/15/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    angular
        .module('docsApp')
        .factory('mtdNaveModulesService', mtdNaveModulesService);

    mtdNaveModulesService.$inject = [];

    /* @ngInject */
    function mtdNaveModulesService() {
        var modules = {};

        var GLOBALS = /^angular\.([^\.]+)$/,
            MODULE = /^([^:]+)$/,
            MODULE_MOCK = /^angular\.mock\.([^\.]+)$/,
            MODULE_CONTROLLER = /^(.+)\.controllers?:([^\.]+)$/,
            MODULE_DIRECTIVE = /^(.+)\.directives?:([^\.]+)$/,
            MODULE_DIRECTIVE_INPUT = /^(.+)\.directives?:input\.([^\.]+)$/,
            MODULE_FILTER = /^(.+)\.filters?:([^\.]+)$/,
            MODULE_CUSTOM = /^(.+)\.([^\.]+):([^\.]+)$/,
            MODULE_SERVICE = /^(.+)\.([^\.]+?)(Provider)?$/,
            MODULE_TYPE = /^([^\.]+)\..+\.([A-Z][^\.]+)$/,
            MODULE_PROVIDER = /^.+Provider$/;

        var service = {
            createModules: createModules,
            getModuleName: getModuleName
        };

        return service;

        ////////////////

        function createModules(pages) {
            // Clear data
            modules = {};

            angular.forEach(pages, function (page, pageId) {
                matchPage(page);
            });

            return modules;
        }

        function getModuleName(sections, sectionId, pageId) {
            return (angular.isDefined(sectionId) && angular.isDefined(sections[sectionId]) && sections[sectionId].modules && sections[sectionId].modules[pageId])
                ? sections[sectionId].modules[pageId].name
                : '';
        }

        /* --- Helper Functions --- */

        function matchPage(page) {
            var match, module;

            if (page.id == 'index') {
                // Skip index page
            }
            else if (page.id == 'angular.Module') {
                fetchModule('ng', page).types.push(page);
            }
            else if (page.id.match(GLOBALS)) {
                fetchModule('ng', page).globals.push(page);
            }
            else if (match = page.id.match(MODULE)) {
                fetchModule(page.moduleName || match[1], page, MODULE);
            }
            else if (match = page.id.match(MODULE_FILTER)) {
                fetchModule(page.moduleName || match[1], page, MODULE_FILTER).filters.push(page);
            }
            else if (match = page.id.match(MODULE_CONTROLLER) && page.type === 'controller') {
                fetchModule(page.moduleName || match[1], page, MODULE_CONTROLLER).controllers.push(page);
            }
            else if (match = page.id.match(MODULE_DIRECTIVE)) {
                fetchModule(page.moduleName || match[1], page, MODULE_DIRECTIVE).directives.push(page);
            }
            else if (match = page.id.match(MODULE_DIRECTIVE_INPUT)) {
                fetchModule(page.moduleName || match[1], page, MODULE_DIRECTIVE_INPUT).directives.push(page);
            }
            else if (match = page.id.match(MODULE_CUSTOM)) {
                module = fetchModule(page.moduleName || match[1], page, MODULE_CUSTOM);

                (page.type === 'service')
                    ? createService(module, match[3], page, page.id.match(MODULE_PROVIDER))
                    : (module[page.type + 's'])
                        ? module[page.type + 's'].push(page)
                        : module.others.push(page);
            }
            else if (match = page.id.match(MODULE_TYPE) && page.type === 'type') {
                fetchModule(page.moduleName || match[1], page, MODULE_TYPE).types.push(page);
            }
            else if (match = page.id.match(MODULE_SERVICE)) {
                if (page.type === 'overview') {
                    fetchModule(page.id, page, MODULE_SERVICE);
                }
                else {
                    module = fetchModule(page.moduleName || match[1], page, MODULE_SERVICE);
                    createService(module, match[2], page, match[3]);
                }
            }
            else if (page.id.match(MODULE_MOCK)) {
                fetchModule('ngMock', page, MODULE_MOCK).globals.push(page);
            }

        }

        function fetchModule(name, page, matchingRegex) {
            // Correct the incorrect labeling of nested modules (a nested module is a module not service)
            if(page.moduleName !== page.id && matchingRegex === MODULE) {
                name = page.id;
                page.parentModule = page.moduleName;
                page.moduleName = page.id;
            }

            // If module doesn't exist, create it
            if(!modules[name]) {
                modules[name] = createModule(name, page);
            }

            return modules[name];
        }

        function createModule(name, page) {
            return {
                name: name,
                pageData: page,
                url: (NG_DOCS.html5Mode ? '' : '#/') + page.section + '/' + name,
                globals: [],
                controllers: [],
                directives: [],
                services: [],
                others: [],
                types: [],
                filters: [],
                showContents: false
            }
        }

        // Used in place of module.service() in ng docs (docs.js - line 465)
        function createService(module, serviceName, page, providerCondition) {

            // Create service
            var service = { name: serviceName };

            // Add page to the service
            var providerOrInstance = providerCondition ? 'provider' : 'instance';
            service[providerOrInstance] = page;

            module.services.push(service);

            return service;
        }

    }

})();

/** --------------------------------
 * mtd-script-loader.directive.js
 * Created by a543119 on 1/15/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    /**
     * @ngdoc directive
     * @name docsApp.directive:ScriptLoader
     * @scope
     * @restrict E
     *
     * @description
     * Directive for the docsApp module.  It...
     *
     *
     */

    angular
        .module('docsApp')
        .directive('mtdScriptLoader', mtdScriptLoaderScriptLoader);

    function mtdScriptLoaderScriptLoader() {
        var directive = {
            restrict: 'E',
            scope: {},
            controller: ScriptLoaderController,
            controllerAs: 'vm',
            bindToController: true,
            link: ScriptLoaderLink
        };

        return directive;
    }

    function ScriptLoaderLink(scope, element, attrs, scriptLoaderController) {
        scriptLoaderController.activate(element);
    }

    /**
     * @ngdoc controller
     * @name docsApp.controller:ScriptLoaderController
     * @description
     * The main view controller for the ScriptLoader directive
     */


    ScriptLoaderController.$inject = ['mtdConfigService'];

    /* @ngInject */
    function ScriptLoaderController(mtdConfigService) {
        /* jshint validthis: true */
        var vm = this;

        /* Attributes */
        vm.title = 'ScriptLoaderController';
        vm.element = {};

        /* Functions */
        vm.activate = activate;

        ////////////////

        function activate(element) {
            vm.element = element;
            loadScripts();
        }

        function loadScripts() {
            mtdConfigService.MATERIAL_DOCS.scripts.forEach(function (script) {
                // use global document since Angular's $document is weak
                var s = document.createElement('script');
                s.src = script;
                document.body.appendChild(s);
            });
        }

    }

})();

/** --------------------------------
 * mtd-search.directive.js
 * Created by a543119 on 1/13/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    /**
     * @ngdoc directive
     * @name docsApp.directive:Search
     * @scope
     * @restrict E
     *
     * @description
     * Directive for the docsApp module.  It...
     *
     * @param {object}  modules   List of modules built by DocsController
     *
     */

    angular
        .module('docsApp')
        .directive('mtdSearch', mtdSearchSearch);

    function mtdSearchSearch() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/mtd-search/mtd-search.html',
            scope: {
                sections: '='
            },
            controller: SearchController,
            controllerAs: 'vm',
            bindToController: true,
            replace: true
        };

        return directive;
    }

    /**
     * @ngdoc controller
     * @name docsApp.controller:SearchController
     * @description
     * The main view controller for the Search directive
     */


    SearchController.$inject = ['$location', 'mtdSearchService'];

    /* @ngInject */
    function SearchController($location, mtdSearchService) {
        /* jshint validthis: true */
        var vm = this;

        /* Attributes */
        vm.title = 'SearchController';
        vm.bestMatch = {page: null, rank:0};
        vm.search = '';
        vm.searchingChanged = false;

        /* Functions */
        vm.submitSearch = submitSearch;
        vm.updateSearch = updateSearch;

        ////////////////

        function updateSearch() {
            vm.bestMatch = {page: null, rank:0};
            var sectionID = $location.path().split('/')[1];

            if(angular.isUndefined(vm.sections) || angular.isUndefined(vm.sections[sectionID].modules)) {
                return;
            }

            if(vm.search === '') {
                mtdSearchService.setIsSearching(false);
                return;
            }

            angular.forEach(vm.sections[sectionID].modules, function (module, moduleId) {
                var pages = getAllPages(module);
                pages.forEach(function (page) {
                    var match = mtdSearchService.rank(page, vm.search);
                    if(match.rank > vm.bestMatch.rank) {
                        vm.bestMatch = match;
                    }

                    if(angular.isDefined(page)) {
                        page.rank = match.rank;
                    }
                });
            });

            mtdSearchService.setIsSearching(true);
        }

        function submitSearch() {
            if(vm.bestMatch && vm.bestMatch.page && vm.search !== '') {
                var url = vm.bestMatch.page.url;
                mtdSearchService.setIsSearching(true);
                $location.path( $location.$$html5 ? url : url.substring(1) );
            }

            // Clear Matched pages
            if(vm.search === '') {
                mtdSearchService.setIsSearching(false);
            }
        }

        /* --- Helper Functions --- */

        function getAllPages(module) {
            return [module.pageData]
                .concat(module.controllers)
                .concat(module.directives)
                .concat(module.filters)
                .concat(module.globals)
                .concat(module.others)
                .concat(getServicesFromModule(module))
                .concat(module.types);
        }

        function getServicesFromModule(module) {
            return module.services.map(function (service) {
                if(angular.isDefined(service.instance)) {
                    return service.instance
                }
                if(angular.isDefined(service.provider)) {
                    return service.provider
                }
            })
        }
    }

})();

/** --------------------------------
 * mtd-search.service.js
 * Created by a543119 on 1/14/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    angular
        .module('docsApp')
        .factory('mtdSearchService', mtdSearchService);

    mtdSearchService.$inject = [];

    /* @ngInject */
    function mtdSearchService() {
        var isSearching = false;

        var service = {
            rank: rank,
            isMatchedPage: isMatchedPage,
            isSearching: getIsSearching,
            setIsSearching: setIsSearching
        };

        return service;

        ////////////////

        function isMatchedPage(pageRank) {
            return (isSearching) ? pageRank > 0 : true;
        }

        function getIsSearching() {
            return isSearching;
        }

        function setIsSearching(isSearchingActive) {
            isSearching = isSearchingActive
        }

        function rank(page, terms) {
            var ranking = { page: page, rank: 0};

            if(angular.isDefined(terms) && terms !== '' && angular.isDefined(page)){

                terms
                    .toLowerCase()
                    .split(' ')
                    .forEach(function (term) {
                        if(ranking) {
                            ranking.rank += getRankingPoints(page, term);
                        }
                    });
            }

            return ranking;
        }

        function getRankingPoints(page, term) {
            var rank = 0,
                index = page.shortName.toLowerCase().indexOf(term);

            if(page.keywords.indexOf(term) !== -1) {
                rank++; // one point for each term found

                // ten points if you match title
                if(index !== -1) {
                    rank += 20 - index;
                }
            }

            return rank;
        }


    }


})();
