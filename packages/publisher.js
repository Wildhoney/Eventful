/**
 * @module Eventful
 * @submodule Publisher
 * @type {Object}
 */
Eventful.Publisher = {

    /**
     * @method publish
     * @param token {String}
     * @param packet {Object,String,Number,Boolean}
     * @return {Number}
     */
    publish: function publish(token, packet) {

        // Find all of the subscribers to this token.
        var subscribers = this.getSubscriptions(null, null, token),
            successful  = 0;

        // Iterate over the subscribers we've found for the token.
        for (var index = 0, length = subscribers.length; index <= length; index++) {

            // Find the scope and the method to invoke on the scope.
            var scope   = subscribers[index].scope,
                method  = subscribers[index].method;

            if (typeof method[scope] !== 'function') {

                // Determine if the method on the scope is a function, and it isn't we'll output
                // a `console.error` and then continue on our merry way.
                console.error("Unable to invoke method on scope as it's not a function: " + method);
                continue;

            }

            // Invoke the method on our scope, passing in the packet that was specified
            // when the `publish` method was invoked.
            scope[method].apply(scope, packet);

            // Increment the amount of successful subscribers.
            successful++;

        }

        return successful;

    }

};