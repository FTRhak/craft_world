(function (ng, app) {
    'use strict';

    app.WoodWorkerController = ng.core.Component({
        selector: 'woodworker-controller',
        template: `
            <div class="handicraft-workshop workshop-woodworker">
                <a [routerLink]="['CraftStreet']" class="door-exit"></a>
                <i class="workshop-closed">Closed</i>
            <div>
        `,
        directives: [ng.router.ROUTER_DIRECTIVES]
    }).Class({
        constructor: function WoodWorkerController() {
            //console.log('call directive');
        }
    });

})(ng, window.app || (window.app = {}));