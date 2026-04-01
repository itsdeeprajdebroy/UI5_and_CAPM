sap.ui.jsview("ui5learning_1.view.Main", {
    getControllerName: function() {
        return "ui5learning_1.controller.Main";
    },

    createContent: function(oController) {
        const oLabel1 = new sap.m.Label("label1", {
            text: "User Name"
        })

        const oLabel2 = new sap.m.Label("label2", {
            text: "Password"
        })

        // Standard type input field
        const oInput1 = new sap.m.Input("input1", {
            placeholder: "Enter User Name"
        })

        // Password type input field
        const oInput2 = new sap.m.Input("input2", {
            placeholder: "Enter Password",
            type: "Password"
        })

        // Button with event handler to call the loginChecker method
        const oButton = new sap.m.Button("button", {
            text: "Login",
            press: oController.loginChecker
        })

        // Returning the elements inside an array in the same 
        // order as they should appear in the UI
        return [oLabel1, oInput1, oLabel2, oInput2, oButton]
    }
})