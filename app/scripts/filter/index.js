define([
    './views/FilterResultsCollectionView',
    './views/DetailView',
    './models/FilterModel',
    '../app/index'
], function(FilterResultsCollectionView, DetailView, FilterModel, app) {

    'use strict';

    var filterModel = new FilterModel();

    new FilterResultsCollectionView({
        model: filterModel,
        el: '.content tbody'
    });

    new DetailView({
        model: filterModel,
        el: '.content article'
    });

    filterModel.listenTo(app, 'filter', filterModel.onFilter);
    filterModel.listenTo(app, 'details', filterModel.onDetails);

});