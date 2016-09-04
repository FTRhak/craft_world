(function (ng, app) {
    'use strict';

app.BarController = ng.core.Component({
        selector: 'bar-cantroller',
        template: `
            <h2>Bar</h2>
        `,
    }).Class({
        constructor: function BarController() {
            //console.log('call directive');
        }
    });
    
})(ng, window.app || (window.app = {}));