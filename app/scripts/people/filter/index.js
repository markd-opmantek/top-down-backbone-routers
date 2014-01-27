define([
    'app/index',
    'breadcrumbs/index',
    './models/PeopleFilterModel',
    './models/peopleFilterUrlGenerator',
    './views/PeopleFilterView',
    './views/PeopleFilterFormView'
], function(app, breadcrumbs, PeopleFilterModel, peopleFilterUrlGenerator, PeopleFilterView, PeopleFilterFormView) {

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
    peopleFilterModel.listenTo(app, 'people/filter', function() {
        var filter = peopleFilterModel.get('filter');
        var sections = [];
        if (filter) {
            sections = ['Search', filter];
        }
        breadcrumbs.setBreadcrumbs(sections);
    });

    peopleFilterModel.on('filter', function(filter) {
        app.navigateTo(peopleFilterUrlGenerator(filter));
    });

});