define([
    'backbone',
    '../../common/data/index'
], function(Backbone, data) {

    'use strict';

    return Backbone.Model.extend({

        setArgs: function(args) {
            this.set('id', parseInt(args[0], 10));
        },

        getDetails: function() {
            return data.getPersonById(this.get('id'));
        }

    });
});