(function (ng, app) {
    'use strict';

    app.FieldCellComponent = ng.core.Component({
        selector: 'field-cell',
        template: `
            <div class="cell-click" (click)="showActionPanel($event)"></div>
            <div class="fs" [ngClass]="{'hidden': !shownActionsPanel.plant && !shownActionsPanel.process && !shownActionsPanel.finish}" (click)="hideActionPanel()"></div>
            <div class="action-panel new-plant">
                <div class="action-button action-plant" [ngClass]="{'hidden': !shownActionsPanel.plant}"></div>
            </div>
            <div class="action-panel process-plant" [ngClass]="{'hidden': !shownActionsPanel.process}">
                <div class="action-button action-pour"></div>
                <div class="action-button action-fertilize"></div>
                <div class="action-button action-remove"></div>
            </div>
            <div class="action-panel gather-plant" [ngClass]="{'hidden': !shownActionsPanel.finish}">
                <div class="action-button action-harvest"></div>
                <div class="action-button action-seed"></div>
                <div class="action-button action-remove"></div>
            </div>
        `,
        //providers: [app.Http]
    }).Class({
        constructor: [ng.core.ElementRef,ng.core.Renderer, function FieldCellComponent(el, renderer) {
            this.element = el.nativeElement;
            this.renderer = renderer;

            this.shownActionsPanel = {
                plant: false,
                process: false,
                finish: false
            };
        }],
        ngOnInit () {
            
        },

        showActionPanel: function($event) {
            //console.log("openActionPanel",$event);
            this.shownActionsPanel.plant = !this.shownActionsPanel.plant;
        },
        hideActionPanel: function() {
            this.shownActionsPanel.plant = false;
            this.shownActionsPanel.process = false;
            this.shownActionsPanel.finish = false;
        }
    });

})(ng, window.app || (window.app = {}));