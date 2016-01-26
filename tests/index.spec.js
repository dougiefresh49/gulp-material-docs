var expect = require('chai').expect;
var materialDocs = require('../index.js');
var helpers = require('../index-helpers.js');

describe('Gulp Material Docs', function () {

    describe('Helpers', function () {

        describe('Update Source Link Options', function () {

            it('replace default version with specified version', function () {
                expect(helpers.getSrc('1.0.5', helpers.materialOpts)).to.be.eql('https://storage.googleapis.com/code.getmdl.io/1.0.5/material.min.js');
            });

            it('should provide default angular version of 1.4.5', function () {
                expect(helpers.getSrc(undefined, helpers.materialOpts)).to.be.eql('https://storage.googleapis.com/code.getmdl.io/1.0.6/material.min.js');
            });
            
            it('should use default version if empty string is passes in', function () {
                expect(helpers.getSrc('', helpers.materialOpts)).to.be.eql('https://storage.googleapis.com/code.getmdl.io/1.0.6/material.min.js');
            });

        });

        describe('Get Default Options', function () {

            it('should have default template from dist', function () {
                var defaults = helpers.getDefaultOptions();
                expect(defaults.template).to.be.eql('dist/index.html');
            });

            it('should have default scrips', function () {
                var defaults = helpers.getDefaultOptions();
                expect(defaults.scripts.length).to.be.eql(2);
            });

            it('should have default scrips', function () {
                var defaults = helpers.getDefaultOptions();
                expect(defaults.styles.length).to.be.eql(2);
            });

            it('should have default legal info', function () {
                var defaults = helpers.getDefaultOptions();
                expect(defaults.legal.companyName).to.be.eql('');
                expect(defaults.legal.privacyLink).to.be.eql('');
                expect(defaults.legal.termsLink).to.be.eql('');
            });
        });

        describe('Get Scripts', function () {

            it('should get scripts when versions are supplied', function () {
                var scripts = helpers.getScripts('1.0.5');
                expect(scripts.length).to.be.eql(2);
                expect(scripts[0]).to.be.eql('https://storage.googleapis.com/code.getmdl.io/1.0.5/material.min.js');
            });

            it('should get scripts when versions are NOT supplied', function () {
                var scripts = helpers.getScripts();
                expect(scripts.length).to.be.eql(2);
                expect(scripts[0]).to.be.eql('https://storage.googleapis.com/code.getmdl.io/1.0.6/material.min.js');
            });
        });

    });

    describe('Make Docs', function () {

    });

});