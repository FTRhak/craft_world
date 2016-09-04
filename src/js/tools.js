(function (ng, app) {
    'use strict';

    app.createPopUp = function (selector, component, componentSelector, data) {
        let PopupController = ng.core.Component({
            selector: selector,
            template: `
                <div class="fs"></div>
                <div class="modal-popup">
                    <div class="modal-header">
                        <span class="modal-close" (click)="closePopup()">x</span>
                        <span class="modal-title">`+ (data.title || '') + `</span>
                    </div>
                    <div class="modal-content">
                        <`+ componentSelector + `>
                    <div>
                </div>
            `,
            directives: [component],
            inputs: ['popupState']
        }).Class({
            constructor: [function PopupController() {

            }],
            closePopup: function () {
                this.popupState.shown = false;
            }
        });

        return PopupController;
    };

})(ng, window.app || (window.app = {}));