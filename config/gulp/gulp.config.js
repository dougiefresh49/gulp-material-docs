

module.exports = function() {

    var config = {
        folders: {
            src: 'src/',
            dist: 'dist/',
            docs: 'docs/',
            coverage: 'coverage/',
            temp: 'src/temp/',
            usrDocs: 'usr-docs'
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
                'dist/**/*.js',
                '!dist/**/*.min.js',
                'dist/**/*.css',
                '!dist/**/*.min.css'
            ],
            prod : [
                'dist/**/*.min.js',
                'dist/**/*.min.css'
            ]
        }
    };

    return config;
};