(function (ng, app) {
    'use strict';

    app.WeaponSmithyController = ng.core.Component({
        selector: 'weapon-smithy-controller',
        template: `
            <div class="handicraft-workshop weapon-smithy-woodworker">
                <a [routerLink]="['CraftStreet']" class="door-exit"></a>
                <i class="workshop-closed">Closed</i>
            <div>
        `,
        directives: [ng.router.ROUTER_DIRECTIVES]
    }).Class({
        constructor: function WeaponSmithyController() {
            //console.log('call directive');
        }
    });

})(ng, window.app || (window.app = {}));