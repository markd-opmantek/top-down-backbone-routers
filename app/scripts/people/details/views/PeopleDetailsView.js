define([
    'underscore',
    'backbone'
], function(_, Backbone) {

    'use strict';

    var detailsTemplate = _.template(
        '<h2><%= name %></h2>' +
        '<h4><%= company %></h4>' +
        '<p><%= about %></p>'
    );

    return Backbone.View.extend({

        initialize: function() {
            this.listenTo(this.model, 'change:id', this.render);
        },

        render: function() {
            this.$el.html(detailsTemplate(this.model.getDetails().toJSON()));
        }
    });
});