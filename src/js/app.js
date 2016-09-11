(function (ng, app) {
    'use strict';
    

    app.ApplicationComponent = ng.core.Component({
        selector: '[app-game]',
        template: `
            <div game-settings></div>
            <div game-navigation></div>
            <div game-kbook></div>
            <div game-states></div>
            <div game-user-bag></div>
            <router-outlet></router-outlet>
        `,
        directives: [ng.router.ROUTER_DIRECTIVES,
            app.IconSettingsComponent, app.IconNavigationComponent, app.IconKnowledgeBookComponent, app.IconStatesComponent,
            app.IconUserBagComponent]
        //providers: [app.Http, app.Auth]
    }).Class({
        constructor: [ng.router.Router, function ApplicationComponent(router) {
            //user.synchronizeUser();
            router.subscribe(function (path) {
                //console.log("path changed: ",path);
            });
        }]
    });

    app.routeList = [];

    app.TruckersApplication = ng.router.RouteConfig(app.routeList.concat([
        //---SITE---
        new ng.router.Route({ path: '/city', component: app.CityController, name: 'City' }),
        new ng.router.Route({ path: '/home', component: app.HomeComponent, name: 'Home' }),
        new ng.router.Route({ path: '/home/farm', component: app.HomeFarmController, name: 'HomeFarm' }),
        new ng.router.Route({ path: '/map', component: app.MapComponent, name: 'Map' }),
        new ng.router.Route({ path: '/location/:id', component: app.LocationComponent, name: 'Location' }),
        
        new ng.router.Route({ path: '/bar', component: app.BarController, name: 'Bar' }),
        new ng.router.Route({ path: '/shop', component: app.ShopController, name: 'Shop' }),
        new ng.router.Route({ path: '/arena', component: app.ArenaController, name: 'Arena' }),
        new ng.router.Route({ path: '/auction', component: app.AuctionController, name: 'Auction' }),
        new ng.router.Route({ path: '/craftstreet', component: app.CraftStreetController, name: 'CraftStreet' }),

        new ng.router.Route({ path: '/woodworker', component: app.WoodWorkerController, name: 'WoodWorker' }),
        new ng.router.Route({ path: '/mason', component: app.MasonController, name: 'Mason' }),
        new ng.router.Route({ path: '/smeltery', component: app.SmelteryController, name: 'Smeltery' }),
        new ng.router.Route({ path: '/tanner', component: app.TannerController, name: 'Tanner' }),
        new ng.router.Route({ path: '/herbal', component: app.HerbalController, name: 'Herbal' }),
        new ng.router.Route({ path: '/weaponsmithy', component: app.WeaponSmithyController, name: 'WeaponSmithy' }),
        new ng.router.Route({ path: '/armorsmithy', component: app.ArmorSmithyController, name: 'ArmorSmithy' }),
        new ng.router.Route({ path: '/tailor', component: app.TailorController, name: 'Tailor' }),
        new ng.router.Route({ path: '/alchemist', component: app.AlchemistController, name: 'Alchemist' }),
        new ng.router.Route({ path: '/cook', component: app.CookController, name: 'Cook' }),
        new ng.router.Route({ path: '/pharmacist', component: app.PharmacistController, name: 'Pharmacist' }),
        new ng.router.Route({ path: '/jeweler', component: app.JewelerController, name: 'Jeweler' }),
        new ng.router.Route({ path: '/toolsmaster', component: app.ToolsMasterController, name: 'ToolsMaster' }),
        

        /*new ng.router.Route({ path: '/', component: app.WallComponent, name: 'Index', useAsDefault: true }),

        new ng.router.Route({ path: '/404', component: app.Site404Component, name: 'Page404' }),*/
        //new ng.router.Route({ path: '/*path', component: app.CityComponent })
    ]))(app.ApplicationComponent);

    app.routeList = [];

})(ng, window.app || (window.app = {}));