/**
 * TagsDetailController
 * @class TagsDetailController
 * @namespace tiwunAwesome.tagool.controllers
 */
(function() {
    'use strict';

    angular.module('tiwunAwesome.tagool.controllers.TagsDetailController', [
            'tiwunAwesome.tagool.services.TagService'
        ])
        .controller('TagsDetailController', TagsDetailController);

    TagsDetailController.$inject = ['$scope', '$stateParams', '$log', 'TagService'];

    function TagsDetailController($scope, $stateParams, $log, TagService) {

        $scope.tagItems = [];
        $scope.pageHasNext = true;
        $scope.pageCounter = 0;
        $scope.tagName = $stateParams.tagSlug;

        $scope.loading = true;
        $scope.loadingDone = false;

        $scope.dataLoaded = true;

        /**
         * @name loadMore
         */
        $scope.loadMore = function() {

            $scope.loading = true;

            TagService.tagDetail(++$scope.pageCounter, $stateParams.tagSlug).then(
                function(data, status, headers, config) {
                    $scope.tagItems = $scope.tagItems.concat(data.data.tagged_classifies);
                    $scope.pageHasNext = data.data.page_has_next;
                    $scope.$broadcast('scroll.infiniteScrollComplete');
                    $scope.loading = false;

                    $scope.dataLoaded = true;
                },
                function(data, status, headers, config) {

                    // If no page ever loaded
                    if (!$scope.pageCounter)
                        $scope.dataLoaded = false;

                    // If error in getting next page
                    $scope.loading = false;
                    $scope.loadingDone = true;
                }
            );
            $('.grid').matchHeight();
        };

        $scope.loadMore();
    }
})();
