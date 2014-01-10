define([
    'app/index',
    './models/PeopleFilterModel',
    './views/PeopleFilterView'
], function(app, PeopleFilterModel, PeopleFilterView) {

    'use strict';

    var peopleFilterModel = new PeopleFilterModel();

    new PeopleFilterView({
        model: peopleFilterModel,
        el: '.content tbody'
    });

    peopleFilterModel.listenTo(app, 'people/filter', peopleFilterModel.setArgs);

});