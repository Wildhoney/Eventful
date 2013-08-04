(function($scope) {

    "use strict";

    $scope.Eventful = {

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

    // Instantiate Eventful! It all happens from here on in.
    $scope.eventful = new Eventful();

})(window);