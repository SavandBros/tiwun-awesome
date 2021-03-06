/*global angular*/
'use strict';

/**
 * Index Controller
 *
 * @param $scope
 * @param $state
 * @param $log
 * @param gettext
 * @param AuthenticationService
 * @param ItemService
 * @param VoteService
 * @class IndexController
 * @namespace tiwunAwesome.basement.controllers.IndexController
 */
function IndexController($scope, $state, $log, gettext, AuthenticationService, TagService, SearchService, SearchItemFactory) {


    // $scope.items = [];
    // ItemService.all(1, null, 'index/').then(
    //     function(data, status, headers, config) {
    //         $scope.items = data.data.items;
    //         $scope.pageHasNext = data.data.page_has_next;

    //     },
    //     function(data, status, headers, config) {
    //         $log.error(data.error);
    //     }
    // );

    $scope.tags = [];

    function loadTags(page) {
        TagService.all(page).then(
            function(data, status, headers, config) {

                $scope.tags = $scope.tags.concat(data.data.tags);
                $scope.pageHasNext = data.data.page_has_next;
            },
            function(data, status, headers, config) {

                $log.error(data.error);
            }
        );
    }

    loadTags(1);

    // Search

    var pageHasNext = true;
    var pageNumber = 0;
    var searchQuery = {};
    var keywords = [];

    $scope.tags = [];
    $scope.items = [];
    $scope.shouldSpin = false;

    function constructor() {
        TagService.all().then(
            function(data, status, headers, config) {
                $scope.tags = data.data.tags;
            },
            function(data, status, headers, config) {
                $log.error(data.error);
            }
        );
    }

    /**
     * Search all over the place!
     *
     * @method search
     * @param {Object} form
     * @memberOf tiwunAwesome.search.controllers.SearchController
     */
    $scope.search = function(form) {

        pageNumber = 1;
        searchQuery.text = form.query.$modelValue;
        $scope.shouldSpin = true;

        SearchService.search(searchQuery, pageNumber).then(
            function(data, status, headers, config) {
                $scope.items = data.data.items;
                $scope.pageHasNext = data.data.page_has_next;
                $scope.shouldSpin = false;
                $scope.noResult = $scope.items.length === 0;
            },
            function(data, status, headers, config) {
                $log.error("Error in search: " + data.data.error);
            }
        );
    };

    /**
     * Load More
     *
     * @method loadMore
     * @memberOf tiwunAwesome.search.controllers.SearchController
     */
    $scope.loadMoreSearch = function() {

        if (!pageHasNext) return 0;

        SearchService.search(searchQuery, ++pageNumber).then(
            function(data, status, headers, config) {
                $scope.items = $scope.items.concat(data.data.items);
                $scope.pageHasNext = data.data.page_has_next;

                $scope.$broadcast('scroll.infiniteScrollComplete');
            },
            function(data, status, headers, config) {
                $log.error("Error in search: " + data.data.error);
            }
        );
    };

    // Logging
    // console.log($scope.tags);

    //console.log($scope.items);

    //$scope.itemKinds = {
    //    itemKindHottest: {
    //        text: gettext('Hottest'),
    //        icon: 'fireball',
    //        apiPostfix: 'index/'
    //    },
    //    itemKindNewest: {
    //        text: gettext('Newest'),
    //        icon: 'stats-bars',
    //        apiPostfix: 'free-items/'
    //    },
    //    itemKindFree: {
    //        text: gettext('Free'),
    //        icon: 'social-usd-outline',
    //        apiPostfix: 'newest-items/'
    //    }
    //};
    //$scope.currentItemKind = $scope.itemKinds.itemKindHottest;
    //
    //$scope.isAuthenticated = AuthenticationService.isAuthenticated();
    //$scope.items = [];
    //$scope.pageHasNext = true;
    //$scope.pageCounter = 0;
    //$scope.user = AuthenticationService.getAuthenticatedUser();

    /**
     * Update item's vote on the frontend.
     * Based on the vote type from server, the associated vote button will be highlighted.
     *
     * @method updateItemVote
     * @param {Object} vote
     * @param {Object} item
     * @memberOf tiwunAwesome.item.controllers.SingleItemController
     */
    //function updateItemVote(vote, item) {
    //    item.userVote = {};
    //    if (vote.vote_type === VoteService.voteTypes.up) {
    //        item.userVote.upVote = true;
    //    } else if (vote.vote_type === VoteService.voteTypes.down) {
    //        item.userVote.downVote = true;
    //    }
    //}

    /**
     * Load More
     *
     * @method loadMore
     * @memberOf tiwunAwesome.basement.controllers.IndexController
     */
    //$scope.loadMore = function() {
    //    ItemService.all(++$scope.pageCounter, null, $scope.currentItemKind.apiPostfix).then(
    //        function(data, status, headers, config) {
    //            $scope.items = $scope.items.concat(data.data.items);
    //            $scope.pageHasNext = data.data.page_has_next;
    //
    //            $scope.$broadcast('scroll.infiniteScrollComplete');
    //        },
    //        function(data, status, headers, config) {
    //            $log.error(data.error);
    //        }
    //    );
    //};

    /**
     * Check if item has been liked by the current logged in user.
     *
     * If the user is not logged in, then check will be skipped.
     */
    //$scope.$on('scroll.infiniteScrollComplete', function() {
    //    if ($scope.user) {
    //        angular.forEach($scope.items.slice($scope.items.length - 5), function(item, v) {
    //            VoteService.userVotedForObject(
    //                VoteService.objectTypes.item,
    //                item.id,
    //                AuthenticationService.getAuthenticatedUser().id
    //            ).then(
    //                function(data, status, headers, config) {
    //                    updateItemVote(data.data.votes, item);
    //                },
    //                function(data, status, headers, config) {
    //                    $log.error(data.data.error);
    //                }
    //            );
    //        });
    //    }
    //});

    /**
     * Up vote for the current item in the single item page.
     *
     * @method upVote
     * @param {Object} item
     * @memberOf tiwunAwesome.item.controllers.SingleItemController
     */
    //$scope.upVote = function(item) {
    //    if (!AuthenticationService.isAuthenticated()) {
    //        $state.go('app.login');
    //        return;
    //    }
    //
    //    VoteService.upVote(VoteService.objectTypes.item, item.id).then(
    //        function(data, status, headers, config) {
    //            updateItemVote(data.data.vote, item);
    //        },
    //        function(data, status, headers, config) {
    //            $log.error(data.error);
    //        }
    //    )
    //};

    /**
     * Down vote for the current item in the single item page.
     *
     * @method downVote
     * @param {Object} item
     * @memberOf tiwunAwesome.item.controllers.SingleItemController
     */
    //$scope.downVote = function(item) {
    //    if (!AuthenticationService.isAuthenticated()) {
    //        $state.go('app.login');
    //        return;
    //    }
    //
    //    VoteService.downVote(VoteService.objectTypes.item, item.id).then(
    //        function(data, status, headers, config) {
    //            updateItemVote(data.data.vote, item);
    //        },
    //        function(data, status, headers, config) {
    //            $log.error(data.error);
    //        }
    //    )
    //};

    /**
     * setItemKind
     * Set Item Kind ;)
     *
     * @method setItemKind
     * @param {String|Object} itemKind
     * @memberOf tiwunAwesome.item.controllers.SingleItemController
     */
    //$scope.setItemKind = function(itemKind) {
    //    if ($scope.itemKinds[itemKind] === $scope.currentItemKind) {
    //        return;
    //    }
    //
    //    $scope.currentItemKind = $scope.itemKinds[itemKind];
    //    $scope.pageHasNext = false;
    //    $scope.items = [];
    //    $scope.loadMore();
    //    $scope.pageCounter = 0;
    //}
}

angular.module('tiwunAwesome.basement.controllers.IndexController', [
        'tiwunAwesome.basement.services.ToastService',
        'tiwunAwesome.account.services.AuthenticationService',
        'tiwunAwesome.tagool.services.TagService'
    ])
    .controller('IndexController', IndexController);

IndexController.$inject = [
    '$scope',
    '$state',
    '$log',
    'gettext',
    'AuthenticationService',
    'TagService',
    'SearchService',
    'SearchItemFactory'
];
