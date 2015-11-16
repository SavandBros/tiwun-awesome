/*global angular*/
'use strict';

/**
 * Authentication Interceptor Service
 *
 * @class AuthenticationInterceptorService
 * @namespace tiwunAwesome.account.services.AuthenticationInterceptorService
 * @param {Object} $window
 * @param {Object} ENV
 *
 */
function AuthenticationInterceptorService($window, ENV) {
    /**
     * request
     * Automatically attach Authorization header
     *
     * @method request
     * @param {Object} config
     * @memberOf tiwunAwesome.account.services.AuthenticationInterceptorService
     * @returns {Object}
     */
    function request(config) {
        var token = $window.localStorage['jwtToken'];

        if (config.url.indexOf(ENV.apiEndPoint === 0 && token)) {
            config.headers.Authorization = 'Bearer ' + token;
        }

        return config;
    }

    return {
        request: request
    }
}

angular.module('tiwunAwesome.account.services.AuthenticationInterceptorService')
    .factory('AuthenticationInterceptorService', AuthenticationInterceptorService);

AuthenticationInterceptorService.$inject = ['$window', 'ENV'];
