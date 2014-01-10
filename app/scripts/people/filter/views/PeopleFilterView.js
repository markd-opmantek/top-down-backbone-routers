define([
    'underscore',
    'backbone',
    './PeopleFilterItemView'
], function(_, Backbone, PeopleFilterItemView) {
    'use strict';

    return Backbone.View.extend({

        initialize: function() {
            this.listenTo(this.model, 'change:filter', this.render);
        },

        render: function() {
            var html = _.map(this.model.getFilteredPeople(), function(result) {
                return new PeopleFilterItemView({
                    model: result
                }).render().$el.html();
            }).join('');

            this.$el.html(html);
        }

    });
});