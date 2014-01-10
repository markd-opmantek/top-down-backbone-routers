define([
    './views/FilterResultsCollectionView',
    './views/DetailView',
    './models/FilterModel'
], function(FilterResultsCollectionView, DetailView, FilterModel) {

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

    return {
        onDetails: function(args) {
            filterModel.onDetails(args[0]);
        },

        onFilter: function(args) {
            filterModel.onFilter(args[0]);
        }
    };
});