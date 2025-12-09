/** @odoo-module */
import { ListController } from "@web/views/list/list_controller";
import { registry } from '@web/core/registry';
import { listView } from '@web/views/list/list_view';
import { useService } from "@web/core/utils/hooks";

export class GroupedPaymentListController extends ListController {
   setup() {
       super.setup();
       this.action = useService("action");
   }
   
   OnTestClick() {
       this.action.doAction({
          type: 'ir.actions.act_window',
          res_model: 'invoice.wizzard.payments',
          name: 'Cargar Pagos',
          view_mode: 'form',
          views: [[false, 'form']],
          target: 'new',
          res_id: false,
          context: { from_test_click: true },
      });
   }
   
   OnNewButtonClick() {
       this.action.doAction({
          type: 'ir.actions.act_window',
          res_model: 'invoice.wizzard.payments',
          name: 'Cargar Pago Agrupado',
          view_mode: 'form',
          views: [[false, 'form']],
          target: 'new',
          res_id: false,
          context: { from_new_button_click: true },
      });
   }
}

registry.category("views").add("grouped_payment_list_button", {
   ...listView,
   Controller: GroupedPaymentListController,
   buttonTemplate: "adroc_global_payments.ListView.Buttons",
});

