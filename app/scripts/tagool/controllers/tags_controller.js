/*global angular*/
'use strict';

/**
 * Tags Controller
 *
 * @class TagsController
 * @param {Object} $scope
 * @param {Object} $log
 * @param {TagService} TagService
 * @namespace tiwunAwesome.tagool.controllers
 */
function TagsController($scope, $log, TagService) {
    $scope.tags = [];
    $scope.pageHasNext = true;
    $scope.pageCounter = 0;
    $scope.loading = true;

    /**
     * Load More
     *
     * @method loadMore
     * @memberOf tiwunAwesome.tagool.controllers.TagsController
     */
    $scope.loadMore = function() {
        $scope.loading = true;

        TagService.all(++$scope.pageCounter).then(
            function(data, status, headers, config) {
                $scope.tags = $scope.tags.concat(data.data.tags);
                $scope.pageHasNext = data.data.page_has_next;
                $scope.$broadcast('scroll.infiniteScrollComplete');
                $scope.loading = false;
            },
            function(data, status, headers, config) {
                $log.error(data.error);
            }
        );
    };

    $scope.loadMore();
}

angular.module('tiwunAwesome.tagool.controllers.TagsController', [
        'tiwunAwesome.tagool.services.TagService'
    ])
    .controller('TagsController', TagsController);

TagsController.$inject = ['$scope', '$log', 'TagService'];
