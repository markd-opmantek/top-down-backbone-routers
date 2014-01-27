define([
    'underscore',
    'backbone'
], function(_, Backbone) {
    'use strict';

    var itemView = _.template('<tr>' +
        '<td><a href="/people/details/<%= id %>" class="pushState"><%= name %></a></td>' +
        '<td><%= company %></td>' +
        '<td><%= phone %></td>' +
        '<td><%= address %></td>' +
    '</tr>');

    return Backbone.View.extend({

        initialize: function() {
            this.listenTo(this.model, 'change:filter', this.render);
        },

        render: function() {
            this.$el.html(_.map(this.model.getFilteredPeople(), function(result) {
                return itemView(result.toJSON());
            }).join(''));
        }

    });
});