sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "ddi/mm/Shopping/util/formatter"
    ],
    function(Controller, formatter){
        return Controller.extend("ddi.mm.Shopping.controller.BaseController", {
            formatter: formatter,

            bundleProvider: function () {
                // Method which provides oBundle, We are writting in common controller as formatter (this) points to controller only so we can access
                // getResourceBundle return Promise
                return this.getOwnerComponent().getModel("i18n").getResourceBundle();
            },

            modelProvider: function (sModelName) {
                return this.getOwnerComponent().getModel(sModelName);
            }
        })
    }
)