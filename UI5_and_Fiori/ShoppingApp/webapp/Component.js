sap.ui.define(
    [
        "sap/ui/core/UIComponent",
        "ddi/mm/Shopping/model/models"
    ],
    function (UIComponent, models) {
        return UIComponent.extend("ddi.mm.Shopping.Component", {
            
            metadata: {
                manifest: "json"
            },

            // Constructor
            init: function () {
                // calling parent component class constructor so we can access parent property
                UIComponent.prototype.init.apply(this);

                // Setting Device Model
                this.setModel(models.createDeviceModel(), "device");

                // Adding router object
                var oRouter = this.getRouter();

                // initializing 
                oRouter.initialize();
            }
        })
    }
)