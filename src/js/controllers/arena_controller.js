(function (ng, app) {
    'use strict';

    app.ArenaController = ng.core.Component({
        selector: 'arena-cantroller',
        template: `
            <h2>Arena</h2>
        `,
    }).Class({
        constructor: function ArenaController() {
            //console.log('call directive');
        }
    });

})(ng, window.app || (window.app = {}));