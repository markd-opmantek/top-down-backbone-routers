({
    baseUrl: '.',
    modules: [{
        name: 'peopleCommon',
        include: ['people/common/index']
    }, {
        name: 'peopleFilter',
        include: ['people/filter/index'],
        exclude: ['peopleCommon']
    }, {
        name: 'peopleDetails',
        include: ['people/details/index'],
        exclude: ['peopleCommon']
    }]
})