var ngDocs = require('gulp-ngdocs'),
    config = require('./config/gulp/gulp.config.js')(),
    helpers = require('./index-helpers.js');

module.exports = {
    make: makeDocs,
    sections: ngDocs.sections
};

function makeDocs(opts) {

    console.log(opts);

    if(opts) {
        console.log('inside if');
        opts.scripts = helpers.getScripts(opts.materialV).concat(opts.scripts || []);
        opts.styles = helpers.getStyles(opts.materialV, opts.materailColors).concat(opts.styles || []);
    }

    else {
        console.log('inside else');
        opts = helpers.getDefaultOptions();
    }

    opts.template = opts.template || config.folders.dist + 'index.html';

    // TODO: default material docs image
    // TODO: make function to copy over styles and js (doesnt work right now)
    console.log(opts);
    
    return ngDocs.process(opts);
}