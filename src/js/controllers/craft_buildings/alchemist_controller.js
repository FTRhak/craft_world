(function (ng, app) {
    'use strict';
    //дубильник
    app.AlchemistController = ng.core.Component({
        selector: 'alchemist-controller',
        template: `
            <div class="handicraft-workshop alchemist-woodworker">
                <a [routerLink]="['CraftStreet']" class="door-exit"></a>
                <i class="workshop-closed">Closed</i>
            <div>
        `,
        directives: [ng.router.ROUTER_DIRECTIVES]
    }).Class({
        constructor: function AlchemistController() {
            //console.log('call directive');
        }
    });

})(ng, window.app || (window.app = {}));