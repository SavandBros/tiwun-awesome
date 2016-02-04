/*global angular*/
'use strict';

/**
 * @class tiwunAwesome.item.directives.TagDirective
 * @namespace tiwunAwesome.item.directives.TagDirective
 * @returns {{restrict: string, scope: {scope: string}, templateUrl: string}}
 */
function TagDirective() {
    return {
        restrict: 'E',
        scope: {
            tag: '=',
            forItem: '&',
            type: '='
        },
        templateUrl: 'templates/tagool/directives/tag_directive.html'
    }
}

angular.module('tiwunAwesome.tagool.directives.TagDirective', [])
    .directive('tagool', TagDirective);
