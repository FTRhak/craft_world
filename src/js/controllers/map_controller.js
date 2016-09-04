(function (ng, app) {
    'use strict';

    app.MapComponent = ng.core.Component({
        //selector: '[location-view]',
        template: `
            <h2>Map</h2>
        `,
    }).Class({
        constructor: function MapComponent() {
            //console.log('call directive');
        }
    });

})(ng, window.app || (window.app = {}));