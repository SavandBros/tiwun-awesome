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
                    templateUrl: 'templates/explore.html',
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
            },
            resolve: {$title: function() { return 'Search Posts and Tags - '; }}
        })
        .state('app.register', {
            url: '/account/register',
            views: {
                'content': {
                    templateUrl: 'templates/account/register.html',
                    controller: 'RegisterController'
                }
            },
            resolve: {$title: function() { return 'Register - '; }}
        })
        .state('app.login', {
            url: '/account/login/',
            views: {
                'content': {
                    controller: 'LoginController',
                    templateUrl: 'templates/account/login.html'
                }
            },
            resolve: {$title: function() { return 'Join Tiwun - '; }}
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
            },
            resolve: {$title: function() { return 'Settings - '; }}
        })
        .state('app.newItem', {
            url: '/items/new/',
            views: {
                'content': {
                    templateUrl: 'templates/item/item_post.html',
                    controller: 'NewItemController'
                }
            },
            resolve: {$title: function() { return 'New Post - '; }}
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
            },
            resolve: {$title: function() { return 'Popular Tags - '; }}
        })
        .state('app.tagDetail', {
            url: '/tags/:tagSlug/',
            views: {
                'content': {
                    templateUrl: 'templates/tagool/tag_detail.html',
                    controller: 'TagsDetailController'
                }
            }
        })
        .state('app.editing-guide', {
            url: '/editing-guide/',
            views: {
                'content': {
                    templateUrl: 'templates/justpageit/editing-guide.html'
                }
            }
        })
        .state('app.about', {
            url: '/about/',
            views: {
                'content': {
                    templateUrl: 'templates/justpageit/about.html'
                }
            }
        })
        .state('app.terms-of-service', {
            url: '/terms-of-service/',
            views: {
                'content': {
                    templateUrl: 'templates/justpageit/tos.html'
                }
            }
        })
        .state('app.faq', {
            url: '/faq/',
            views: {
                'content': {
                    templateUrl: 'templates/justpageit/faq.html'
                }
            }
        })
        .state('app.privacy_policy', {
            url: '/privacy-policy/',
            views: {
                'content': {
                    templateUrl: 'templates/justpageit/privacy_policy.html'
                }
            }
        });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/');
}

angular.module('tiwunAwesome.konfig.Konfig')
    .config(Konfig);

Konfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];
