var config = require('./config/gulp/gulp.config.js')();

/* Exports */
module.exports = {
    getScripts: getScripts,
    getStyles: getStyles,
    getLegalObj: getLegalObj,
    getDefaultOptions: getDefaultOptions

};

/* Functions */
function getScripts(nodeModuleDir) {
    return [
        nodeModuleDir + config.folders.dist + 'material-docs.min.js'
    ];
}

function getStyles(nodeModuleDir) {
    return [
        nodeModuleDir + config.folders.dist + 'material-docs.min.css'
    ];
}

function getLegalObj(existingObj) {
    return {
        companyName: (existingObj) ? existingObj.companyName || '' : '',
        privacyLink: (existingObj) ? existingObj.privacyLink || '' : '',
        termsLink: (existingObj) ? existingObj.termsLink || '' : ''
    }
}

function getDefaultOptions() {
    var nodeModuleDir = 'node_modules/gulp-material-docs/';

    return {
        template: nodeModuleDir + config.folders.dist + 'index.html',
        scripts: getScripts(),
        styles: getStyles(),
        legal: getLegalObj(),
        nodeModulesDir: nodeModuleDir,
        image: nodeModuleDir + config.folders.dist + 'material-docs.svg'
    };
}