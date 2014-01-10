define([
    './models/StateModel',
    './views/StateView'
], function(StateModel, StateView) {

    'use strict';

    var appModel = new StateModel();

    new StateView({
        model: appModel,
        el: '.content'
    });

    return appModel;
});