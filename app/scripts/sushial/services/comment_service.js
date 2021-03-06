/*global angular*/
'use strict';

/**
 * @class CommentService
 * @returns {Factory}
 * @namespace tiwunAwesome.sushial.services.CommentService
 */
function CommentService($http, ENV) {
    var ObjectTypes = {
        'item': 1,
        'comment': 2,
        'tag': 3
    };

    /**
     * create
     *
     * Creating a comment for an object.
     *
     * @method create
     * @param {number} objectType Object type that is being commented on.
     * @param {string} objectPk  Object PK!
     * @param {string} commentText Comment text that is being posted on the object.
     * @memberOf tiwunAwesome.sushial.services.CommentService
     */
    function create(objectType, objectPk, commentText) {
        return $http.post(
            ENV.apiEndpoint + 'sushial/comment/', {
                object_type: objectType,
                object_pk: objectPk,
                comment: commentText
            }
        );
    }

    /**
     * remove
     * Remove comment by given ID.
     *
     * @method remove: Remove a comment from an object.
     * @param {number} commentId Object type that is being commented on.
     * @memberOf tiwunAwesome.sushial.services.CommentService
     */
    function remove(commentId) {
        return $http.delete(
            ENV.apiEndpoint + 'sushial/comment/', {
                params: {
                    comment_id: commentId
                }
            }
        );
    }

    /**
     * @name filterByObject: Filter comments by given object.
     * @param {number} objectType Object type that is being commented on.
     * @param {string} ObjectPk  Object PK!
     * @memberOf tiwunAwesome.sushial.services.CommentService
     */
    function filterByObject(objectType, ObjectPk) {
        return $http.get(
            ENV.apiEndpoint + 'sushial/comment/', {
                params: {
                    object_type: objectType,
                    object_pk: ObjectPk,
                    resource_type: ENV.resourceType.list
                }
            }
        );
    }

    /**
     * userComments
     *
     * Get user comments by given user id.
     *
     * @method userComments
     * @param {String} userId
     * @param {Number} pageNumber
     * @returns {Promise}
     * @memberOf tiwunAwesome.sushial.services.CommentService
     */
    function userComments(userId, pageNumber) {
        pageNumber = pageNumber || 1;

        return $http.get(
            ENV.apiEndpoint + 'sushial/comment/', {
                params: {
                    user_id: userId,
                    page: pageNumber,
                    resource_type: ENV.resourceType.list
                }
            }
        );
    }

    return {
        create: create,
        remove: remove,
        filterByObject: filterByObject,
        userComments: userComments,
        ObjectTypes: ObjectTypes
    };
}

angular.module('tiwunAwesome.sushial.services.CommentService', [])
    .factory('CommentService', CommentService);

CommentService.$inject = ['$http', 'ENV'];
