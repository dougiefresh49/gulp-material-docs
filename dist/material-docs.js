/*
  Gulp Material Docs v0.0.0-semantically-released 
  https://github.com/dougiefresh49/gulp-material-docs 
  License: MIT 
*/ 
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

/** --------------------------------
 * mtd-body.module.js
 * Created by dougiefresh49 on 1/27/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    /**
     * @ngdoc object
     * @name docsApp.body
     * @description
     *
     * The docsApp.body module definition.
     */

    angular.module('docsApp.body', []);

})();

/** --------------------------------
 * mtd-chapter.module.js
 * Created by dougiefresh49 on 1/27/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    /**
     * @ngdoc object
     * @name docsApp.chapter
     * @description
     *
     * The docsApp.chapter module definition.
     */

    angular.module('docsApp.chapter', []);

})();

/** --------------------------------
 * mtd-header.module.js
 * Created by dougiefresh49 on 1/27/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    /**
     * @ngdoc object
     * @name docsApp.header
     * @description
     *
     * The docsApp.header module definition.
     */

    angular.module('docsApp.header', []);

})();

/** --------------------------------
 * mtd-nav.module.js
 * Created by dougiefresh49 on 1/27/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    /**
     * @ngdoc object
     * @name docsApp.nav
     * @description
     *
     * The docsApp.nav module definition.
     */

    angular.module('docsApp.nav', []);

})();

/** --------------------------------
 * mtd-head.module.js
 * Created by dougiefresh49 on 1/30/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    /**
     * @ngdoc object
     * @name docsApp.head
     * @description
     *
     * The docsApp.head module definition.
     */
    angular.module('docsApp.head', []);

})();

/** --------------------------------
 * mtd-search.module.js
 * Created by dougiefresh49 on 1/27/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    /**
     * @ngdoc object
     * @name docsApp.search
     * @description
     *
     * The docsApp.search module definition.
     */

    angular.module('docsApp.search', []);

})();

/** --------------------------------
 * app.config.js
 * Created by dougiefresh49 on 1/25/16.
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

angular.module("docsApp").run(["$templateCache", function($templateCache) {$templateCache.put("app/mtd-body/mtd-body.html","<div class=\"mdl-layout mdl-js-layout mdl-layout--fixed-drawer has-drawer is-upgraded\"><mtd-header sections=vm.sections></mtd-header><mtd-nav-drawer sections=vm.sections></mtd-nav-drawer><mtd-chapter current-page=vm.currentPage sections=vm.sections></mtd-chapter></div>");
$templateCache.put("app/mtd-chapter/mtd-chapter.html","<main class=\"mdl-layout__content mdl-color--grey-50\"><div class=\"mdl-grid mdl-chapter\"><div class=\"mdl-cell mdl-cell--2-col\"></div><div class=\"mdl-cell mdl-cell--8-col\"><div id=loading data-ng-show=loading>Loading...</div><div id=chapterBody src=vm.currentPage.partialUrl onload=vm.onPartialLoad() autoscroll class=\"content slide-reveal\" data-ng-hide=loading data-ng-include></div></div><div class=\"mdl-cell mdl-cell--2-col\"></div></div></main>");
$templateCache.put("app/mtd-header/mtd-header.html","<header id=waterfallHeader class=\"mdl-layout__header mdl-layout--fixed-header mdl-layout__header--waterfall\"><div class=mdl-layout_header--top-section><div class=mdl-layout__header-row><span class=mdl-layout_header--section-title>{{ vm.headerTitle }} <span data-ng-repeat=\"section in vm.sections\"><span class=mdl-layout_header--section-subtitle data-ng-if=vm.isActiveSection(section.url)>- {{ section.name }}</span></span></span><div class=mdl-layout-spacer></div><mtd-search sections=vm.sections></mtd-search></div></div></header>");
$templateCache.put("app/mtd-search/mtd-search.html","<form data-ng-submit=vm.submitSearch()><div class=\"mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right\"><label class=\"mdl-button mdl-js-button mdl-button--icon mdl-button--search\" for=waterfall-search><i class=material-icons>search</i></label><div class=mdl-textfield__expandable-holder><input id=waterfall-search class=mdl-textfield__input type=text name=search accesskey=s data-ng-change=vm.updateSearch() data-ng-model=vm.search></div></div></form>");
$templateCache.put("app/mtd-nav/drawer/mtd-nav-drawer.html","<div class=\"mdl-layout__drawer mdl-color--white mdl-color-text--grey-800\"><div class=mdl-layout__drawer-wrapper><header id=logo class=mdl-layout__header-row><a href=\"{{ vm.imageLink }}\"><img class=pull-left src=\"{{ vm.image }}\"></a></header><nav class=mdl-navigation><div data-ng-repeat=\"(id, section) in vm.sections | orderBy: \'name\'\"><a class=\"mdl-navigation__link section-link\" href=\"{{ section.url }}\" data-ng-class=\"{\'active--section-link\' : vm.isActiveSection(section.url)}\" data-ng-click=vm.toggleSection(section)>{{ section.name }}</a><nav class=\"mdl-navigation mdl-color--white mdl-color-text--grey-800\" data-ng-if=vm.canShowSubSections(section)><mtd-nav-modules modules=section.modules></mtd-nav-modules></nav></div></nav><div class=mdl-legal><p data-ng-if=vm.canShowLink(vm.companyName)>{{ vm.companyName}} ©</p><div class=privacy-and-terms><a href=\"{{ vm.privacyLink }}\" data-ng-if=vm.canShowLink(vm.privacyLink)>Privacy</a> <span data-ng-if=\"vm.canShowLink(vm.privacyLink) && vm.canShowLink(vm.termsLink)\">&</span> <a href={{vm.termsLink}} data-ng-if=vm.canShowLink(vm.termsLink)>Terms</a></div><p class=powered-by>Powered by <a href=https://github.com/dougiefresh49/gulp-material-docs>Gulp Material Docs</a></p></div></div></div>");
$templateCache.put("app/mtd-nav/list/mtd-nav-list.html","<div data-ng-repeat=\"page in vm.objectList track by page.url\"><a class=mdl-navigation__link href=\"{{ page.url }}\" data-ng-class=\"(vm.activeLink === page.url) ? \'active\' : \'\'\" data-ng-if=vm.isMatchedPage(page.rank)>{{ page.shortName }}</a></div>");
$templateCache.put("app/mtd-nav/modules/mtd-nav-modules.html","<div data-ng-repeat=\"(id, module) in vm.modules track by module.url\"><a class=\"mdl-navigation__link mdl-bold\" href=\"{{ module.url }}\" data-ng-click=vm.toggleModule(module) data-ng-if=vm.isMatchedPage(module.pageData.rank) data-ng-class=\"{ \'active\' : vm.activeLink === module.url }\">{{ module.name }}</a><div class=mdl-navigation_nested data-ng-if=module.showContents><mtd-nav-list object-list=module.others active-link=vm.activeLink></mtd-nav-list><mtd-nav-list object-list=module.directives active-link=vm.activeLink></mtd-nav-list><mtd-nav-list object-list=module.controllers active-link=vm.activeLink></mtd-nav-list><mtd-nav-list object-list=module.filters active-link=vm.activeLink></mtd-nav-list><div data-ng-repeat=\"service in module.services track by service.instance.url\"><a class=mdl-navigation__link href=\"{{ service.instance.url }}\" data-ng-class=\"(vm.activeLink === service.instance.url) ? \'active\' : \'\'\" data-ng-if=vm.isMatchedPage(service.instance.rank)>{{service.name}}</a> <a class=mdl-navigation__link href=\"{{ service.provider.url }}\" data-ng-show=service.provider data-ng-class=\"(vm.activeLink === service.provider.url) ? \'active\' : \'\'\" data-ng-if=vm.isMatchedPage(service.provider.rank)><i class=material-icons role=presentation>settings</i></a></div><mtd-nav-list object-list=module.types active-link=vm.activeLink></mtd-nav-list><mtd-nav-list object-list=module.globals active-link=vm.activeLink></mtd-nav-list></div></div>");}]);
/** --------------------------------
 * mtd-body.directive.js
 * Created by dougiefresh49 on 1/19/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    /**
     * @ngdoc directive
     * @name docsApp.body.directive:mtdBody
     * @scope
     * @restrict E
     *
     * @description
     * Directive for the docsApp module.  It...
     *
     *
     */

    angular
        .module('docsApp.body')
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
     * @name docsApp.body.controller:BodyController
     * @description
     * The main view controller for the Body directive
     *
     * @requires ng.$scope
     * @requires ng.$location
     * @requires docsApp.nav.service:mtdNavSectionService
     * @requires docsApp.head.service:mtdHeadService
     */


    BodyController.$inject = ['$scope', '$location', 'mtdNavSectionService', 'mtdHeadService'];

    /* @ngInject */
    function BodyController($scope, $location, mtdNavSectionService, mtdHeadService) {
        /* jshint validthis: true */
        var vm = this;

        /* Private Attributes */
        var isActivated = false;
        var landingSectionOpen = false;

        /* Attributes */
        vm.title = 'BodyController';

        /**
         * @ngdoc property
         * @name sections
         * @propertyOf docsApp.body.controller:BodyController
         * @description
         * object used to house all section objects
         */
        vm.sections = {};

        /**
         * @ngdoc property
         * @name currentPage
         * @propertyOf docsApp.body.controller:BodyController
         * @description
         * object used to keep track of the current page
         */
        vm.currentPage = {};

        /* Functions */
        vm.activate = activate;

        /* Watchers */
        /**
         * @ngdoc method
         * @name $watch
         * @methodOf docsApp.body.controller:BodyController
         * @description
         * $watcher function that watches the $location change returned in
         * {@link docsApp.body.controller:BodyController#methods_watchPath watchPath}
         * and then {@link docsApp.body.controller:BodyController#methods_updateActivePage updateActivePage}
         *
         */
        $scope.$watch(watchPath, updateActivePage);

        activate();

        ////////////////

        /**
         * @ngdoc method
         * @name activate
         * @methodOf docsApp.body.controller:BodyController
         * @description
         * The activate method that will use the {@link docsApp.head.service:mtdHeadService mtdHeadService} to append
         * head related info based on user preference and use the
         * {@link docsApp.nav.service:mtdNavSectionService mtdNavSectionService}
         * to create the sections object once on the first page load.
         *
         * After sections are created, it set a private flag to announce that isActivated = true.
         *
         */
        function activate() {
            mtdHeadService.addTitleAndIco();
            vm.sections = mtdNavSectionService.createSections();
            isActivated = true;
        }

        /**
         * @ngdoc function
         * @name updateActivePage
         * @methodOf docsApp.body.controller:BodyController
         * @description
         * On $location change, the active section is saved and the {@link docsApp.body.controller:BodyController#properties_currentPage currentPage} is updated based on the
         * new path in the url.
         *
         * Upon landing, it will pre-open the necessary left nav sections based on the url.
         *
         */
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
                landingSectionOpen = true;
            }

            mtdNavSectionService.openSubSection(vm.sections[sectionID], pageId);

            // update active page
            if(vm.sections[sectionID]) {
                vm.currentPage = vm.sections[sectionID].pages[pageId];
            }

        }

        /**
         * @ngdoc function
         * @name watchPath
         * @methodOf docsApp.body.controller:BodyController
         * @description
         * Used by the $watch function and returns the $location.path() url string.
         *
         * @returns {string} $location.path() string is returned
         */
        function watchPath() {
            return $location.path();
        }

    }

})();

/** --------------------------------
 * mtd-chapter-dependencies.service.js
 * Created by dougiefresh49 on 1/14/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    /**
     * @ngdoc service
     * @name docsApp.chapter.service:mtdChapterDependencyService
     *
     * @description
     * A service for updating the names of dependencies in each chapter
     *
     * @requires docsApp.nav.service:mtdNaveModulesService
     */

    angular
        .module('docsApp.chapter')
        .factory('mtdChapterDependencyService', mtdChapterDependencyService);

    mtdChapterDependencyService.$inject = ['mtdNaveModulesService'];

    /* @ngInject */
    function mtdChapterDependencyService(mtdNaveModulesService) {
        var service = {
            updateAnchors: updateAnchors
        };

        return service;

        ////////////////

        
        /**
         * @ngdoc method
         * @name updateAnchors
         * @methodOf docsApp.chapter.service:mtdChapterDependencyService
         * @description
         * Main coordinating function for updating the anchor tags of the dependency sections of each chapter.
         *
         * @param {object} sections     object passed from the {@link docsApp.chapter.service:mtdChapterService#methods_updateChapter updateChapter}
         */
        function updateAnchors(sections) {
            var listHtml = angular.element( document.querySelector('#chapterBody ul.dependencies')).html();

            if(listHtml === undefined) {
                return;
            }

            listHtml = getUpdatedListHtml(listHtml, sections);

            angular.element( document.querySelector('#chapterBody ul.dependencies')).html(listHtml);

        }
        
        /* --- Helper Functions --- */
        

        /**
         * @ngdoc function
         * @name getUpdatedListHtml
         * @methodOf docsApp.chapter.service:mtdChapterDependencyService
         * @description
         * Helper function that gets the updated list of dependency anchor tags with proper names
         *
         * @private
         * @param {string} listHtml     string of html from the dom
         * @param {object} sections  object passed from the {@link docsApp.chapter.service:mtdChapterDependencyService#methods_getUpdatedListHtml updateAnchors}
         * @returns {string} string of the updated dependency list html
         */
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

        /**
         * @ngdoc function
         * @name getUpdatedAnchor
         * @methodOf docsApp.chapter.service:mtdChapterDependencyService
         * @description
         * Helper function used to update individual anchor tag names in the dependency list
         *
         * @param {object} sections  object passed from the {@link docsApp.chapter.service:mtdChapterDependencyService#methods_getUpdatedListHtml getUpdatedListHtml}
         * @param {string} anchorHtml string of html ex: '<a href="/some/ur/">moduleName</a>'
         * @returns {string} updated anchorHtml with proper module.name
         */
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
 * Created by dougiefresh49 on 1/13/16.
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

        /**
         * @ngdoc method
         * @name addTableOfContents
         * @methodOf docsApp.chapter.service:mtdChapterTocService
         * @description
         * Adds a table of contents to the top of each chapter for easy navigation.
         * It uses angular's querySelector to append the $compiled table of contents created with
         * {@link docsApp.chapter.service:mtdChapterTocService#methods_createTableOfContents createTableOfContents} function.
         *
         * @param {$scope} scope     the $scope object from the {@link docsApp.chapter.controller:ChapterController ChapterController}
         */
        function addTableOfContents(scope) {
            var chapterHtml = angular.element( document.querySelector('#chapterBody')).html();
            var toc = createTableOfContents(chapterHtml);

            if(document.querySelector('#description') !== null) {
                // Note: see this SO for explanation on compiling attached html
                // http://stackoverflow.com/questions/29925950/append-a-html-include-ng-click-in-angularjs
                angular.element( document.querySelector('#description').parentNode).prepend($compile(toc)(scope));
            }
        }

        /* --- Helper Functions --- */

        /**
         * @ngdoc function
         * @name createTableOfContents
         * @methodOf docsApp.chapter.service:mtdChapterTocService
         * @description
         * Helper function responsible for creating the T.O.C html.
         *
         * Uses {@link docsApp.chapter.service:mtdChapterTocService#methods_createSections createSections} to create
         * sections and pass to {@link docsApp.chapter.service:mtdChapterTocService#methods_createTocList createTocList}
         *
         * @private
         * @param {string} chapterHtml     sting of all chapter html
         * @returns {string} newly created T.O.C html
         */
        function createTableOfContents(chapterHtml) {
            var tocBegin = '<nav class="mdl-toc"> <h1>Contents</h1> <ul>';
            var tocEnd = '</ul> </nav>';

            return tocBegin + createTocList(createSections(chapterHtml)) + tocEnd;
        }

        /**
         * @ngdoc function
         * @name createSections
         * @methodOf docsApp.chapter.service:mtdChapterTocService
         * @description
         * Helper function that finds all sections in the page (inside h2 tags) and extracts the titles
         *
         * @param {string} chapterHtml     sting of all chapter html
         * @returns {Array} list of section titles
         */
        function createSections(chapterHtml) {
            var sections = [];
            var h2StartIdx, h2EndIdx, h2Start = '<h2', h2End = '</h2>', substring;

            // find all pairs of h2 tags
            for(var i = 0; i < chapterHtml.length; i++) {
                h2StartIdx = chapterHtml.indexOf(h2Start, i);

                if(h2StartIdx > -1) {
                    h2EndIdx = chapterHtml.indexOf(h2End, h2StartIdx);

                    if(h2EndIdx > -1) {
                        i = h2EndIdx + h2End.length;

                        // Save each section text and id
                        substring = chapterHtml.substring(h2StartIdx, h2EndIdx + h2End.length);
                        sections.push({
                            text: extractText(substring, '>', 0, '</'),
                            id: extractText(substring, '"', substring.indexOf('id='), '"')
                        });
                    }
                }
            }

            return sections;
        }

        /**
         * @ngdoc method
         * @name createTocList
         * @methodOf docsApp.chapter.service:mtdChapterTocService
         * @description
         * Helper function responsible for creating a list item for each section in the chapter
         *
         * @param {Array} sections     list of section objects {name, id} in the chapter
         * @returns {string} html string of the list of sections
         */
        function createTocList(sections) {
            var listStr = "";

            sections.forEach(function (section) {
                listStr += '<li><a href="javascript:void(0)" ng-click="vm.scrollTo(\'' + section.id + '\')">' + section.text + '</a></li>';
            });

            return listStr;
        }

        /**
         * @ngdoc method
         * @name extractText
         * @methodOf docsApp.chapter.service:mtdChapterTocService
         * @description
         * Helper function used by {@link docsApp.chapter.service:mtdChapterTocService#methods_createSections createSections}
         * to get the text between given tags.
         *
         * @param {string} str  full sting to extract text from
         * @param {string} startSubStr  starting sting of desired text
         * @param {int} startAtIdx      starting index for the starting string
         * @param {string} endSubStr    ending sting of desired text
         *
         * @returns {string} desired substring from given string
         */
        function extractText(str, startSubStr, startAtIdx, endSubStr) {
            var startIdx = str.indexOf(startSubStr, startAtIdx);
            var endIdx= str.indexOf(endSubStr, startIdx + 1);
            return str.substring(startIdx + 1, endIdx);
        }
    }


})();

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

/** --------------------------------
 * mtd-chapter.service.js
 * Created by dougiefresh49 on 1/14/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    /**
     * @ngdoc service
     * @name docsApp.chapter.service:mtdChapterService
     *
     * @description
     * The main service for generating and updating each chapter when it is loaded.
     *
     * @requires docsApp.chapter.service:mtdChapterTocService
     * @requires docsApp.chapter.service:mtdChapterDependencyService
     * @requires docsApp.nav.service:mtdNaveModulesService
     */

    angular
        .module('docsApp.chapter')
        .factory('mtdChapterService', mtdChapterService);

    mtdChapterService.$inject = ['mtdChapterTocService', 'mtdNaveModulesService', 'mtdChapterDependencyService'];

    /* @ngInject */
    function mtdChapterService(mtdChapterTocService, mtdNaveModulesService, mtdChapterDependencyService) {
        var service = {
            updateChapter: updateChapter
        };

        return service;

        ////////////////

        /**
         * @ngdoc method
         * @name docsApp.chapter.service:mtdChapterService#updateChapter
         * @methodOf docsApp.chapter.service:mtdChapterService
         * @description
         * Main function for coordinating the updates for the chapter.
         * It uses the {@link docsApp.chapter.service:mtdChapterTocService mtdChapterTocService}
         * to create the chapter Table of Contents, the
         * {@link docsApp.chapter.service:mtdChapterDependencyService mtdChapterDependencyService} to update the links
         * of the dependency sections and {@link / updateTitles}.
         *
         *
         * @param {object} currentPage object that
         * @param {object} sections object created in the {@link docsApp.body.controller:BodyController BodyController}
         * @param {$scope} scope variable passed from
         */
        function updateChapter(currentPage, sections, scope) {
            mtdChapterTocService.addTableOfContents(scope);
            updateTitles(currentPage, sections);
            mtdChapterDependencyService.updateAnchors(sections);
        }

        /* --- Helper Functions --- */
        /**
         * @ngdoc function
         * @name updateTitles
         * @methodOf docsApp.chapter.service:mtdChapterService
         * @description
         * Helper function that is responsible for coordinating chapter title and subtitle updates.
         *
         * @private
         * @param {object} currentPage     the current page object to track the active page
         * @param {object} sections     object passed in from {@link docsApp.chapter.service:mtdChapterService#updateChapter updateChapter}
         */
        function updateTitles(currentPage, sections) {
            var moduleName = mtdNaveModulesService.getModuleName(sections, currentPage.section, currentPage.id);

            if(moduleName !== '' && (currentPage.type === 'service' || currentPage.type === 'object')) {
                updateTitle(currentPage.id);
                updateSubtitle();
            }

        }

        /**
         * @ngdoc function
         * @name updateTitle
         * @methodOf docsApp.chapter.service:mtdChapterService
         * @description
         * Helper function that will replace the default chapter title (the currentPage's shortName) with the
         * currentPage's id using angular's querySelector.
         *
         * @private
         * @param {string} pageId     the id of the current page object
         */
        function updateTitle(pageId) {
            angular.element( document.querySelector('#chapterBody h1 code')).html(pageId);
        }

        /**
         * @ngdoc function
         * @name updateSubtitle
         * @methodOf docsApp.chapter.service:mtdChapterService
         * @description
         * Helper function that replaces the phrase 'service in module' with 'sub-module in module' in the
         * event there is a nested module.
         *
         * @private
         */
        function updateSubtitle() {
            var subTitleElement = angular.element( document.querySelector('span.hint') );
            var newSubtitleHtml = subTitleElement.html().replace('service in module', 'sub-module in module');
            subTitleElement.html(newSubtitleHtml);
        }

    }

})();

/** --------------------------------
 * mtd-header.directive.js
 * Created by dougiefresh49 on 1/13/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    /**
     * @ngdoc directive
     * @name docsApp.header.directive:mtdHeader
     * @scope
     * @restrict E
     *
     * @description
     * Directive for the docsApp module.  It will display the main site name along with the name of the active section.
     * On scroll, the header will shrink.
     *
     * @param {object}  sections    List of Sections created by {@link docsApp.nav.service:mtdNavSectionService mtdNavSectionService}
     *
     */

    angular
        .module('docsApp.header')
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
     * @name docsApp.header.controller:HeaderController
     * @description
     * The main view controller for the Header directive
     *
     * @requires docsApp.nav.service:mtdNavSectionService
     *
     */

    HeaderController.$inject = ['mtdNavSectionService'];

    /* @ngInject */
    function HeaderController(mtdNavSectionService) {
        /* jshint validthis: true */
        var vm = this;

        /* Attributes */
        vm.title = 'HeaderController';
        
        /**
         * @ngdoc property
         * @name headerTitle
         * @propertyOf docsApp.header.controller:HeaderController
         * @description
         * Header title read from the NG_DOCS options properties
         */
        vm.headerTitle = NG_DOCS.__options.title || 'Material Docs';

        /* Functions */
        /**
         * @ngdoc method
         * @name isActiveSection
         * @methodOf docsApp.header.controller:HeaderController
         * @description
         * Pointer to {@link docsApp.nav.service:mtdNavSectionService#methods_isActiveSection}
         *
         * @param {string} sectionUrl     the section url string
         * @returns {bool} returns if the section url is currently active
         */
        vm.isActiveSection = mtdNavSectionService.isActiveSection;

        ////////////////

    }

})();

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

/** --------------------------------
 * mtd-search.directive.js
 * Created by dougiefresh49 on 1/13/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    /**
     * @ngdoc directive
     * @name docsApp.search.directive:mtdSearch
     * @scope
     * @restrict E
     *
     * @description
     * Directive for the docsApp.search module.  It is responsible for the search form and setting the status of
     * the user's search activity
     *
     * @param {object}  sections   List of Sections created by {@link docsApp.nav.service:mtdNavSectionService mtdNavSectionService}
     *
     */

    angular
        .module('docsApp.search')
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
     * @name docsApp.search.controller:SearchController
     * @description
     * The main view controller for the Search directive
     *
     * @requires ng.$location
     * @requires docsApp.search.service:mtdSearchService
     */

    SearchController.$inject = ['$location', 'mtdSearchService'];

    /* @ngInject */
    function SearchController($location, mtdSearchService) {
        /* jshint validthis: true */
        var vm = this;

        /* Attributes */
        vm.title = 'SearchController';

        /**
         * @ngdoc property
         * @name bestMatch
         * @propertyOf docsApp.search.controller:SearchController
         * @type {object}
         * @description
         * object containing the page with the best match with the search terms
         */
        vm.bestMatch = {page: null, rank:0};

        /**
         * @ngdoc property
         * @name search
         * @propertyOf docsApp.search.controller:SearchController
         * @type {string}
         * @description
         * string that stores the search terms
         */
        vm.search = '';

        /**
         * @ngdoc property
         * @name searchingChanged
         * @propertyOf docsApp.search.controller:SearchController
         * @type {bool}
         * @description
         * flag to notify when user is searching
         */
        vm.searchingChanged = false;

        /* Functions */
        vm.submitSearch = submitSearch;
        vm.updateSearch = updateSearch;

        ////////////////

        /**
         * @ngdoc method
         * @name updateSearch
         * @methodOf docsApp.search.controller:SearchController
         * @description
         * Will be called every time text is updated in the search box.
         * It updates the {@link docsApp.search.controller:SearchController#properties_bestMatch bestMatch}, applies a rank to each page in the section,
         * and sets the searching status with
         * {@link docsApp.search.service:mtdSearchService#methods_setIsSearching setIsSearching}
         *
         */
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

            // Apply rank to each page in the given section
            angular.forEach(vm.sections[sectionID].pages, function (page, pageId) {
                var match = mtdSearchService.rank(page, vm.search);
                if(match.rank > vm.bestMatch.rank) {
                    vm.bestMatch = match;
                }

                if(angular.isDefined(page)) {
                    page.rank = match.rank;

                    // Update containing module's rank
                    if(vm.sections[sectionID].pages[page.moduleName].rank === 0 && page.rank > 0) {
                        vm.sections[sectionID].pages[page.moduleName].rank = 1;
                    }

                }
            });

            mtdSearchService.setIsSearching(true);
        }

        /**
         * @ngdoc method
         * @name submitSearch
         * @methodOf docsApp.search.controller:SearchController
         * @description
         * On submission of the search form, the page with the best match is navigated to.
         *
         */
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

    }

})();

/** --------------------------------
 * mtd-search.service.js
 * Created by dougiefresh49 on 1/14/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    /**
     * @ngdoc service
     * @name docsApp.search.service:mtdSearchService
     *
     * @description
     * The main service for searching. It will will apply ranks to each page and keep track of
     * the user's searching status.
     *
     */

    angular
        .module('docsApp.search')
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

        /**
         * @ngdoc method
         * @name isMatchedPage
         * @methodOf docsApp.search.service:mtdSearchService
         * @description
         * Checks to see if the provided page rank is grater than 0 and the user is searching
         *
         * @param {int} pageRank     rank of a page
         * @returns {bool} true if is searching and pageRank > 0
         */
        function isMatchedPage(pageRank) {
            return (isSearching) ? pageRank > 0 : true;
        }

        /**
         * @ngdoc method
         * @name getIsSearching
         * @methodOf docsApp.search.service:mtdSearchService
         * @description
         * Getter for the private isSearching property
         *
         * @returns {bool} isSearching private property
         */
        function getIsSearching() {
            return isSearching;
        }

        /**
         * @ngdoc method
         * @name setIsSearching
         * @methodOf docsApp.search.service:mtdSearchService
         * @description
         * Setter for the private isSearching property
         *
         * @param {bool} isSearchingActive     boolean to set the private isSearching property to
         */
        function setIsSearching(isSearchingActive) {
            isSearching = isSearchingActive
        }

        /**
         * @ngdoc method
         * @name rank
         * @methodOf docsApp.search.service:mtdSearchService
         * @description
         * Responsible for applying a rank to each page.
         * It uses {@link docsApp.search.service:mtdSearchService#methods_getRankingPoints getRankingPoints} to collect
         * the total ranking points
         *
         * @param {object} page     page object
         * @param {string} terms    string of search terms to rank the page on, taken from search field
         */
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

        /* --- Helper Functions --- */

        /**
         * @ngdoc function
         * @name getRankingPoints
         * @methodOf docsApp.search.service:mtdSearchService
         * @description
         * Helper function to get the ranking points when comparing the search term with the a specific page
         *
         * @param {object} page     page object
         * @param {string} term    single term from the set of terms input in search field
         * @returns {int} the calculated rank
         */
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

/** --------------------------------
 * mtd-nav-drawer.directive.js
 * Created by dougiefresh49 on 1/13/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    /**
     * @ngdoc directive
     * @name docsApp.nav.directive:mtdNavDrawer
     * @scope
     * @restrict E
     *
     * @description
     * Directive for the docsApp.nav module.  It is the main panel the user will see on the left.
     * If the screen is too small, it will be hidden and can be accessed with the menu icon
     *
     * @param {object}  sections    List of Sections created by {@link docsApp.nav.service:mtdNavSectionService mtdNavSectionService}
     *
     */

    angular
        .module('docsApp.nav')
        .directive('mtdNavDrawer', mtdNavDrawerNavDrawer);

    function mtdNavDrawerNavDrawer() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/mtd-nav/drawer/mtd-nav-drawer.html',
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
     * @name docsApp.nav.controller:NavDrawerController
     * @description
     * The main view controller for the {@link docsApp.nav.directive:mtdNavDrawer mtdNavDrawer} directive
     *
     * @requires docsApp.nav.service:mtdNavSectionService
     */


    NavDrawerController.$inject = ['mtdNavSectionService'];

    /* @ngInject */
    function NavDrawerController(mtdNavSectionService) {
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

        /**
         * @ngdoc method
         * @name activate
         * @methodOf docsApp.nav.controller:NavDrawerController
         * @description
         * Activation function that sets properties need in the dom from the NG_DOCS.__options object
         *
         */
        function activate() {
            vm.companyName = NG_DOCS.__options.legal.companyName;
            vm.privacyLink = NG_DOCS.__options.legal.privacyLink;
            vm.termsLink = NG_DOCS.__options.legal.termsLink;
            vm.imageLink = NG_DOCS.__options.imageLink;
            vm.image = NG_DOCS.__options.image;
        }

        /**
         * @ngdoc method
         * @name canShowLink
         * @methodOf docsApp.nav.controller:NavDrawerController
         * @description
         * Determines if a link can be displayed
         *
         * @param {string} attr     string attribute of vm
         * @returns {bool} returns if the link can be shown or not
         */
        function canShowLink(attr) {
            return angular.isDefined(attr) && attr !== '';
        }

        /**
         * @ngdoc method
         * @name toggleSection
         * @methodOf docsApp.nav.controller:NavDrawerController
         * @description
         * Toggles a section's subSections once clicked
         *
         * @param {object} section     single section object inside sections property
         */
        function toggleSection(section) {
            if(angular.isDefined(section)) {
                section.showSubSections = !section.showSubSections;
            }
        }

    }

})();

/** --------------------------------
 * mtd-nav-list.directive.js
 * Created by dougiefresh49 on 1/11/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    /**
     * @ngdoc directive
     * @name docsApp.nav.directive:mtdNavList
     * @scope
     * @restrict E
     *
     * @description
     * Directive for the docsApp module.  It...
     *
     * @param {object}  objectList   List of page objects to display in the {@link docsApp.nav.directive:mtdNavDrawer NavDrawer}
     * @param {string}  activeLink   The current active link as determined bt the {@link docsApp.nav.directive:mtdNavModules mtdNavModules} directive
     *
     */

    angular
        .module('docsApp.nav')
        .directive('mtdNavList', mtdNavListNavList);

    function mtdNavListNavList() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/mtd-nav/list/mtd-nav-list.html',
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
     * @name docsApp.nav.controller:NavListController
     * @description
     * The main view controller for the {@link docsApp.nav.directive:mtdNavList mtdNavList} directive
     *
     * @requires docsApp.search.service:mtdSearchService
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
 * mtd-module-nav.directive.js
 * Created by dougiefresh49 on 1/11/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    /**
     * @ngdoc directive
     * @name docsApp.nav.directive:mtdNavModules
     * @scope
     * @restrict E
     *
     * @description
     * Directive responsible for displaying and toggling each module and its contents in the {@link docsApp.nav.directive:mtdNavDrawer NavDrawer}
     *
     * @param {object}  modules   List of modules to display, created by the {@link docsApp.nav.service:mtdNaveModulesService mtdNavModulesService}
     *
     */

    angular
        .module('docsApp.nav')
        .directive('mtdNavModules', mtdNavModules);

    mtdNavModules.$inject = [];

    /* @ngInject */
    function mtdNavModules() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/mtd-nav/modules/mtd-nav-modules.html',
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
     * @name docsApp.nav.controller:NavModulesController
     * @description
     * The main view controller for the {@link docsApp.nav.directive:mtdNavModules mtdNavModules} directive
     *
     * @requires $location
     * @requires $scope
     * @requires docsApp.search.service:mtdSearchService
     */


    NavModulesController.$inject = ['$location', '$scope', 'mtdSearchService'];

    /* @ngInject */
    function NavModulesController($location, $scope, mtdSearchService) {
        /* jshint validthis: true */
        var vm = this;

        /* Attributes */
        vm.title = 'NavModulesController';

        /**
         * @ngdoc property
         * @name activeLink
         * @propertyOf docsApp.nav.controller:NavModulesController
         * @description
         * String to keep track of the active link. Saves on performance by allowing for direct lookup
         */
        vm.activeLink = $location.path().substr(1) || "";

        /* Functions */
        vm.toggleModule = toggleModule;
        vm.isMatchedPage = mtdSearchService.isMatchedPage;

        /* Watchers */
        /**
         * @ngdoc method
         * @name $watch
         * @methodOf docsApp.nav.controller:NavModulesController
         * @description
         * $watcher function that watches the $location change returned in
         * {@link ddocsApp.nav.controller:NavModulesController#methods_watchPath watchPath}
         * and then {@link docsApp.nav.controller:NavModulesController#methods_updateModules updateModules}
         *
         */
        $scope.$watch(watchPath, updateModules);

        /**
         * @ngdoc method
         * @name $watchSearch
         * @methodOf docsApp.nav.controller:NavModulesController
         * @description
         * $watcher function that watches the isSearching parameter
         * and then {@link docsApp.nav.controller:NavModulesController#methods_updateModules updateModules}
         *
         */
        $scope.$watch(mtdSearchService.isSearching , updateModules);

        ////////////////

        /**
         * @ngdoc method
         * @name toggleModule
         * @methodOf docsApp.nav.controller:NavModulesController
         * @description
         * Toggles a module's content in the side nav if it is defined
         *
         * @param {object} [_module]     single module object from list of modules parameter in the {@link docsApp.nav.directive:mtdNavModules mtdNavModules directive}
         */
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

        /**
         * @ngdoc function
         * @name updateModules
         * @methodOf docsApp.nav.controller:NavModulesController
         * @description
         * Will set the {@link docsApp.nav.controller:NavModulesController#properties_activeLink activeLink}
         * based on the location and toggle the Module's content via
         * {@link docsApp.nav.controller:NavModulesController#methods_updateModules updateModules}
         *
         */
        function updateModules() {
            // Set current active link (saves on lookup time)
            vm.activeLink = $location.$$html5 ? $location.path().substr(1) : '#/' + $location.path().substr(1);

            // If a module was clicked, toggle open or closed (only needed with html5 mode)
            if($location.$$html5) {
                toggleModule();
            }
        }

        /**
         * @ngdoc function
         * @name watchPath
         * @methodOf docsApp.nav.controller:NavModulesController
         * @description
         * Used by the $watch function and returns the $location.path() url string.
         *
         * @returns {string} $location.path() string is returned
         */
        function watchPath() {
            return $location.path();
        }
    }

})();

/** --------------------------------
 * mtd-nav-modules.service.js
 * Created by dougiefresh49 on 1/15/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    /**
     * @ngdoc service
     * @name docsApp.nav.service:mtdNaveModulesService
     *
     * @description
     * The main service for generating and fetching the modules visible in the
     * {@link docsApp.nav.directive:mtdNavDrawer NavDrawer}
     *
     */

    angular
        .module('docsApp.nav')
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
 * mtd-nav-section.service.js
 * Created by dougiefresh49 on 1/19/16.
 * ---------------------------------
 */
(function () {
    'use strict';

    /**
     * @ngdoc service
     * @name docsApp.nav.service:mtdNavSectionService
     *
     * @description
     * The mtdNavSectionService is responsible for creating, opening, and keeping track of the active sections.
     *
     * @requires docsApp.nav.service:mtdNaveModulesService
     */
    angular
        .module('docsApp.nav')
        .factory('mtdNavSectionService', mtdNavSectionService);

    mtdNavSectionService.$inject = ['mtdNaveModulesService'];

    /* @ngInject */
    function mtdNavSectionService(mtdNaveModulesService) {
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

        /**
         * @ngdoc method
         * @name canShowSubSections
         * @methodOf docsApp.nav.service:mtdNavSectionService
         * @description
         * checks if a section's subSections can be shown
         *
         * @param {object} section     section object
         * @returns {bool} returns true or false
         */
        function canShowSubSections(section) {
            return isActiveSection(section.url) && (angular.isUndefined(section.showSubSections) ||  section.showSubSections);
        }

        /**
         * @ngdoc method
         * @name createSections
         * @methodOf docsApp.nav.service:mtdNavSectionService
         * @description
         * Creates an object of section objects.  This approach allows for direct lookup and no loops to find desired
         * sections.
         *
         * @returns {object} object of section objects
         */
        function createSections() {
            var sections = {};
            var cachedSections = getCachedSections();

            // Add pages and modules to each section
            angular.forEach(NG_DOCS.sections, function(sectionName, url) {
                var section = {
                    url: (NG_DOCS.html5Mode ? '' : '#/') + url,
                    name: sectionName,
                    pages: cachedSections[url] || {},
                    showSubSections: false
                };

                section.modules = mtdNaveModulesService.createModules(section.pages);

                sections[url] = section;
            });

            return sections;
        }

        /**
         * @ngdoc method
         * @name isActiveSection
         * @methodOf docsApp.nav.service:mtdNavSectionService
         * @description
         * Checks if a given sectionUrl is currently active or not
         *
         * @param {string} sectionUrl     the url of a section
         * @returns {bool} true or false
         */
        function isActiveSection(sectionUrl) {
            return activeSection === sectionUrl.replace('#/', '');
        }

        /**
         * @ngdoc method
         * @name setActiveSection
         * @methodOf docsApp.nav.service:mtdNavSectionService
         * @description
         * Set the active section private property
         *
         * @param {string} _activeSection     the new active section url string
         */
        function setActiveSection(_activeSection) {
            activeSection = _activeSection;
        }

        /**
         * @ngdoc method
         * @name openSubSection
         * @methodOf docsApp.nav.service:mtdNavSectionService
         * @description
         * Open the subSection of a given section if that section has a page with the supplied pageId
         *
         * @param {object} section    section object
         * @param {string} pageId     string id of the current page
         */
        function openSubSection(section, pageId) {
            if(angular.isDefined(pageId) && angular.isDefined(section.pages[pageId])) {
                var moduleName = section.pages[pageId].moduleName;
                section.modules[moduleName].showContents = true;
            }
        }

        /* --- Helper Functions --- */
        
        /**
         * @ngdoc function
         * @name getCachedSections
         * @methodOf docsApp.nav.service:mtdNavSectionService
         * @description
         * Helper function used by {@link docsApp.nav.service:mtdNavSectionService#methods_createSections createSections}
         * to save the pages for each section
         *
         * @returns {object}    object of sections with object of pages attached to each section
         */
        function getCachedSections() {
            var cachedSections = {};

            // save pages for each section in cachedSections
            NG_DOCS
                .pages
                .forEach(function (page) {
                    var url = page.section + '/' +  page.id;
                    if (page.id == 'angular.Module') {
                        page.partialUrl = 'partials/api/angular.IModule.html';
                    }
                    else {
                        page.partialUrl = 'partials/' + url.replace(':', '.') + '.html';
                    }
                    page.url = (NG_DOCS.html5Mode ? '' : '#/') + url;

                    if (!cachedSections[page.section]) {
                        cachedSections[page.section] = {};
                    }

                    cachedSections[page.section][page.id] = page;
                });

            return cachedSections;
        }

    }

})();
