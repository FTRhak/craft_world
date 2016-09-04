(function (ng, app) {
    'use strict';

    app.CookController = ng.core.Component({
        selector: 'cook-controller',
        template: `
            <div class="handicraft-workshop cook-woodworker">
                <a [routerLink]="['CraftStreet']" class="door-exit"></a>
                <i class="workshop-closed">Closed</i>
            <div>
        `,
        directives: [ng.router.ROUTER_DIRECTIVES]
    }).Class({
        constructor: function CookController() {
            //console.log('call directive');
        }
    });

})(ng, window.app || (window.app = {}));