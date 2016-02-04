/**
 * Tiwun Awesome Application
 * @name app
 * @namespace tiwunAwesome
 */
(function() {
    'use strict';

    angular.module('tiwunAwesome.konfig.Konfig', []);

    angular.module('tiwunAwesome', [
        'ngMaterial',
        'ui.router',
        'ui.router.title',
        'angular.filter',
        'markdown',
        'gettext',
        'ngSanitize',
        'MassAutoComplete',
        'tiwunAwesome.ngkonstant',
        'tiwunAwesome.konfig.Konfig',
        'tiwunAwesome.basement',
        'tiwunAwesome.account',
        'tiwunAwesome.item',
        'tiwunAwesome.search',
        'tiwunAwesome.tagool',
        'tiwunAwesome.analytics',
    ]);

    angular.module('tiwunAwesome')
        .run(RunForrestRun);

    RunForrestRun.$inject = ['$window', 'gettextCatalog', 'AnalyticsProvider'];

    function RunForrestRun($window, gettextCatalog, AnalyticsProvider) {
        var translation = $window.localStorage.getItem('translation');

        if (!translation) {
            translation = 'en';
            $window.localStorage.setItem('translation', translation)
        }

        AnalyticsProvider.init();

        gettextCatalog.setCurrentLanguage(translation);

    }
})();
