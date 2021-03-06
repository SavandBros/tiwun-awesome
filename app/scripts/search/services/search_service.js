/*global angular*/
'use strict';

/**
 * Search Service
 *
 * @class SearchService
 * @param $http
 * @param ENV
 * @returns {{search: tiwunAwesome.basement.services.SearchService.search}}
 * @namespace tiwunAwesome.sushial.services
 */
function SearchService($http, ENV) {

    /**
     * Search the tiwun database for items.
     *
     * @param query Search query object.
     * @param {Number} pageNumber
     * @returns {Promise}
     * @memberOf tiwunAwesome.basement.services.SearchService
     */
    function search(query, pageNumber) {
        return $http.get(ENV.apiEndpoint + 'search/', {
            params: {
                title: query.text,
                page: pageNumber,
                resource_type: ENV.resourceType.list
            }
        });
    }

    return {
        search: search
    }
}


angular.module('tiwunAwesome.search.services.SearchService')
    .factory('SearchService', SearchService);

SearchService.$inject = ['$http', 'ENV'];
