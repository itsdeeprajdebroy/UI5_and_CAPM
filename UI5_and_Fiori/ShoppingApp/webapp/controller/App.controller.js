sap.ui.define(
    [
        "ddi/mm/Shopping/controller/BaseController",
        "sap/ui/model/json/JSONModel"
    ],
    function(BaseController, JSONModel){
        return BaseController.extend("ddi.mm.Shopping.controller.App", {
            onInit: function () {
                // app view model defination
                const oAppModel = new JSONModel({
                    'isHomeButtonVisible' : false,
                    'isListVisible' : false
                })
                // setting appView model to all the Views
                this.getOwnerComponent().setModel(oAppModel, "appView")
            }
        })
    }
)