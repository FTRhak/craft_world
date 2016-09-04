(function (ng, app) {
    'use strict';

    app.HomeFarmController = ng.core.Component({
        selector: 'farm-controller',
        template: `
            <div class="farm">
                <field-cell class="field-cell cell-1"></field-cell>
                <field-cell class="field-cell cell-2"></field-cell>
                <field-cell class="field-cell cell-3"></field-cell>
                <field-cell class="field-cell cell-4"></field-cell>
                <field-cell class="field-cell cell-5"></field-cell>
                <field-cell class="field-cell cell-6"></field-cell>
                <field-cell class="field-cell cell-7"></field-cell>
                <field-cell class="field-cell cell-8"></field-cell>
                <field-cell class="field-cell cell-9"></field-cell>
                <field-cell class="field-cell cell-10"></field-cell>
                <field-cell class="field-cell cell-11"></field-cell>
                <field-cell class="field-cell cell-12"></field-cell>
            </div>
        `,
        directives: [app.FieldCellComponent]
    }).Class({
        constructor: function HomeFarmController() {
            //console.log('call directive');
        }
    });

})(ng, window.app || (window.app = {}));