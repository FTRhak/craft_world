(function (ng, app) {
    'use strict';

    app.HomeComponent = ng.core.Component({
        selector: 'home-cantroller',
        template: `
            <div class="home">
                <a [routerLink]="['HomeFarm']" class="move-to move-to-farm"></a>
                <a [routerLink]="['City']" class="move-to move-to-city"></a>
            </div>
        `,
        directives: [ng.router.ROUTER_DIRECTIVES]
    }).Class({
        constructor: function HomeComponent() {
            //console.log('call directive');
        }
    });

})(ng, window.app || (window.app = {}));