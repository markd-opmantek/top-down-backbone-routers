define([
    'backbone',
    './data',
    './FilterResultsCollection'
], function(Backbone, data, FilterResultsCollection) {

    'use strict';

    return Backbone.Model.extend({

        initialize: function() {
            this.filterResultsCollection = new FilterResultsCollection(data);
        },

        onFilter: function(filter) {
            this.set('filter', filter[0]);
        },

        onDetails: function(id) {
            this.set('id', parseInt(id[0], 10));
        },

        getFilteredResults: function() {
            return this.filterResultsCollection.filterByKeyword(this.get('filter'));
        },

        getDetails: function() {
            return this.filterResultsCollection.getById(this.get('id'));
        }

    });
});