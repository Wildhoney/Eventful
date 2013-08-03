describe('Ember Crossfilter', function() {

    var myObject;

    beforeEach(function() {

        myObject = {
            invokeMe: function() {

            }
        };

        eventful.clearSubscriptions();

    });

    describe('Subscriptions', function() {

        it('Can subscribe to a non-existent token.', function () {
           eventful.subscribe('name', myObject);
           expect(eventful.getSubscriptions().length).toEqual(1);
           expect(eventful.getSubscriptions()[0].token).toEqual('name');
        });

        it('Can subscribe to an existent token.', function() {
           eventful.subscribe('name', myObject);
           eventful.subscribe('name', myObject);
           expect(eventful.getSubscriptions().length).toEqual(1);
           expect(eventful.getSubscriptions()[0].token).toEqual('name');
        });

        it('Can unsubscribe individually from existing tokens.', function() {
            eventful.subscribe('name', myObject);
            eventful.unsubscribe('name', myObject);
            expect(eventful.getSubscriptions().length).toEqual(0);
        });

        it('Can unsubscribe globally from existing tokens.', function() {
            eventful.subscribe('name', myObject);
            eventful.subscribe('name', myObject);
            eventful.subscribe('name', myObject);
            eventful.unsubscribe('name');
            expect(eventful.getSubscriptions().length).toEqual(0);
        });

    });

});