/*global angular*/
'use strict';

/**
 * User Profile Controller
 *
 * @class UserProfileController
 * @namespace tiwunAwesome.account.controllers.UserProfileController
 */
function UserProfileController($scope, $stateParams, $log, UserService, ItemService, CommentService) {
    $scope.profileItems = [];
    $scope.profileComments = [];
    $scope.pageCounter = 0;
    $scope.currentTab = '';

    $scope.activateTab = function(tab) {

        if (tab != $scope.currentTab) {
            $scope.currentTab = tab;
            $scope.pageCounter = 1;

            if (tab === 'items') {
                ItemService.items({
                    user_id: $scope.profile.id,
                    page: 1 // TODO: Maybe default behavior?
                }).then(
                    function(data, status, headers, config) {
                        $scope.profileItems = data.data.items;
                        // $('.grid').matchHeight();
                    },
                    function(data, status, headers, config) {
                        $log.error('Error in getting user items: ' + data.error);
                    }
                );
            }

            else if (tab == 'comments') {
                // Retrieve user's comment.
                CommentService.userComments($scope.profile.id, 1).then(
                    function(data, status, headers, config) {
                        $scope.profileComments = data.data.comments;
                        $('.grid').matchHeight();
                    },
                    function(data, status, headers, config) {
                        $log.error("[error] on getting comments!");
                        $log.error(data.error);
                    }
                );
            }
        }
    };

    $scope.loadMore = function(tab) {

        if ($scope.currentTab != tab)
            $scope.pageCounter = 0;

        if (tab === 'items') {
            ItemService.items({
                user_id: $stateParams.userId,
                page: ++$scope.pageCounter
            }).then(
                function(data, status, headers, config) {
                    $scope.profileItems = $scope.profileItems.concat(data.data.items);
                    $scope.pageHasNext = data.data.page_has_next;

                    $scope.$broadcast('scroll.infiniteScrollComplete');
                },
                function(data, status, headers, config) {
                    $log.error(data.error);
                }
            );
        }

        else if (tab === 'comments') {
            // Retrieve user's comment.
            CommentService.userComments($scope.profile.id, ++$scope.pageCounter).then(
                function(data, status, headers, config) {
                    $scope.profileComments = $scope.profileComments.concat(data.data.comments);
                },
                function(data, status, headers, config) {
                    $log.error("[error] on getting comments!");
                    $log.error(data.error);
                }
            );
        }

        $scope.currentTab = tab;
    };

    /**
     * Actions to be performed when this controller is instantiated
     *
     * @method constructor
     * @memberOf UserProfileController
     */
    function constructor() {
        UserService.get($stateParams.userId).then(
            function(data, status, headers, config) {
                $scope.profile = data.data.user;
                $scope.activateTab('items');
            },
            function(data, status, headers, config) {
                $log.error('Error in getting user: ' + data.error);
            }
        );
    }

    constructor();
}


angular.module('tiwunAwesome.account.controllers.UserProfileController', [
        'tiwunAwesome.account.services.UserService',
        'tiwunAwesome.item.services.ItemService',
        'tiwunAwesome.sushial.services.CommentService'
    ])
    .controller('UserProfileController', UserProfileController);

UserProfileController.$inject = ['$scope', '$stateParams', '$log', 'UserService', 'ItemService', 'CommentService'];
