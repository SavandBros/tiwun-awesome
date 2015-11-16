/*global angular*/
'use strict';

/**
 * @class tiwunAwesome.item.directives.ItemDirective
 * @namespace tiwunAwesome.item.directives.ItemDirective
 * @returns {{restrict: string, scope: {scope: string}, templateUrl: string}}
 */
function ItemDirective() {
    return {
        restrict: 'E',
        scope: {
            item: '=',
            image: '=',
            upVote: '&',
            downVote: '&',
            type: '='
        },
        templateUrl: 'templates/item/directives/item_directive.html'
    }
}

angular.module('tiwunAwesome.item.directives.ItemDirective', [])
    .directive('item', ItemDirective);
