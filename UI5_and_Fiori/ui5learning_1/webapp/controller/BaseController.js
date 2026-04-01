sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "ui5learning_1/util/lifeSaver"
    ],
    function(Controller, lifeSaver){

        return Controller.extend("ui5learning_1.controller.BaseController", {
            // adding dependency here for Reuseablity
            formatter: lifeSaver 
        })

})