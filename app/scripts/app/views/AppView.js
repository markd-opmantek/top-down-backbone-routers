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
            this.listenTo(this.model, 'stateChange', this._setViewState);
        },

        _setViewState: function() {
            this.$el.removeClass(this._getCssClassesFromPath(this.model.previous('state')));
            this.$el.addClass(this._getCssClassesFromPath(this.model.get('state')));
        },

        _getCssClassesFromPath: function(path) {
            var classes = '';

            if (path) {
                classes = path.replace('/', ' ');
            }

            return classes;
        },

        _navigateTo: function(e) {
            this.model.navigateTo($(e.target).attr('href'));
            e.preventDefault();
        }

    });
});