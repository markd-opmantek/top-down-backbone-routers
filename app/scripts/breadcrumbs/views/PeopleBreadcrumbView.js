define([
    'underscore',
    'backbone'
], function(_, Backbone) {

    'use strict';

    var breadcrumbTemplate = _.template('<li><% if (href) { %><a href="<%= href %>" class="pushState"><% } %><%= text %><% if (href) { %></a><% } %></li>');

    return Backbone.View.extend({

        initialize: function() {
            this.listenTo(this.collection, 'reset', this.render);
        },

        render: function() {
            this.$el.html(_.map(this.collection.toJSON(), function(crumb) {
                return breadcrumbTemplate(crumb);
            }));
        }
    });
});