(function (ng, app) {
    'use strict';

    app.IconStatesComponent = ng.core.Component({
        selector: '[game-states]',
        template: `
            <div class="game-states">
                <div class="state">
                    <div class="state-item state-energy">35/45</div>
                </div>
                <div class="state">
                    <div class="state-item state-money">123.1</div>
                </div>
                <div class="state">
                    <div class="state-item state-diamonds">999</div>
                </div>
            </div>
        `,
        //providers: [app.Http]
    }).Class({
        constructor: [function () {

        }]
    });

})(ng, window.app || (window.app = {}));