/*global angular*/
'use strict';

/**
 * ToastService
 *
 * @class ToastService
 * @param {Object} $rootScope
 * @param {Object} $timeout
 * @param {Object} gettextCatalog
 * @namespace tiwunAwesome.basement.services.ToastService
 */
function ToastService($rootScope, $timeout, gettextCatalog) {
    /**
     * Show message
     *
     * @method show
     * @param {String} message
     * @param {String} duration
     * @param {String} position
     * @memberOf tiwunAwesome.basement.services.ToastService
     */
    function show(message, duration, position) {
        message = message || gettextCatalog.getString('There was a problem...');
        duration = duration || 'short';
        position = position || 'top';

        if (duration === 'short') {
            duration = 2000;
        } else {
            duration = 5000;
        }

        var toastPopup = $ionicPopup.show({
            template: '<div class=\'toast\'>' + message + '</div>',
            scope: $rootScope,
            buttons: []
        });

        $timeout(function() {
            toastPopup.close();
        }, duration);
    }

    return {
        show: show
    };
}

angular.module('tiwunAwesome.basement.services.ToastService', [])
    .factory('ToastService', ToastService);

ToastService.$inject = ['$rootScope', '$timeout', 'gettextCatalog'];
