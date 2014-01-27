define([
    'underscore',
    'backbone'
], function(_, Backbone) {

    'use strict';

    return Backbone.Collection.extend({

        setBreadcrumbs: function(breadcrumbs) {
            breadcrumbs = _.map(breadcrumbs, function(crumb) {
                return {
                    href: '',
                    text: crumb
                };
            });

            var home = {
                href: '/',
                text: 'People'
            };

            breadcrumbs.unshift(home);

            this.reset(breadcrumbs);
        }

    });
});