define([
    'app/index',
    './views/PeopleDetailsView',
    './models/PeopleDetailsModel'
], function(app, PeopleDetailsView, PeopleDetailsModel) {

    'use strict';

    var peopleDetailsModel = new PeopleDetailsModel();

    new PeopleDetailsView({
        model: peopleDetailsModel,
        el: '.content article'
    });

    peopleDetailsModel.listenTo(app, 'people/details', peopleDetailsModel.setArgs);

});