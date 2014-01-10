define([
    'underscore',
    'layoutmanager'
], function(_, LayoutManager) {

    'use strict';

    return LayoutManager.extend({

        template: _.template(
            '<h1><%= name %></h1>' +
            '<p><%= about %></p>' +
            '<a href="/people/filter" class="pushState">All entries</a>'
        ),

        initialize: function() {
            this.listenTo(this.model, 'change:id', this.render);
        },

        serialize: function() {
            return this.model.getDetails().toJSON();
        }
    });
});