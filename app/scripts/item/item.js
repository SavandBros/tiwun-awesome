/*global angular*/
'use strict';



angular.module('tiwunAwesome.item', [
    'tiwunAwesome.item.controllers.NewItemController',
    'tiwunAwesome.item.controllers.SingleItemController',
    'tiwunAwesome.item.services.ItemService',
    'tiwunAwesome.item.directives.ItemDirective'
]);

angular.module('tiwunAwesome.item.controllers.NewItemController', []);
angular.module('tiwunAwesome.item.controllers.SingleItemController', []);
angular.module('tiwunAwesome.item.services.ItemService', []);
angular.module('tiwunAwesome.item.directives.ItemDirective', []);
