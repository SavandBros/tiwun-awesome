/*global angular*/
'use strict';

/**
 * Register Controller
 *
 * @class RegisterController
 * @namespace tiwunAwesome.account.controllers.RegisterController
 */
function RegisterController($window, $state, $rootScope, $scope, $log, AuthenticationService) {
    var email, password;
    constructor();

    /**
     * Actions to be performed when this controller is instantiated
     *
     * @method constructor
     * @memberOf tiwunAwesome.account.controllers.RegisterController
     */
    function constructor() {
        // if the user is authenticated, they should not be here.
        if (AuthenticationService.isAuthenticated()) {
            // TODO: Fix to redirect to previous state.
            $state.go('app.explore');
        }
    }

    $scope.$on('tiwunAwesome.account.service.AuthenticationService:Registered', function() {
        AuthenticationService.login(email, password).then(
            function(data, status, headers, config) {
                $log.info('Success login');

                AuthenticationService.setAuthenticatedUser(data.data.user);
                AuthenticationService.setToken(data.data.token);

                $rootScope.$broadcast('tiwunAwesome.account.service.AuthenticationService:Authenticated');
            },
            null
        );
    });

    $scope.$on('tiwunAwesome.account.service.AuthenticationService:Authenticated', function() {
        $state.go('app.explore', {}, {
            reload: true
        });
        $window.location.reload(true);
    });

    /**
     * Register a new user
     *
     * @method register
     * @memberOf tiwunAwesome.account.controllers.RegisterController
     */
    $scope.register = function register(form, user) {
        if (form) {
            if (user.password !== user.confirmPassword) {
                form.confirmPassword.$error.not_match = true;
                form.$invalid = true;
                return;
            }
        }

        email = user.email;
        password = user.password;

        AuthenticationService.register(user.email, user.password);
    };
}

angular.module('tiwunAwesome.account.controllers.RegisterController', [
        'tiwunAwesome.account.services.AuthenticationService'
    ])
    .controller('RegisterController', RegisterController);

RegisterController.$inject = [
    '$window',
    '$state',
    '$rootScope',
    '$scope',
    '$log',
    'AuthenticationService'
];
