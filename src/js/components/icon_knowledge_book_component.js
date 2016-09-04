(function (ng, app) {
    'use strict';

    app.IconKnowledgeBookComponent = ng.core.Component({
        selector: '[game-kbook]',
        template: `
            <span class="knowledge-book"></span>
        `,
        //providers: [app.Http]
    }).Class({
        constructor: [function () {

        }]
    });

})(ng, window.app || (window.app = {}));