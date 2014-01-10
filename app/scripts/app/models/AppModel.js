define([
    'backbone'
], function(Backbone) {

    'use strict';

    return Backbone.Model.extend({

        onStateChange: function(state, args) {
            this.set({
                state: state,
                value: args
            });
            this.trigger('stateChange ' + state, args);
        },

        navigateTo: function(href) {
            this.trigger('navigate', href);
        }
    });
});