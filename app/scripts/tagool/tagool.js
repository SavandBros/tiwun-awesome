(function() {
    'use strict';

    angular.module('tiwunAwesome.tagool', [
        'tiwunAwesome.tagool.controllers.TagsController',
        'tiwunAwesome.tagool.controllers.TagsDetailController',
        'tiwunAwesome.tagool.services.TagService',
        'tiwunAwesome.tagool.directives.TagDirective'
    ]);

    angular.module('tiwunAwesome.tagool.controllers.TagsController', []);
    angular.module('tiwunAwesome.tagool.controllers.TagsDetailController', []);
    angular.module('tiwunAwesome.tagool.services.TagService', []);
    angular.module('tiwunAwesome.tagool.directives.TagDirective', []);
})();
