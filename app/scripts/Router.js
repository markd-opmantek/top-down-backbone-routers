define([
    'backbone'
], function(Backbone) {
    
    'use strict';
    
    return Backbone.Router.extend({

        routes: {
            'people/filter(/:keyword)': 'people/filter',
            'people/details/:id': 'people/details'
        },

        navigateAndTrigger: function(url) {
            this.navigate(url, {
                trigger: true
            });
        }
    });
});