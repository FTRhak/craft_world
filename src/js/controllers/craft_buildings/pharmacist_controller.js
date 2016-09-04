(function (ng, app) {
    'use strict';

    app.PharmacistController = ng.core.Component({
        selector: 'pharmacist-controller',
        template: `
            <div class="handicraft-workshop pharmacist-woodworker">
                <a [routerLink]="['CraftStreet']" class="door-exit"></a>
                <i class="workshop-closed">Closed</i>
            <div>
        `,
        directives: [ng.router.ROUTER_DIRECTIVES]
    }).Class({
        constructor: function PharmacistController() {
            //console.log('call directive');
        }
    });

})(ng, window.app || (window.app = {}));