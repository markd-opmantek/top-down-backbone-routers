define([
    'backbone'
], function(Backbone) {

    'use strict';

    return Backbone.Collection.extend({

        filterByKeyword: function(keyword) {

            var filteredRows;

            if (keyword) {
                filteredRows = this.filter(function(model) {
                    return model.get('name').toLowerCase().indexOf(keyword.toLowerCase()) > -1;
                });
            } else {
                filteredRows = this.toArray();
            }

            return filteredRows;
        },

        getById: function(id) {
            id = parseInt(id, 10);
            return this.find(function(model) {
                return model.get('id') === id;
            });
        }

    });
});