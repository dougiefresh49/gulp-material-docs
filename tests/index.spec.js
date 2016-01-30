var expect = require('chai').expect;
var materialDocs = require('../index.js');
var helpers = require('../index-helpers.js');

describe('Gulp Material Docs', function () {

    describe('Helpers', function () {

        describe('Get Default Options', function () {

            it('should have default template from dist', function () {
                var defaults = helpers.getDefaultOptions();
                expect(defaults.template).to.be.eql('dist/index.html');
            });

            it('should have default scrips', function () {
                var defaults = helpers.getDefaultOptions();
                expect(defaults.scripts.length).to.be.eql(1);
            });

            it('should have default scrips', function () {
                var defaults = helpers.getDefaultOptions();
                expect(defaults.styles.length).to.be.eql(1);
            });

            it('should have default legal info', function () {
                var defaults = helpers.getDefaultOptions();
                expect(defaults.legal.companyName).to.be.eql('');
                expect(defaults.legal.privacyLink).to.be.eql('');
                expect(defaults.legal.termsLink).to.be.eql('');
            });
        });

        describe('Get Legal Object', function () {

            it('should get legal object if no data supplied', function () {
                expect(helpers.getLegalObj().companyName).to.be.eql('');
                expect(helpers.getLegalObj().privacyLink).to.be.eql('');
                expect(helpers.getLegalObj().termsLink).to.be.eql('');
            });

            it('should get legal object if data supplied', function () {
                var legalObj = {companyName: 'company'};
                expect(helpers.getLegalObj(legalObj).companyName).to.be.eql('company');
                expect(helpers.getLegalObj(legalObj).privacyLink).to.be.eql('');
                expect(helpers.getLegalObj(legalObj).termsLink).to.be.eql('');
            });

        });

    });

    describe('Make Docs', function () {

        it('should accept make docs with default options', function () {
            var fileStream = materialDocs.make();
            expect(fileStream).to.be.a('object');
        });

        it('should accept make docs with basic options', function () {
            var options = {
                html5Mode: false,
                title: "Gulp Material Docs",
                startPage: '/materialDocs',
                imageLink: "https://github.com/dougiefresh49/gulp-material-docs",
                titleLink: "/materialDocs"
            };

            var fileStream = materialDocs.make(options);
            expect(fileStream).to.be.a('object');
        });

        it('should accept make docs with more options', function () {
            var options = {
                html5Mode: false,
                title: "Gulp Material Docs",
                startPage: '/materialDocs',
                image: 'dist/material-docs.svg',
                template: 'dist/index.html',
                imageLink: "https://github.com/dougiefresh49/gulp-material-docs",
                titleLink: "/materialDocs"
            };

            var fileStream = materialDocs.make(options);
            expect(fileStream).to.be.a('object');
        });

    });

    describe('Get Sources to Inject', function () {

        it('should get 7 default src scripts', function () {
            expect(materialDocs.srcToInject().length).to.be.eql(7);
            expect(materialDocs.srcToInject()[0]).to.be.eql('docs/js/docs-setup.js');
        });

        it('should get src scripts with given folder', function () {
            var src = materialDocs.srcToInject('my-docs', {});
            expect(src.length).to.be.eql(7);
            expect(src[0]).to.be.eql('my-docs/js/docs-setup.js');

        });

        it('should get src scripts with options', function () {
            var options = {
                angularPath: 'some/path/to/angular.min.js',
                ngAnimatePath: 'some/path/to/angular-animate.min.js'
            };
            var src = materialDocs.srcToInject('my-docs', options);
            expect(src.length).to.be.eql(7);
            expect(src[0]).to.be.eql('my-docs/js/docs-setup.js');
            expect(src[1]).to.be.eql('my-docs/js/some/path/to/angular.min.js');
            expect(src[2]).to.be.eql('my-docs/js/some/path/to/angular-animate.min.js');

        });

    });

});