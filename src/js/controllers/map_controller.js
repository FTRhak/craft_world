(function (ng, app) {
    'use strict';

    app.MapComponent = ng.core.Component({
        //selector: '[map-view]',
        template: `
            <div class="map">
                <a [routerLink]="['City']" class="map-place location-0" >City</a>
                <a [routerLink]="['Location', {'id':location.id}]"  class="map-place location-{{location.id}}" *ngFor="#location of mapLocations">{{location.name}}</a>
            </div>
        `,
        directives: [ng.router.ROUTER_DIRECTIVES]
    }).Class({
        constructor: function MapComponent() {
            //console.log('call directive');
            this.mapLocations = [
                {
                    id: 1,
                    name: "Forest1",
                    resources: ['metal', 'cristal', 'stone', 'animal'],
                    area_path: "",
                },
                {
                    id: 2,
                    name: "Mound",
                    resources: ['metal', 'cristal', 'stone', 'animal'],
                    area_path: "",
                },
                {
                    id: 3,
                    name: "Forest2",
                    resources: ['animal', 'bug'],
                    area_path: "",
                },
                {
                    id: 4,
                    name: "Озеро1",
                    resources: ['fish', 'animal', 'bug'],
                    area_path: "",
                }
            ];
        }
    });

})(ng, window.app || (window.app = {}));