(function (ng, app) {
    'use strict';

    app.CraftStreetController = ng.core.Component({
        selector: 'craft-street-controller',
        template: `
            <div class="craft-street">
                <a [routerLink]="['City']" class="move-to-main-street">Main Street</a>
                <a [routerLink]="['WoodWorker']" class="move-to move-to-woodworker">WoodWorker</a>
                <a [routerLink]="['Mason']" class="move-to move-to-mason">Mason</a>
                <a [routerLink]="['Smeltery']" class="move-to move-to-smeltery">Smeltery</a>
                <a [routerLink]="['Herbal']" class="move-to move-to-herbal">Herbal</a>
                <a [routerLink]="['WeaponSmithy']" class="move-to move-to-weaponsmithy">WeaponSmithy</a>
                <a [routerLink]="['ArmorSmithy']" class="move-to move-to-armorsmithy">ArmorSmithy</a>
                <a [routerLink]="['Tailor']" class="move-to move-to-tailor">Tailor</a>
                <a [routerLink]="['Alchemist']" class="move-to move-to-alchemist">Alchemist</a>
                <a [routerLink]="['Pharmacist']" class="move-to move-to-pharmacist">Pharmacist</a>
                <a [routerLink]="['Cook']" class="move-to move-to-cook">Cook</a>
                <a [routerLink]="['Jeweler']" class="move-to move-to-jeweler">Jeweler</a>
                <a [routerLink]="['Tanner']" class="move-to move-to-tanner">Tanner</a>
                
            </div>
        `,
        directives: [ng.router.ROUTER_DIRECTIVES]
    }).Class({
        constructor: function CraftStreetController() {
            //console.log('call directive');
        }
    });

})(ng, window.app || (window.app = {}));