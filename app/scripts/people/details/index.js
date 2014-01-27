define([
    'app/index',
    'breadcrumbs/index',
    './views/PeopleDetailsView',
    './models/PeopleDetailsModel'
], function(app, breadcrumbs, PeopleDetailsView, PeopleDetailsModel) {

    'use strict';

    var peopleDetailsModel = new PeopleDetailsModel();

    new PeopleDetailsView({
        model: peopleDetailsModel,
        el: '.content article'
    });

    peopleDetailsModel.listenTo(app, 'people/details', peopleDetailsModel.setArgs);
    peopleDetailsModel.listenTo(app, 'people/details', function() {
        var person = peopleDetailsModel.getDetails();
        breadcrumbs.setBreadcrumbs([person.get('name')]);
    });

});