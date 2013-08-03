describe('Eventful', function() {

    var myObject;

    beforeEach(function() {

        myObject = {
            getName: function() {

            }
        };

        //eventful.applyPrototypes();
        eventful.clearSubscriptions();

    });

    describe('Subscriptions', function() {

        it('Can subscribe to a non-existent token.', function () {
           eventful.subscribe(myObject, 'getName', 'name');
           expect(eventful.getSubscriptions().length).toEqual(1);
           expect(eventful.getSubscriptions()[0].token).toEqual('name');
        });

        it('Can subscribe to an existent token.', function() {
           eventful.subscribe(myObject, 'getName', 'name');
           eventful.subscribe(myObject, 'getName', 'name');
           expect(eventful.getSubscriptions().length).toEqual(1);
           expect(eventful.getSubscriptions()[0].token).toEqual('name');
        });

        it('Can unsubscribe individually from existing tokens.', function() {
            eventful.subscribe(myObject, 'getName', 'name');
            eventful.unsubscribe(myObject, 'getName', 'name');
            expect(eventful.getSubscriptions().length).toEqual(0);
        });

        it('Can unsubscribe globally from existing tokens.', function() {
            eventful.subscribe(myObject, 'getName', 'name');
            eventful.subscribe(myObject, 'getName', 'name');
            eventful.subscribe(myObject, 'getName', 'name');
            eventful.unsubscribe(myObject, 'name');
            expect(eventful.getSubscriptions().length).toEqual(0);
        });

    });

});