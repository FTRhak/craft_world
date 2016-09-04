(function (ng, app) {
    'use strict';

    app.HerbalController = ng.core.Component({
        selector: 'herbal-controller',
        template: `
            <div class="handicraft-workshop herbal-woodworker">
                <a [routerLink]="['CraftStreet']" class="door-exit"></a>
                <i class="workshop-closed">Closed</i>
            <div>
        `,
        directives: [ng.router.ROUTER_DIRECTIVES]
    }).Class({
        constructor: function HerbalController() {
            //console.log('call directive');
        }
    });

})(ng, window.app || (window.app = {}));