(function (ng, app) {
    'use strict';
    //Плавильня
    app.SmelteryController = ng.core.Component({
        selector: 'smeltery-controller',
        template: `
            <div class="handicraft-workshop smeltery-woodworker">
                <a [routerLink]="['CraftStreet']" class="door-exit"></a>
                <i class="workshop-closed">Closed</i>
            <div>
        `,
        directives: [ng.router.ROUTER_DIRECTIVES]
    }).Class({
        constructor: function SmelteryController() {
            //console.log('call directive');
        }
    });

})(ng, window.app || (window.app = {}));