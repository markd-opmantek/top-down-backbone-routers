define([
    'app/index',
    './models/PeopleFilterModel',
    './models/peopleFilterUrlGenerator',
    './views/PeopleFilterView',
    './views/PeopleFilterFormView'
], function(app, PeopleFilterModel, peopleFilterUrlGenerator, PeopleFilterView, PeopleFilterFormView) {

    'use strict';

    var peopleFilterModel = new PeopleFilterModel();

    new PeopleFilterView({
        model: peopleFilterModel,
        el: '.content tbody'
    });

    new PeopleFilterFormView({
        model: peopleFilterModel,
        el: '.content form'
    });

    peopleFilterModel.listenTo(app, 'people/filter', peopleFilterModel.setArgs);

    peopleFilterModel.on('filter', function(filter) {
        app.navigateTo(peopleFilterUrlGenerator(filter));
    });

});