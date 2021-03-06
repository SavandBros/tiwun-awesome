/*global angular*/
'use strict';

/**
 * Use rSettings Controller
 *
 * @param {Object} $scope
 * @param {Object} $state
 * @param {Object} $log
 * @param {Object} gettextCatalog
 * @param {ToastService} ToastService
 * @param {UserService} UserService
 * @param {AuthenticationService} AuthenticationService
 *
 * @class UserSettingsController
 * @namespace tiwunAwesome.account.controllers.UserSettingsController
 */
function UserSettingsController($scope, $state, $stateParams, $log, gettextCatalog, ToastService, UserService, AuthenticationService) {
    /**
     * Actions to be performed when this controller is instantiated
     *
     * @method constructor
     * @memberOf tiwunAwesome.account.controllers.UserSettingsController
     */
    function constructor() {
        if (!AuthenticationService.isAuthenticated()) {
            $state.go('app.login');
            ToastService.show(gettextCatalog.getString('You are not authorized to access this page.'));
        } else {
            UserService.get($stateParams.userId).then(
                function(data, status, headers, config) {
                    /**
                     * Current user that is logged and is trying to update settings.
                     *
                     * @property {Object} user
                     */
                    $scope.setting = data.data.user;
                },
                function(data, status, headers, config) {
                    ToastService.show('Error in getting user: ' + data.data.error);
                }
            );
        }
    }

    constructor();

    /**
     * Pass user settings to `UserService.update` method to update the user settings.
     *
     * @method updateAccount
     * @param {Object} form Submitted form contains user settings to be updated
     * @param {Object} user The user model from angular that need to be passed to `UserService` to get updated.
     */
    $scope.updateAccount = function(form, setting) {
        UserService.update(setting).then(
            function(data, status, headers, config) {},
            function(data, status, headers, config) {
                $log.error('Error in updating user account settings: ' + data.error);
            }
        );
    };
}


angular.module('tiwunAwesome.account.controllers.UserSettingsController', [
    'tiwunAwesome.account.services.UserService',
    'tiwunAwesome.account.services.AuthenticationService',
    'tiwunAwesome.basement.services.ToastService'
])
    .controller('UserSettingsController', UserSettingsController);

UserSettingsController.$inject = [
    '$scope',
    '$state',
    '$stateParams',
    '$log',
    'gettextCatalog',
    'ToastService',
    'UserService',
    'AuthenticationService'
];
