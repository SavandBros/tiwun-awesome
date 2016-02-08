/*global angular*/
'use strict';

/**
 * NewItemController
 *
 * @class NewItemController
 * @namespace tiwunAwesome.item.controllers.NewItemController
 */
function NewItemController($scope, $state, $log, AuthenticationService, ItemService, MoneyCurrencyService) {

    $scope.auth = AuthenticationService;
    $scope.moneyCurrencies = MoneyCurrencyService.currencyFormats();
    $scope.item = {};

    function constructor() {
        if (!AuthenticationService.isAuthenticated()) {
            $state.go('app.login');
        }
    }

    constructor();

    /**
     * create
     * Create a new Item
     *
     * @memberOf tiwunAwesome.item.controllers.NewItemController
     */
    $scope.create = function(form, item) {

        $scope.formSubmitted = true;

        if (form.$valid) {

            var payload = {
                title: item.title,
                description: item.description,
                tags: item.tags
            };

            if (!item.isFree) {
                payload.min_price = item.minPrice;
                payload.max_price = item.maxPrice;
                payload.compare_at_price = item.discountedPrice;
                payload.currency = item.moneyCurrency;
            };

            payload.tags = item.tags.split(' ');

            ItemService.create(payload).then(
                function(data, status, headers, config) {
                    $state.go('app.singleItem', {
                        itemId: data.data.id
                    });
                },
                function(data, status, headers, config) {
                    $log.error('Error happened on creating new item: ' + data.error);
                }
            )
        }
    };

    /**
     * cancel
     * Cancel creation of new item and go back!
     *
     * @memberOf tiwunAwesome.item.controllers.NewItemController
     */
    $scope.cancel = function() {
        //$ionicHistory.goBack();
    };

    /**
     * highlight
     *
     * Highlight the current text from the term
     *
     * @method highlight
     * @param {String} str
     * @param {String} tag
     * @returns {XML|*|void|string}
     * @memberOf tiwunAwesome.item.controllers.NewItemController
     */
    function highlight(str, tag) {
        var highlightRegex = new RegExp('(' + tag + ')', 'gi');

        return str.replace(highlightRegex, '<strong>$1</strong>')
    }

    /**
     * suggestTag
     *
     * Suggest tag will be used by `suggestTagDelimited` method.
     *
     * @method suggestTag
     * @param {String} tag
     * @returns {Array}
     * @memberOf tiwunAwesome.item.controllers.NewItemController
     */
    function suggestTag(tag) {
        var q = term.toLowerCase().trim();
        var results = [];


        // Find the first 10 cities that start with `term`
        for (var i = 0; i < tags.length && results.length < 10; i++) {
            var slug = tags[i].slug;

            if (keyword.toLowerCase().indexOf(q) === 0) {
                results.push({
                    label: $sce.trustAsHtml(highlight(keyword, slug)),
                    value: slug
                });
            }
        }
        return results;
    }

    /**
     * suggestTagDelimited
     *
     * Suggest similar tags separated with commas
     *
     * @method suggestTagDelimited
     * @param {String} term
     * @memberOf tiwunAwesome.item.controllers.NewItemController
     */
    function suggestTagDelimited(term) {
        var ix = term.lastIndexOf(','),
            lhs = term.substring(0, ix + 1),
            rhs = term.substring(ix + 1),
            suggestions = suggestTag(rhs);

        suggestions.forEach(function(s) {
            s.value = lhs + s.value;
        });

        return suggestions;
    }

    $scope.ac_option_delimited = {
        suggest: suggestTagDelimited
    };
}


angular.module('tiwunAwesome.item.controllers.NewItemController', [
    'tiwunAwesome.item.services.ItemService',
    'tiwunAwesome.account.services.AuthenticationService',
    'tiwunAwesome.basement.services.MoneyCurrencyService'
]).controller('NewItemController', NewItemController);

NewItemController.$inject = [
    '$scope',
    '$state',
    '$log',
    'AuthenticationService',
    'ItemService',
    'MoneyCurrencyService'
];
