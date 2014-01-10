define([
    'underscore',
    'layoutmanager'
], function(_, LayoutManager) {

    'use strict';

    return LayoutManager.extend({

        template: _.template(
            '<h1><%= name %></h1>' +
            '<p><%= about %></p>' +
            '<a href="/filter" class="pushState">All entries</a>'
        ),

        initialize: function() {
            this.listenTo(this.model, 'change:details', this.render);
        },

        serialize: function() {
            return this.model.getDetails().toJSON();
        }
    });
});