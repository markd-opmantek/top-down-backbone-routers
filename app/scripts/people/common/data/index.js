define([
    './models/PeopleModel',
    'app/index'
], function(PeopleModel, app) {

    'use strict';

    var peopleModel = new PeopleModel();

    peopleModel.listenTo(app, 'people/details', peopleModel.onDetails);
    peopleModel.listenTo(app, 'people/filter', peopleModel.onFilter);

    return peopleModel;

});