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
        opts.scripts = helpers.getScripts(opts.materialV).concat(opts.scripts || []);
        opts.styles = helpers.getStyles(opts.materialV, opts.materailColors).concat(opts.styles || []);
        opts.legal = helpers.getLegalObj(opts.legal);
    }

    else {
        opts = helpers.getDefaultOptions();
    }
    opts.image = opts.image || config.folders.dist + 'material-docs.svg';
    opts.template = opts.template || config.folders.dist + 'index.html';

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