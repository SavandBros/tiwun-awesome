/*global angular*/
'use strict';

/**
 * LogAnalyticsFactory
 *
 * Passing the analytics to $log.
 * Development & Debugging usage mainly.
 *
 * @class LogAnalyticsFactory
 * @namespace tiwunAwesome.basement.factories.LogAnalyticsFactory
 */
function LogAnalyticsFactory($log) {
    /**
     * trackPageView
     *
     * @method trackPageView
     * @param {String} path
     * @memberOf tiwunAwesome.basement.providers.LogAnalyticsFactory
     */
    function trackPageView(path) {
        $log.info(path);
    }

    return {
        trackPageView: trackPageView
    }
}

angular.module('tiwunAwesome.basement.factories.LogAnalyticsFactory', [])
    .factory('LogAnalyticsFactory', LogAnalyticsFactory);

LogAnalyticsFactory.$inject = ['$log'];
