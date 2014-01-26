define([
    'underscore',
    'backbone'
], function(_, Backbone) {
    'use strict';

    return Backbone.View.extend({

        events: {
            'submit': '_onFormSubmit'
        },

        initialize: function() {
            this.listenTo(this.model, 'change:filter', this._updateKeyword);
        },

        _onFormSubmit: function(e) {
            this.model.filter(this._getInputElement().val());
            e.preventDefault();
        },

        _updateKeyword: function() {
            this._getInputElement().val(this.model.getFilter());
        },

        _getInputElement: function() {
            return this.$el.find('input[name="filter"]');
        }

    });
});