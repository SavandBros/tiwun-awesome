/*global angular*/
'use strict';

/**
 * Login Controller
 *
 * @class LoginController
 * @namespace tiwunAwesome.account.controllers.LoginController
 */
function LoginController($window, $log, $state, $rootScope, $scope, AuthenticationService) {
    $scope.formSubmitted = false;
    /**
     * Actions to be performed when this controller is instantiated
     *
     * @method constructor
     * @memberOf tiwunAwesome.account.controllers.LoginController
     */
    function constructor() {
        // if the use is authenticated, they should not be here.
        if (AuthenticationService.isAuthenticated()) {
            $state.go('app.explore');
        }
    }

    constructor();

    $scope.$on('tiwunAwesome.account.service.AuthenticationService:Authenticated', function() {
        $state.go('app.explore', {}, {
            reload: true
        });
        $window.location.reload(true);
    });

    /**
     * Log the user in
     *
     * @method login
     * @memberOf tiwunAwesome.account.controllers.LoginController
     */
    $scope.login = function(form, user) {
        $scope.formSubmitted = true;

        if (form.$valid) {
            AuthenticationService.login(user.email, user.password).then(
                function(data, status, headers, config) {
                    $log.info('Success login');

                    AuthenticationService.setAuthenticatedUser(data.data.user);
                    AuthenticationService.setToken(data.data.token);

                    $rootScope.$broadcast('tiwunAwesome.account.service.AuthenticationService:Authenticated');
                },
                function(data, status, headers, config) {
                    $log.error('Authentication Failure.');
                    if (data.data.error_code === 0) {
                        $log.debug('Wrong Credentials.');
                        $scope.wrongCredentials = true;
                    }
                }
            );
        }
    };
}

angular.module('tiwunAwesome.account.controllers.LoginController', [
        'tiwunAwesome.account.services.AuthenticationService'
    ])
    .controller('LoginController', LoginController);

LoginController.$inject = ['$window', '$log', '$state', '$rootScope', '$scope', 'AuthenticationService'];
