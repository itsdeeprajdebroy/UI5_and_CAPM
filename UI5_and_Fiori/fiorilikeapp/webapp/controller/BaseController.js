sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "ddi/mm/Product/util/formatter",
        "sap/ui/core/routing/History"
    ], 
    function(Controller, formatter, History) {

        return Controller.extend("ddi.mm.Product.controller.BaseController", {
            // Linking formatter - adding in parent controller
            formatter: formatter,

            // onBack event in base controller so we can re use
            onBack: function () {
                // get history instance
                const oHistory = History.getInstance();
                // get previos hash 
                const sPreviousHash = oHistory.getPreviousHash();

                if (sPreviousHash !== undefined) {
                    window.history.go(-1);
                } else {
                    this.oRouter.navTo("routeFirst", {}, true);
                }
            },
        })

})