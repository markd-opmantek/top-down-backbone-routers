requirejs.config({

    baseUrl: 'scripts',

    paths: {
        'underscore': '../bower_components/underscore/underscore',
        'backbone': '../bower_components/backbone/backbone',
        'jquery': '../bower_components/jquery/jquery'
    },

    shim: {
        'underscore': {
            exports: '_'
        },

        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});