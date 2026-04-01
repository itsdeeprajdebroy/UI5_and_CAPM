sap.ui.define(
    ["sap/ui/core/UIComponent"], 
    function(UIComponent) {

        return UIComponent.extend("ddi.mm.Product.Component", {

            metadata: {
                manifest: "json"
            },
            
            // Constructor method
            init: function() {
                // here we will call the constructor of the parent class, so we can we can access property of parents
                // Benifit of above is like some additional functionality like Routings , models etc
                UIComponent.prototype.init.apply(this);

                // Adding router object given by UIComponent - most powerful thing which solve all the issue in our app also is the industry standard
                var oRouter = this.getRouter();

                // initializing router - initializing router searches for routing config in manifest.json (router initialize view and also helps to navigate between them)
                oRouter.initialize();
            },

            // Create component
            // createContent: function () {

            //     // create root view - App
            //     const oView = sap.ui.view({
            //         id: "idView",
            //         viewName: "ddi.mm.Product.view.App",
            //         type: "XML"
            //     });

            //     // Add View1 and View2 to App container - But first create View1 and View2 > View object
            //     const oView1 = sap.ui.view({
            //         id: "idView1",
            //         viewName: "ddi.mm.Product.view.View1",
            //         type: "XML"
            //     });

            //     const oView2 = sap.ui.view({
            //         id: "idView2",
            //         viewName: "ddi.mm.Product.view.View2",
            //         type: "XML"
            //     });


            //     const oEmpty = sap.ui.view({
            //         id: "idEmpty",
            //         viewName: "ddi.mm.Product.view.Empty",
            //         type: "XML"
            //     });

            //     // Embbed View1 and View2 in Application Container >
            //     const oAppCon = oView.byId("appCon")
                
            //     // Pages is the Aggregation of App control, and it comes with a method call addPage()
            //     // oAppCon.addPage(oView1);
            //     // oAppCon.addPage(oView2);

            //     // now adding view1 and view2 to master and detail aggregation respectively
            //     oAppCon.addMasterPage(oView1);

            //     oAppCon.addDetailPage(oEmpty);
            //     oAppCon.addDetailPage(oView2);


            //     return oView;
            // },

            // destroy method
            destroy: function () {
                
            }
        })
})