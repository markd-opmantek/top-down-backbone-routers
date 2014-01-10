define([
    'backbone'
], function(Backbone) {
    
    'use strict';
    
    return Backbone.Router.extend({

        routes: {
            'people/filter(/:keyword)': 'people/filter',
            'people/details/:id': 'people/details'
        },

        initialize: function() {
            this.route('people', this._redirectToPeopleFilter);
        },

        _redirectToPeopleFilter: function() {
            this.navigate('people/filter', {
                replace: true,
                trigger: true
            });
        },

        navigateAndTrigger: function(url) {
            this.navigate(url, {
                trigger: true
            });
        }
    });
});