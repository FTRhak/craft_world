(function (ng, app) {
    'use strict';

    app.ShopDialogController = ng.core.Component({
        selector: 'shop-dialog',
        template: `
            <div class="shop-dialod">
                <ul class="shop-item-list">
                    <li class="shop-item" *ngFor="#item of models; #i=index" title="{{item.name}}">
                        <i class="shop-item-icon" [ngStyle]="{'background-image': 'url('+item.src+')'}"></i>
                        <span>{{item.name}}</span>
                    </li>
                </ul>
            </div>
        `,
    }).Class({
        constructor: function ShopDialogController() {
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

    let PopupController = app.createPopUp('popup-dialog', app.ShopDialogController, 'shop-dialog', { title: "Shop" });

    app.ShopController = ng.core.Component({
        selector: 'shop-cantroller',
        template: `
            <h2>Shop</h2>
            <br/><br/>
            <span (click)="actionTrade()">Trade</span>
            <popup-dialog  *ngIf="popupState.shown" [popupState]="popupState"></popup-dialog>
        `,
        directives: [PopupController]
    }).Class({
        constructor: function ShopController() {
            this.popupState = { shown: false };
        },
        actionTrade: function () {
            this.popupState.shown = !this.popupState.shown;
        }
    });

})(ng, window.app || (window.app = {}));