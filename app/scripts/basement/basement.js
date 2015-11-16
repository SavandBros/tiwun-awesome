/*global angular*/
'use strict';

/**
 * `tiwunAwesome.basement` module.
 *
 * @module tiwunAwesome.account
 */
angular.module('tiwunAwesome.basement', [
    'tiwunAwesome.basement.services.PaginationService',
    'tiwunAwesome.basement.services.ToastService',
    'tiwunAwesome.basement.services.MoneyCurrencyService',
    'tiwunAwesome.basement.factories.LogAnalyticsFactory',
    'tiwunAwesome.basement.providers.AnalyticsProvider',
    'tiwunAwesome.basement.controllers.IndexController',
    'tiwunAwesome.basement.controllers.NavbarController',
    'tiwunAwesome.basement.controllers.MenuController',
    'tiwunAwesome.basement.filters.TimeSinceFilter',
    'tiwunAwesome.basement.translations'
]);


angular.module('tiwunAwesome.basement.services.PaginationService', []);
angular.module('tiwunAwesome.basement.services.ToastService', []);
angular.module('tiwunAwesome.basement.services.MoneyCurrencyService', []);
angular.module('tiwunAwesome.basement.factories.CordovaGoogleAnalyticsFactory', []);
angular.module('tiwunAwesome.basement.factories.LogAnalyticsFactory', []);
angular.module('tiwunAwesome.basement.providers.AnalyticsProvider', []);
angular.module('tiwunAwesome.basement.controllers.IndexController', []);
angular.module('tiwunAwesome.basement.controllers.NavbarController', []);
angular.module('tiwunAwesome.basement.controllers.MenuController', []);
angular.module('tiwunAwesome.basement.filters.TimeSinceFilter', []);
angular.module('tiwunAwesome.basement.translations', []);
