define([
    'backbone'
], function(Backbone) {
    
    'use strict';
    
    return Backbone.Router.extend({

        routes: {
            'filter(/:keyword)': 'filter',
            'details/:id': 'details'
        },
        
        navigateToFilter: function(filter) {
            this.navigateAndTrigger('/filter/' + filter);
        },

        navigateToDetails: function(id) {
            this.navigateAndTrigger('/details/' + id);
        },

        navigateAndTrigger: function(url) {
            this.navigate(url, {
                trigger: true
            });
        }
    });
});