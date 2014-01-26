define(function() {

    'use strict';

    return function(filter) {
        var url = '/people/filter';

        if (filter) {
            url += '/' + filter;
        }

        return url;
    };
});