sap.ui.define(
    [
        "ddi/mm/Shopping/controller/BaseController",
        "sap/ui/model/Filter",
        "sap/ui/model/FilterOperator"
    ],
    function(BaseController, Filter, FilterOperator){
        return BaseController.extend("ddi.mm.Shopping.controller.Home", {
            onInit: function () {
                
            },

            onSearch: function (oEvent) {
                // getting the searched value
                const sQuery = oEvent.getParameter("newValue");
                //Get the list object from id
                const oList = this.getView().byId("productListOnSearch"),
                      oBindings = oList.getBinding("items");
                // checking if Query is empty
                if(sQuery.length !== 0){
                    this.modelProvider("appView").setProperty('/isListVisible', true);
                    const oFilter = new Filter(
                        "ProductName",
                        FilterOperator.Contains, 
                        sQuery
                    );
                    oBindings.filter([oFilter])
                    return;
                }
                oBindings.filter([]);
                this.modelProvider("appView").setProperty('/isListVisible', false);
            }, 

            onSelectingSearchedItem: function (oEvent) {
                
            },

            onCategoryListItemPress: function (oEvent) {
                
            }
        })
    }
)