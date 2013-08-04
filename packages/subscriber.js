/**
 * @module Eventful
 * @submodule Subscriber
 * @type {Object}
 */
Eventful.Subscriber = {

    /**
     * @property _map
     * @type {Object}
     * @default {}
     * @private
     */
    _registry: {},

    /**
     * @method subscribe
     * @param scope {Object}
     * @param method {String}
     * @param token {String}
     * @return {Boolean}
     */
    subscribe: function(scope, method, token) {

        if (!this._registry[token]) {

            // If the token doesn't already exist in the registry, then we need
            // to initialise it by creating an empty array.
            this._registry[token] = [];

        }

        // Push the new subscription into the registry.
        this._registry[token].push({ scope: scope, method: method });

    },

    /**
     * @method unsubscribe
     * @param scope {Object}
     * @param method {String}
     * @param token {String}
     * @return {Boolean}
     */
    unsubscribe: function(scope, method, token) {
        
        delete this._registry[token];

    },

    /**
     * @method getSubscriptions
     * @return {Object}
     */
    getSubscriptions: function() {

        return this._registry;

    }

};