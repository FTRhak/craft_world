(function (ng, app) {
    'use strict';
    //дубильник
    app.TailorController = ng.core.Component({
        selector: 'tailor-controller',
        template: `
            <div class="handicraft-workshop tailor-woodworker">
                <a [routerLink]="['CraftStreet']" class="door-exit"></a>
                <i class="workshop-closed">Closed</i>
            <div>
        `,
        directives: [ng.router.ROUTER_DIRECTIVES]
    }).Class({
        constructor: function TailorController() {
            //console.log('call directive');
        }
    });

})(ng, window.app || (window.app = {}));