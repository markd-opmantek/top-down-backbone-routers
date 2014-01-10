define([
    '../common/data/index',
    './views/PeopleFilterView'
], function(data, PeopleFilterView) {

    'use strict';

    new PeopleFilterView({
        model: data,
        el: '.content tbody'
    });

});