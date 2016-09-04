(function (ng, app) {
    'use strict';

    app.ArmorSmithyController = ng.core.Component({
        selector: 'armor-smithy-controller',
        template: `
            <div class="handicraft-workshop armor-smithy-woodworker">
                <a [routerLink]="['CraftStreet']" class="door-exit"></a>
                <i class="workshop-closed">Closed</i>
            <div>
        `,
        directives: [ng.router.ROUTER_DIRECTIVES]
    }).Class({
        constructor: function ArmorSmithyController() {
            //console.log('call directive');
        }
    });

})(ng, window.app || (window.app = {}));