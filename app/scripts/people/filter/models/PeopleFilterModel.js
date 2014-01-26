define([
    'backbone',
    '../../common/data/index'
], function(Backbone, data) {

    'use strict';

    return Backbone.Model.extend({

        setArgs: function(args) {
            this.set('filter', args[0]);
        },

        getFilteredPeople: function() {
            return data.getFilteredPeople(this.getFilter());
        },

        filter: function(filter) {
            this.trigger('filter', filter);
        },

        getFilter: function() {
            return this.get('filter');
        }

    });
});