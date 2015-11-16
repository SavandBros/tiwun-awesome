"use strict";

angular.module('tiwunAwesome.ngkonstant', [])

.constant('ENV', {
    googleAnalyticsID: 'UA-47857090-4',
    name: 'development',
    resourceType: {
        single: '1',
        list: '2'
    },
    apiEndpoint: 'https://127.0.0.1:8000/api/'
})

;
