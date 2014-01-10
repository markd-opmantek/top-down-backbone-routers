define([
    '../common/data/index',
    './views/PeopleDetailsView'
], function(data, PeopleDetailsView) {

    'use strict';

    new PeopleDetailsView({
        model: data,
        el: '.content article'
    });

});