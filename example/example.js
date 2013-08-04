(function(eventful) {

    var nameSetter = {

        set: function() {
            var input   = document.querySelector('input.name'),
                value   = input.value;

            eventful.publish('name-changed', value);
        },

        registerClickEvent: function() {
            var input       = document.querySelector('input.button');
            input.onclick   = this.set;
        }

    };

    var nameGetter = {
      
        get: function(value) {
            var strong          = document.querySelector('strong.name');
            strong.innerHTML    = value;
        },

        registerSubscribeEvent: function() {
            eventful.subscribe(nameGetter, 'get', 'name-changed');
        }

    };

    nameSetter.registerClickEvent();
    nameSetter.registerSubscribeEvent();

})(window.Eventful);