(function (ng, app) {
    'use strict';
    //дубильник
    app.ToolsMasterController = ng.core.Component({
        selector: 'tools-master-controller',
        template: `
            <div class="handicraft-workshop tools-master-woodworker">
                <a [routerLink]="['CraftStreet']" class="door-exit"></a>
                <i class="workshop-closed">Closed</i>
            <div>
        `,
        directives: [ng.router.ROUTER_DIRECTIVES]
    }).Class({
        constructor: function ToolsMasterController() {
            //console.log('call directive');
        }
    });

})(ng, window.app || (window.app = {}));