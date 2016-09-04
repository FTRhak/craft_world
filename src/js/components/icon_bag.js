(function (ng, app) {
    'use strict';


    app.BagDialogController = ng.core.Component({
        selector: 'bag-dialog',
        template: `
            <div class="bag-dialod">
                hello
            </div>
        `,
    }).Class({
        constructor: function BagDialogController() {
            this.getData((data)=>this.models = data);
            console.log("Data:",this.models);
        },
        getData: function(callback){
            let data = [
                {
                    id: 1,
                    type: "tool",
                    name: "axe",
                    src: '/images/items/axe.png',
                    price: 12
                },
                {
                    id: 2,
                    type: "skin",
                    name: "bear-skin",
                    src: '/images/items/bear-skin.png',
                    price: 3
                }
            ];
            callback(data);
        }

    });

    let PopupController = app.createPopUp('popup-bag-dialog', app.BagDialogController, 'bag-dialog', { title: "Bag" });

    app.IconUserBagComponent = ng.core.Component({
        selector: '[game-user-bag]',
        template: `
            <span class="user-bag" (click)="actionBag()"></span>
            <popup-bag-dialog *ngIf="popupState.shown" [popupState]="popupState"></popup-bag-dialog>
        `,
        //providers: [app.Http]
        directives: [PopupController]
    }).Class({
        constructor: [function () {
            this.popupState = { shown: false };
        }],
        actionBag: function () {
            this.popupState.shown = !this.popupState.shown;
        }
    });


})(ng, window.app || (window.app = {}));