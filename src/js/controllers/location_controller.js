(function (ng, app) {
    'use strict';

    app.LocationComponent = ng.core.Component({
        //selector: '[location-view]',
        template: `
            <div class="location" [ngStyle]="{'background-image': 'url(/images/locations/location-'+currentLocationId+'.png)'}">
                <h1>{{location.name}}</h1>


                <div class="collect-resources-panel">
                    <ul>
                        <li class="btn-resource resource-{{resource}}" *ngFor="#resource of location.resources" (click)="selectResource(resource)"></li>
                    </ul>
                </div>
            </div>
        `,
        directives: [ng.router.ROUTER_DIRECTIVES]
    }).Class({
        constructor: [ng.router.RouteParams, function LocationComponent(router) {
            this.currentLocationId = router.get('id');

            var mapLocations = [
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
                    resources: ['animal', 'insect'],
                    area_path: "",
                },
                {
                    id: 4,
                    name: "Озеро1",
                    resources: ['fish', 'animal', 'insect'],
                    area_path: "",
                }
            ];


            this.location = mapLocations[this.currentLocationId - 1] || {};
        }],
        selectResource: function(resourceType){
            console.log(resourceType);
        }
    });

})(ng, window.app || (window.app = {}));