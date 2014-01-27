define([
    './models/BreadcrumbCollection',
    './views/BreadcrumbView'
], function(BreadcrumbCollection, BreadcrumbsView) {

    'use strict';

    var breadcrumbCollection = new BreadcrumbCollection();

    new BreadcrumbsView({
        el: 'ol',
        collection: breadcrumbCollection
    });

    return breadcrumbCollection;
});