(function (ng, app) {
    'use strict';

    app.JewelerController = ng.core.Component({
        selector: 'jeweler-controller',
        template: `
            <div class="handicraft-workshop jeweler-woodworker">
                <a [routerLink]="['CraftStreet']" class="door-exit"></a>
                <i class="workshop-closed">Closed</i>
            <div>
        `,
        directives: [ng.router.ROUTER_DIRECTIVES]
    }).Class({
        constructor: function JewelerController() {
            //console.log('call directive');
        }
    });

})(ng, window.app || (window.app = {}));