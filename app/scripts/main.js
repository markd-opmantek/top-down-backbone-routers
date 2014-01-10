require(['config'], function() {

    'use strict';

    require([
        'jquery',
        'backbone',
        'Router',
        'app/index'
    ], function($, Backbone, Router, app) {

        var router = new Router();

        router.on('route', app.onStateChange, app);
        app.on('navigate', router.navigateAndTrigger, router);

        Backbone.history.start({
            pushState: false,
            hashChange: true
        });
    });
});