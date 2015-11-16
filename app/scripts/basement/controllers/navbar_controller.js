/**
 * NavbarController
 * @namespace tiwunAwesome.basement.controllers
 */
(function() {
    'use strict';

    angular.module('tiwunAwesome.basement.controllers.NavbarController', [
            'tiwunAwesome.account.services.AuthenticationService'
        ])
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$scope', 'AuthenticationService'];

    /**
     * @namespace NavbarController
     */
    function NavbarController($scope, AuthenticationService) {
        $scope.logout = logout;
        /**
         * @name logout
         * @desc Log the user out
         * @memberOf tiwunAwesome.basement.controllers.NavbarController
         */
        function logout() {
            AuthenticationService.logout();
        }
    }
})();
