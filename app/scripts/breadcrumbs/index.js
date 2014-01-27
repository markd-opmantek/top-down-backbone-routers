define([
    './models/PeopleBreadcrumbCollection',
    './views/PeopleBreadcrumbView'
], function(PeopleBreadcrumbCollection, PeopleBreadcrumbsView) {

    'use strict';

    var peopleBreadcrumbCollection = new PeopleBreadcrumbCollection();

    new PeopleBreadcrumbsView({
        el: 'ol',
        collection: peopleBreadcrumbCollection
    });

    return peopleBreadcrumbCollection;
});