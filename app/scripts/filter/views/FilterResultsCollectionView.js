define([
    'underscore',
    'backbone',
    './FilterResultsCollectionItemView'
], function(_, Backbone, FilterResultsCollectionItemView) {
    'use strict';

    return Backbone.View.extend({

        initialize: function() {
            this.listenTo(this.model, 'change:filter', this.render);
        },

        render: function() {
            var html = _.map(this.model.getFilteredResults(), function(result) {
                return new FilterResultsCollectionItemView({
                    model: result
                }).render().$el.html();
            }).join('');

            this.$el.html(html);
        }

    });
});