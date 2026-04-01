sap.ui.define(
    [
        "sap/ui/Device",
        "sap/ui/model/json/JSONModel"
    ],
    function (Device, JSONModel) {
        return {
            createDeviceModel: function(){
                const oModel = new JSONModel(Device);
                return oModel;
            }
        }
    }
)