/*global angular*/
'use strict';

/**
 * MenuController
 *
 * @class MenuController
 * @namespace tiwunAwesome.basement.controllers.MenuController
 * @param {Object} $window
 * @param {Object} $scope
 * @param {Object} gettextCatalog
 * @param {AuthenticationService} AuthenticationService
 */
function MenuController($window, $log, $scope, $mdSidenav, gettextCatalog, AuthenticationService) {
    $scope.auth = AuthenticationService;
    $scope.user = AuthenticationService.getAuthenticatedUser();
    $scope.defaultTranslation = $window.localStorage.getItem('translation');

    $scope.translations = {
        ar: 'العربية',
        ca: 'Català',
        da: 'dansk',
        de: 'Deutsch',
        en: 'English',
        fa: 'فارسی',
        fr: 'Français',
        hi: 'हिंदी',
        it: 'Italiano',
        ja: '日本語',
        pt: 'Português',
        ru: 'русский',
        sv: 'Svenska',
        th: 'ไทย',
        tr: 'Türkçe',
        ur: 'اردو'
    };

    $scope.$on('tiwunAwesome.account.service.AuthenticationService:SignedOut', function() {
        $window.location.reload(true)
    });

    /**changeTranslation
     *
     * Change app translation.
     *
     * @method changeTranslation
     * @param {Object} translation
     * @memberOf tiwunAwesome.basement.controllers.MenuController
     */
    $scope.changeTranslation = function(translation) {
        gettextCatalog.setCurrentLanguage(translation.selected);
        $window.localStorage.setItem('translation', translation.selected);
        $scope.defaultTranslation = translation.selected;

    }

    // Sidenav
    $scope.sidenavToggle = function(navID) {
        return $mdSidenav(navID).toggle();
    }

    // Naavbar search
    $scope.navSearch = false;

    // Show search in navbar
    $scope.showSearch = function() {
        $scope.navSearch = true;
    }
}

angular.module('tiwunAwesome.basement.controllers.MenuController', [
        'tiwunAwesome.account.services.AuthenticationService'
    ])
    .controller('MenuController', MenuController);

MenuController.$inject = ['$window', '$log', '$scope', '$mdSidenav', 'gettextCatalog', 'AuthenticationService'];
