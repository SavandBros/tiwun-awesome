/*global angular*/
'use strict';

/**
 * `tiwunAwesome.account` module.
 *
 * @module tiwunAwesome.account
 */
angular.module('tiwunAwesome.account', [
    'tiwunAwesome.account.controllers.RegisterController',
    'tiwunAwesome.account.controllers.LoginController',
    'tiwunAwesome.account.controllers.UserSettingsController',
    'tiwunAwesome.account.controllers.UserProfileController',
    'tiwunAwesome.account.services.AuthenticationService',
    'tiwunAwesome.account.services.UserService',
    'tiwunAwesome.account.services.AuthenticationInterceptorService'
]);

angular.module('tiwunAwesome.account.controllers.RegisterController', []);
angular.module('tiwunAwesome.account.controllers.LoginController', []);
angular.module('tiwunAwesome.account.controllers.UserSettingsController', []);
angular.module('tiwunAwesome.account.controllers.AccountController', []);
angular.module('tiwunAwesome.account.controllers.UserProfileController', []);
angular.module('tiwunAwesome.account.services.AuthenticationService', []);
angular.module('tiwunAwesome.account.services.UserService', []);
angular.module('tiwunAwesome.account.services.AuthenticationInterceptorService', []);
