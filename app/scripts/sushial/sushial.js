(function() {
    'use strict';

    angular.module('tiwunAwesome.sushial', [
        'tiwunAwesome.sushial.services.CommentService',
        'tiwunAwesome.sushial.services.VoteService'
    ]);

    angular.module('tiwunAwesome.sushial.services.CommentService', []);
    angular.module('tiwunAwesome.sushial.services.VoteService', []);
})();
