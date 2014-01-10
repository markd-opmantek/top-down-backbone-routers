define([
    'underscore',
    'layoutmanager'
], function(_, LayoutManager) {

    'use strict';

    return LayoutManager.extend({

        template: _.template('<tr><td><a href="/details/<%= id %>" class="pushState"><%= name %></a></td></tr>')

    });
});