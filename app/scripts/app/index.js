define([
    './models/AppModel',
    './views/AppView'
], function(AppModel, AppView) {

    'use strict';

    var appModel = new AppModel();

    new AppView({
        model: appModel,
        el: '.content'
    });

    return appModel;
});