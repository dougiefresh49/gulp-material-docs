var expect = require('chai').expect;

describe('Hello World', function () {
    it('should say hello world', function() {
        expect('Hello World').to.be.eql('Hello World');
    });
});