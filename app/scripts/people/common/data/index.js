define([
    './models/data',
    './models/PeopleCollection'
], function(data, PeopleCollection) {

    'use strict';

    var peopleCollection = new PeopleCollection(data);

    return {
        getFilteredPeople: function(filter) {
            return peopleCollection.filterByKeyword(filter);
        },

        getPersonById: function(id) {
            return peopleCollection.getById(id);
        }
    };
});