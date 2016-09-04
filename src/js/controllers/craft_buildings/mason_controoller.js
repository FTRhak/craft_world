(function (ng, app) {
    'use strict';

    app.MasonController = ng.core.Component({
        selector: 'mason-controller',
        template: `
            <div class="handicraft-workshop mason-woodworker">
                <a [routerLink]="['CraftStreet']" class="door-exit"></a>
                <i class="workshop-closed">Closed</i>
            <div>
        `,
        directives: [ng.router.ROUTER_DIRECTIVES]
    }).Class({
        constructor: function MasonController() {
            //console.log('call directive');
        }
    });

})(ng, window.app || (window.app = {}));