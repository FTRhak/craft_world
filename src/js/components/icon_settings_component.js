(function (ng, app) {
    'use strict';

    app.IconSettingsComponent = ng.core.Component({
        selector: '[game-settings]',
        template: `
            <span class="settings"></span>
        `,
        //providers: [app.Http]
    }).Class({
        constructor: [function () {

        }]
    });


})(ng, window.app || (window.app = {}));