/**
 * @module Eventful
 * @submodule Subscriber
 * @type {Object}
 */
Eventful.Subscriber = {

    /**
     * @method subscribe
     * @param scope {Object}
     * @param method {String}
     * @param token {String}
     * @return {Boolean}
     */
    subscribe: function subscribe(scope, method, token) {

        if (!this._subscriptions[token]) {

            // If the token doesn't already exist in the registry, then we need
            // to initialise it by creating an empty array.
            this._subscriptions[token] = [];

        }

        // Push the new subscription into the registry.
        this._subscriptions[token].push({ scope: scope, method: method });
        return true;

    },

    /**
     * @method unsubscribe
     * @param scope {Object}
     * @param method {String}
     * @param token {String}
     * @return {Boolean}
     */
    unsubscribe: function unsubscribe(scope, method, token) {

        delete this._subscriptions[token];
        return true;

    },

    /**
     * @method getSubscriptions
     * @param scope {Object}
     * @param method {String}
     * @param token {String}
     * @return {Object}
     */
    getSubscriptions: function getSubscriptions(scope, method, token) {

        // Produce an object of the arguments, as well as their name.
        var args = { scope: scope, method: method, token: token };

        return this._subscriptions.filter(function(subscription) {

            // Iterate over all of the arguments. If the argument is defined then we'll
            // ensure the returned subscriptions match that/those argument(s).
            for (var arg in args) if (args.hasOwnProperty(arg)) {

                if (typeof arg === 'undefined' || typeof arg === 'null') {

                    // If the argument hasn't been set, then by default it's accepted.
                    continue;

                }

                if (subscription[arg] !== arg) {

                    // If the subscription's argument doesn't match the passed in argument
                    // then we'll remove this subscription from the return collection.
                    return false;

                }

            }

            // Otherwise it's a subscription we're looking for!
            return true;

        });

    }

};