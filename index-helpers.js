var config = require('./config/gulp/gulp.config.js')();

/* Exports */
module.exports = {
    materialOpts: materialOpts(),
    getSrc: getSrc,
    getScripts: getScripts,
    getStyles: getStyles,
    getDefaultOptions: getDefaultOptions

};

/* Attributes */
function materialCssOpts() {
    return {
        src: 'https://storage.googleapis.com/code.getmdl.io/###version###/material.###colors###.min.css',
        defaultVersion: '1.0.6',
        defaultColors: 'green-blue'
    };
}

function materialOpts() {
    return {
        src: 'https://storage.googleapis.com/code.getmdl.io/###version###/material.min.js',
        defaultVersion: '1.0.6'
    };
}

/* Functions */
function getSrc(srcV, srcOpts, cssColors) {
    srcV = (srcV && srcV !== '') ? srcV.toString() : srcOpts.defaultVersion;
    cssColors = (cssColors && cssColors !== '') ? cssColors.toString() : srcOpts.defaultColors;
    return srcOpts.src.replace('###version###', srcV).replace('###colors###', cssColors);
}


function getScripts( materialV) {
    return [
        getSrc(materialV, materialOpts()),
        config.folders.dist + 'material-docs.min.js'
    ];
}

function getStyles(styleV, styleColors) {
    return [
        getSrc(styleV, materialCssOpts(), styleColors),
        config.folders.dist + 'material-design.min.css'
    ];
}

function getDefaultOptions() {
    return {
        template: config.folders.dist + 'index.html',
        scripts: getScripts(),
        styles: getStyles(),
        legal: {
            companyName: '',
            privacyLink: '',
            termsLink: ''
        }
    };
}