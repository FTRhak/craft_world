(function (ng, app) {
    'use strict';


    app.CityController = ng.core.Component({
        selector: 'city-controller',
        template: `
            <div class="city">
                <a [routerLink]="['Shop']" class="move-to move-to-shop">Shop</a>
                <a [routerLink]="['Bar']" class="move-to move-to-bar">Bar</a>
                <a [routerLink]="['Arena']" class="move-to move-to-arena">Arena</a>
                <a [routerLink]="['Auction']" class="move-to move-to-auction">Auction</a>
                <a [routerLink]="['CraftStreet']" class="move-to move-to-craft-street">Craft Street</a>
            </div>
        `,
        directives: [ng.router.ROUTER_DIRECTIVES]
    }).Class({
        constructor: function CityController() {
            //console.log('call directive');
        }
    });
    
})(ng, window.app || (window.app = {}));