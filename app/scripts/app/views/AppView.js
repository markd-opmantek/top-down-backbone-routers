define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {

    'use strict';

    return Backbone.View.extend({

        events: {
            'click a.pushState': '_navigateTo'
        },

        initialize: function() {
            this.listenTo(this.model, 'stateChange', this._setViewState, this);
        },

        _setViewState: function() {
            this.$el.removeClass(this.model.previous('state'));
            this.$el.addClass(this.model.get('state'));
        },

        _navigateTo: function(e) {
            this.model.navigateTo($(e.target).attr('href'));
            e.preventDefault();
        }

    });
});