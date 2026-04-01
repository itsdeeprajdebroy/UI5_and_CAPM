sap.ui.define(
    [
        "ddi/mm/Product/controller/BaseController",
        "sap/m/MessageToast",
        "sap/ui/model/Filter",
        "sap/ui/model/FilterOperator"
    ], 
    function(BaseController, MessageToast, Filter, FilterOperator) {

        return BaseController.extend("ddi.mm.Product.controller.View1", {
            onInit: function () {
                //here we need router object - get it from our Component.js
                this.oRouter = this.getOwnerComponent().getRouter();

                // why not like this is added on word - this.oRouter.getRoute("routeSecond").attachMatched(this._selectItemHandler(), this)
                this.oRouter.getRoute("routeSecond").attachMatched(this._selectItemHandler, this)

                // creating a JSON model - listView
                const oModel = new sap.ui.model.json.JSONModel({
                    "isEnabled": false,
                    "listTitle": ""
                });

                // setting model
                this.getView().setModel(oModel, "listView");
            },

            _selectItemHandler: function (oEvent) {
                // getting the selected item from URL
                let sIndex = oEvent.getParameter('arguments').fruitId;
                // Getting the List object
                let oList = this.byId("idList");
                // getting items first time for non refresh case
                let oItems = oList.getItems();
                // checking if not undefined
                if(oItems){
                    // selected item
                    let oSelected = oItems[sIndex];
                    
                    // if correct item then only we go ahead
                    if (oSelected) {
                        oList.setSelectedItem(oSelected);
                        this.getView().getModel("listView").setProperty('/isEnabled', true)
                    }
                }
                // attcahing one event listner-handler for refresh, Basically applying reccursively as earlier updateFinished was completing before even listitems loading
                const fnSelectItem = function (){
                    // very important step, as we needs to fetch updated items from binding inside function
                    let oItems = oList.getItems();
                    // Defensive check — ensure list is not empty
                    if(oItems.length){
                        let oSelected = oItems[sIndex];
                        // if correct item then only we go ahead
                        if (oSelected) {
                            oList.setSelectedItem(oSelected);
                            this.getView().getModel("listView").setProperty('/isEnabled', true)
                        }
                    }else{
                        // If items not yet loaded, wait again
                        oList.attachEventOnce("updateFinished", fnSelectItem);
                    }
                }.bind(this)

                oList.attachEventOnce("updateFinished", fnSelectItem);
            },

            onNext: function (sIndex) {
                //calling mother -- split app view1 ==> masterSection ==> splitApp
                //var oAppCon = this.getView().getParent().getParent();
                //navigate to view2
                //oAppCon.toDetail("idView2");
                this.oRouter.navTo("routeSecond",{
                    fruitId: sIndex
                });
            },

            onOrder: function () {
                MessageToast.show("Thanks for Ordering!!")
            },


            onSearch: function (oEvent) {
                // get the searched query
                const sQuery = oEvent.getParameter('query');
                // Create the filter object using query string as value
                const oFilter1 = new Filter("name", FilterOperator.Contains, sQuery);
                const oFilter2 = new Filter("type", FilterOperator.Contains, sQuery);
                //Filtering both the above as requirement is oFil1 or oFil2
                const oFilter = new Filter([oFilter1, oFilter2], false);
                // craete list object
                const oList = this.getView().byId("idList");
                // Create Binding object so that we can change the binding based on search
                const oBinding = oList.getBinding('items');
                //Filtering
                oBinding.filter([oFilter])
            },

            onDelete: function (oEvent) {
                // get the list item which user wants to delete
                const oListItem = oEvent.getParameter("listItem");
                // create List object using event as delete source is List only.
                const oList = oEvent.getSource();
                // use removeItem method
                oList.removeItem(oListItem);
            },

            onDeleteSelected: function (oEvent) {
                // craete list object
                const oList = this.getView().byId("idList");
                // get all selected item
                const oSelectedItems = oList.getSelectedItem();
                // now delete it
                oList.removeItem(oSelectedItems);
                // making delete button diabled just after deleting
                this.getView().getModel("listView").setProperty('/isEnabled', false)
            },

            onItemPress: function(oEvent){
                //Step 1: get the object of the listItem on which user clicked
                var oListItem = oEvent.getParameter("listItem");
                //Extra: get the data of selected itema and print
                var sText = oListItem.getTitle();
                //Step 2: Get the path of the element
                var sPath = oListItem.getBindingContextPath();
                //extract the index from path e.g. inp = /fruits/3 => ["fruits","3"] ==> 3
                var sIndex = sPath.split("/").pop()
                //Step 3: get the object of V2
                //var oView2 = this.getView().getParent().getPage("idView2");
                //We are using Split App container control View1==>MasterSection==>SplitApp==>DetailSection==>View2
                //var oView2 = this.getView().getParent().getParent().getDetailPage("idView2");
                //Step 4: Element binding - compare with simpleForm receiving Element path from table row Select
                //oView2.bindElement(sPath)

                //Navigate to View2
                this.onNext(sIndex);
            },

            onUpdateFinished: function (oEvent) {
                const iTotalCount = oEvent.getParameter('total');
                if (this.getView().byId("idList").getBinding("items").isLengthFinal()){
                    // getting the i18n text and now will set to our local JSON model
                    const sGetTitle = this.getView().getModel("i18n").getResourceBundle().getText("XTIT_LISTTITLE", [iTotalCount]);
                    this.getView().getModel("listView").setProperty('/listTitle', sGetTitle);
                }
            }
        })

})