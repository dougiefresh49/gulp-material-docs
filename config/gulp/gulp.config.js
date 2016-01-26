

module.exports = function() {

    var config = {
        folders: {
            src: 'src/',
            dist: 'dist/',
            docs: 'docs/',
            coverage: 'coverage/',
            temp: 'src/temp/'
        },
        /* Angular Template Cache */
        templateCache: {
            file: 'template-cache.js',
            options: {
                module: 'docsApp',
                standAlone: false,
                root: 'app/'
            }
        },
        allJs: [
            'src/**/*module.js',
            'src/**/*config.js',
            'src/**/*.js',
            '!src/**/*spec.js'
        ],
        toInject : {
            dev: [
                'docs/js/docs-setup.js',
                'docs/js/angular.min.js',
                'docs/js/angular-animate.min.js',
                'docs/**/*material-docs.*',
                '!docs/**/*material-docs.min.*',
                'docs/css/docs.css',
                'docs/css/animations.css',
                'docs/css/prettify.css'
            ],
            docs: [
                'docs/js/docs-setup.js',
                'docs/js/angular.min.js',
                'docs/js/angular-animate.min.js',
                'docs/**/*material-docs.min.*',
                'docs/css/docs.css',
                'docs/css/animations.css',
                'docs/css/prettify.css'
            ],
            prod : [
                'dist/**/*.min.js',
                'dist/**/*.min.css'
            ]
        }
    };

    return config;
};