require(['config'], function() {

    'use strict';

    require([
        'jquery',
        'backbone',
        'Router',
        'state/index',
        'filter/index'
    ], function($, Backbone, Router, state, filter) {

        var router = new Router();

        router.on('route', state.onStateChange, state);

        state.on('request:filter', function(filter) {
            router.navigateToFilter(filter);
        });

        state.on('request:details', function(id) {
            router.navigateToDetails(id);
        });

        state.on('navigate', function(url) {
            router.navigateAndTrigger(url);
        });

        state.on('filter', filter.onFilter, filter);
        state.on('details', filter.onDetails, filter);

        Backbone.history.start({
            pushState: false,
            hashChange: true
        });
    });
});