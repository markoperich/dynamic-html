/**
* This file/module contains all configuration for the build process.
*/
module.exports = {
    /**
    * The `build_dir` folder is where our projects are compiled during
    * development and the `compile_dir` folder is where our app resides once it's
    * completely built.
    */
    build_dir: 'build',
    compile_dir: 'bin',

    /**
    * This is a collection of file patterns that refer to our app code (the
    * stuff in `src/`). These file paths are used in the configuration of
    * build tasks. `js` is all project javascript, less tests. `ctpl` contains
    * our reusable components' (`src/common`) template HTML files, while
    * `atpl` contains the same, but for our app's code. `html` is just our
    * main HTML file, `less` is our main stylesheet, and `unit` contains our
    * app's unit tests.
    */
    app_files: {
        js: [ 'src/**/*.js', '!src/**/*.spec.js', '!src/assets/**/*.js' ],
        jsunit: [ 'src/**/*.spec.js' ],

        coffee: [ 'src/**/*.coffee', '!src/**/*.spec.coffee' ],
        coffeeunit: [ 'src/**/*.spec.coffee' ],

        atpl: [ 'src/app/**/*.tpl.html' ],
        ctpl: [ 'src/common/**/*.tpl.html' ],

        html: [ 'src/index.html' ],
        less: 'src/less/main.less'
    },

    /**
    * This is a collection of files used during testing only.
    */
    test_files: {
        js: [
            'lib/angular-mocks/angular-mocks.js'
        ]
    },

    /**
    * This is the same as `app_files`, except it contains patterns that
    * reference lib code (`lib/`) that we need to place into the build
    * process somewhere. While the `app_files` property ensures all
    * standardized files are collected for compilation, it is the user's job
    * to ensure non-standardized (i.e. lib-related) files are handled
    * appropriately in `lib_files.js`.
    *
    * The `lib_files.js` property holds files to be automatically
    * concatenated and minified with our project source files.
    *
    * The `lib_files.css` property holds any CSS files to be automatically
    * included in our app.
    *
    * The `lib_files.assets` property holds any assets to be copied along
    * with our app's assets. This structure is flattened, so it is not
    * recommended that you use wildcards.
    */
    lib_files: {
        js: [
            'lib/angular/angular.js',
            'lib/angular-bootstrap/ui-bootstrap-tpls.min.js',
            'lib/placeholders/angular-placeholders-0.0.1-SNAPSHOT.min.js',
            'lib/angular-ui-router/release/angular-ui-router.js',
            'lib/angular-ui-utils/modules/route/route.js'
        ],
        css: [
        ],
        assets: [
        ],
        fonts: [
            'lib/bootstrap/fonts/glyphicons-halflings-regular.eot',
            'lib/bootstrap/fonts/glyphicons-halflings-regular.svg',
            'lib/bootstrap/fonts/glyphicons-halflings-regular.ttf',
            'lib/bootstrap/fonts/glyphicons-halflings-regular.woff'
        ]
    },
};
