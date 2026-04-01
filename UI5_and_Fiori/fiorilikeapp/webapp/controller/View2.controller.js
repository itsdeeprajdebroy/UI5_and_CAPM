sap.ui.define(
    [
        "ddi/mm/Product/controller/BaseController",
        "sap/m/MessageBox",
        "sap/m/MessageToast",
        "sap/ui/core/Fragment",
        "sap/ui/model/Filter",
        "sap/ui/model/FilterOperator"
    ], 
    function(BaseController, MessageBox, MessageToast, Fragment, Filter, FilterOperator) {

        return BaseController.extend("ddi.mm.Product.controller.View2", {
            onInit: function () {
                this.oRouter = this.getOwnerComponent().getRouter();

                // using event-listner to catch all the events releted to route change - attachMatched
                // _onClickHandler is the event handler, we pass this along with it because inside handler method there is no this context, basically whenever we have event listner calling handler like below way 'this' context doesn't exist we can pass this like below
                this.oRouter.getRoute("routeSecond").attachMatched(this._onClickHandler, this)

                this.oFragmentPopup = {};
            },

            _onClickHandler: function (oEvent) {
                // _privateMethod - getting id from event object
                const sId = oEvent.getParameter('arguments').fruitId;
                // getting current view object
                const oView = this.getView();
                // creating path using id
                const sPath = '/fruits/' + sId;
                // using bindElement to find the view object
                oView.bindElement({
                    path: sPath
                })
            },

            onPress: function (oEvent) {
                // This Event handler is from static fragment, Fragment don't have their controller they are used in their host controller.
                MessageBox.confirm("Back");
            },

            _loadFragment: function (idValue) {
                // that has the value of this, as this might loose his value so storing in a variable as we are using promise.
                var that = this; 
                // Here we will use Fragment, we will use load method of fragment which returns promise so we need to handle it
                if(!that.oFragmentPopup[idValue]){
                    Fragment.load({
                        id: idValue,
                        name: 'ddi.mm.Product.fragments.PopUp',
                        type: 'XML',
                        controller: that
                    })
                    .then(
                        function (oSelectDiallog) {
                            that.oFragmentPopup[idValue] = oSelectDiallog;
                            // This condition is switching our Title of SelectDialog control
                            (idValue === 'suppliers' ? that.oFragmentPopup[idValue].setTitle('Supplier List(s)') : that.oFragmentPopup[idValue].setTitle('Cities List(s)'))
                            // Setting the multiselect mode of SelectDailog List items dynamically
                            if(idValue === 'suppliers'){
                                that.oFragmentPopup[idValue].setMultiSelect(true);
                            }
                            // Here we will do dynamic Binding to show the data while opening popup
                            that.oFragmentPopup[idValue].bindAggregation('items', {
                                path: '/' + idValue,
                                template: that._templateProvided(idValue)
                            })
                            /**
                             * **We need to add as Dependent our Fragment to the current view to allow accessing our Model. View will provide acces to our model. ( if  we don't add below lines of code Binding will not happen )**
                             */
                            that.getView().addDependent(that.oFragmentPopup[idValue]);
                            that.oFragmentPopup[idValue].open();
                        }
                    )
                }else{
                     that.oFragmentPopup[idValue].open();
                }
            },

            _templateProvided: function (value) {
                switch (value) {
                    case 'suppliers':
                        return new sap.m.StandardListItem({
                                    description: '{name}',
                                    title: '{city}',
                                    icon: 'sap-icon://supplier'
                                })
                        break;
                    case 'cities':
                        return new sap.m.StandardListItem({
                                    description: '{famousFor}',
                                    title: '{name}',
                                    icon: 'sap-icon://blur'
                                })
                        break;
                
                    default:
                        break;
                }
            },

            oField: null,

            onPopupConfirm: function (oEvent) {
                const sId = oEvent.getSource().getId();
                // Below if code helps to check the Parent Fragment object like is it for supplier or for cities 
                /**
                 * String has a method called indexof() to check if it contains
                 */
                if(sId.indexOf('cities') !== -1){
                    // selectedItem - is the parameterName which gives StandardListItem which we select on SelectDialog popup using event object 
                    const oStandardListItem = oEvent.getParameter('selectedItem');
                    // oStandardListItem has property of title so getting the title using getTitle()
                    const sTitle = oStandardListItem.getTitle();
                    // Very important step as we want to set the value selceted on the f4 click the city to input we first saved the value of field using the f4 click event and getting source 
                    this.oField.setValue(sTitle);
                }else{
                    // Getting all the selected items in a array using event object
                    const aSelectedItems = oEvent.getParameter('selectedItems');
                    // array of filter
                    var aFilter = [];
                    // looping in to get access all items
                    aSelectedItems.forEach(item => {
                        const sNameOfSupplier = item.getDescription();
                        // now creating a Filter object
                        const oFilter = new Filter("name", FilterOperator.EQ, sNameOfSupplier);
                        // inserting in a array
                        aFilter.push(oFilter);
                    });
                    // we need to do OR with all the filter object
                    const oMainFilter = new Filter(aFilter, false);
                    // get Binding object of supplier from the table control
                    const oSupplierTable = this.getView().byId('idTable');
                    const oBinding = oSupplierTable.getBinding('items');
                    // applying the filter in Binding object to change the value dynamically
                    oBinding.filter(oMainFilter);
                }
            },

            onFilter: function (oEvent) {
                this._loadFragment('suppliers');
            },

            onPressValueHelp: function (oEvent) {
                this.oField = oEvent.getSource();
                this._loadFragment('cities')
            },

            onSave: function() {
                MessageBox.confirm("Do you really wants to save this", {
                    title: "Confirmation Needed",
                    onClose: function (sAction) {
                        if(sAction === 'OK'){
                            MessageToast.show("Thanks for the Action")
                        }
                        else{
                            MessageBox.information("Opps you canceled it!!")
                        }
                    }
                })
            },

            onPressNext: function (oEvent) {
                //Todo - will implement later
            },

            onSearchDialog: function (oEvent) {
                // get the source from where the event triggred - here basically we clicked on search/any item source will be SelectDialog only
                const sId = oEvent.getSource().getId();
                // using it in condition
                if(sId.indexOf('suppliers') !== -1){
                    // get the object of supplier fragment from the JSON object
                    const oSupplierPopup = this.oFragmentPopup['suppliers'];
                    // get binding
                    const oBinding = oSupplierPopup.getBinding('items');
                    // get the value searched
                    const sText = oEvent.getParameter('value');
                    
                    // craeting the filter via condition, if no value passed just clear the filter
                    const aFilter = [];
                    if(sText?.trim()){
                        aFilter.push(new Filter("city", FilterOperator.EQ, sText?.trim()));
                    }
                    oBinding.filter(aFilter);
                }
            }
        })

})