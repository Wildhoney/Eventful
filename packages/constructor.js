(function($scope) {

    "use strict";

    $scope.eventful = {

        /**
         * @property _subscriptions
         * @type {Object}
         * @default {}
         * @private
         */
        _subscriptions: [],

        /**
         * @method subscribe
         * @see Eventful.Subscriber.subscribe
         * @return {Object}
         */
        subscribe: Eventful.Subscriber.subscribe,

        /**
         * @method unsubscribe
         * @see Eventful.Subscriber.unsubscribe
         * @return {Object}
         */
        unsubscribe: Eventful.Subscriber.unsubscribe,

        /**
         * @method getSubscriptions
         * @see Eventful.Subscriber.getSubscriptions
         * @return {Object}
         */
        getSubscriptions: Eventful.Subscriber.getSubscriptions

    };

})(window);