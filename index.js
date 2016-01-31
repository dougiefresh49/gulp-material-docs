var ngDocs = require('gulp-ngdocs'),
    config = require('./config/gulp/gulp.config.js')(),
    helpers = require('./index-helpers.js'),
    extend = require('extend');

module.exports = {
    make: makeDocs,
    sections: ngDocs.sections,
    srcToInject: getSrcToInject
};

function makeDocs(opts) {

    if(opts) {
        opts.nodeModulesDir = opts.nodeModulesDir || 'node_modules/gulp-material-docs/';
        opts.scripts = helpers.getScripts(opts.nodeModulesDir).concat(opts.scripts || []);
        opts.styles = helpers.getStyles(opts.nodeModulesDir).concat(opts.styles || []);
        opts.legal = helpers.getLegalObj(opts.legal);
        opts.template = opts.template || opts.nodeModulesDir + config.folders.dist + 'index.html';
        opts.image = opts.image || opts.nodeModulesDir + config.folders.dist + 'material-docs.svg';
    }

    else {
        opts = helpers.getDefaultOptions();
    }

    return ngDocs.process(opts);
}

function getSrcToInject(docsFolderName, opts) {
    var options = extend({
        angularPath: undefined,
        ngAnimatePath: undefined
    }, opts);

    docsFolderName = (docsFolderName) ? docsFolderName.toString() : 'docs';

    return [
        docsFolderName + '/js/docs-setup.js',
        docsFolderName + '/js/' + (options.angularPath || 'angular.min.js'),
        docsFolderName + '/js/' + (options.ngAnimatePath || 'angular-animate.min.js'),
        docsFolderName + '/**/*material-docs.min.*',
        docsFolderName + '/css/docs.css',
        docsFolderName + '/css/animations.css',
        docsFolderName + '/css/prettify.css'
    ];
}