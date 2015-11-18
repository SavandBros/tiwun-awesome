/**
 * Konfig
 * @namespace tiwunAwesome.konfig
 */
'use strict';

function Konfig($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $locationProvider.html5Mode(true);
    //$locationProvider.hashPrefix('!');

    $httpProvider.interceptors.push('AuthenticationInterceptorService');

    $stateProvider
        .state('app', {
            abstract: true,
            controller: 'MenuController',
            templateUrl: 'templates/layout.html'
        })
        .state('app.explore', {
            url: '/',
            views: {
                'content': {
                    controller: 'IndexController',
                    templateUrl: 'templates/explore.html'
                }
            }
        })
        .state('app.search', {
            url: '/search',
            views: {
                'content': {
                    controller: 'SearchController',
                    templateUrl: 'templates/search/search.html'
                }
            }
        })
        .state('app.register', {
            url: '/account/register',
            views: {
                'content': {
                    templateUrl: 'templates/account/register.html',
                    controller: 'RegisterController'
                }
            }
        })
        .state('app.login', {
            url: '/account/login/',
            views: {
                'content': {
                    controller: 'LoginController',
                    templateUrl: 'templates/account/login.html'
                }
            }
        })
        .state('app.userProfile', {
            url: '/account/user-profile/:userId/',
            views: {
                'content': {
                    templateUrl: 'templates/account/user_profile.html',
                    controller: 'UserProfileController'
                }
            }
        })
        .state('app.userSettings', {
            url: '/account/user-profile/settings/:userId/',
            views: {
                'content': {
                    templateUrl: 'templates/account/user_settings.html',
                    controller: 'UserSettingsController'
                }
            }
        })
        .state('app.newItem', {
            url: '/items/new/',
            views: {
                'content': {
                    templateUrl: 'templates/item/item_post.html',
                    controller: 'NewItemController'
                }
            }
        })
        .state('app.singleItem', {
            url: '/items/:itemId/',
            views: {
                'content': {
                    templateUrl: 'templates/item/single_item.html',
                    controller: 'SingleItemController'
                }
            }
        })
        .state('app.tagList', {
            url: '/tags/',
            views: {
                'content': {
                    templateUrl: 'templates/tagool/tag_list.html',
                    controller: 'TagsController'
                }
            }
        })
        .state('app.tagDetail', {
            url: '/tags/:tagSlug/',
            views: {
                'content': {
                    templateUrl: 'templates/tagool/tag_detail.html',
                    controller: 'TagsDetailController'
                }
            }
        });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/');
}

angular.module('tiwunAwesome.konfig.Konfig')
    .config(Konfig);

Konfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];
