(function (ng, app) {
    'use strict';

    app.IconNavigationComponent = ng.core.Component({
        selector: '[game-navigation]',
        template: `
            <div class="nav-map-panel">
                <a class="nav-home" [routerLink]="['Home']"></a>
                <a class="nav-map" [routerLink]="['Map']"></a>
            </div>
        `,
        directives: [ng.router.ROUTER_DIRECTIVES]
        //providers: [app.Http]
    }).Class({
        constructor: [ng.router.Router, function (router) {

        }]
    });

})(ng, window.app || (window.app = {}));