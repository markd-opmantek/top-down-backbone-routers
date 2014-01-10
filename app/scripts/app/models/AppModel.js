define([
    'underscore',
    'backbone'
], function(_, Backbone) {

    'use strict';

    return Backbone.Model.extend({

        onStateChange: function(state, args) {
            if (state) {
                this.set('state', state);
                var module = state + '/index';

                require([module], _.bind(function() {
                    this.trigger('stateChange ' + state, args);
                }, this));
            }
        },

        navigateTo: function(href) {
            this.trigger('navigate', href);
        }
    });
});