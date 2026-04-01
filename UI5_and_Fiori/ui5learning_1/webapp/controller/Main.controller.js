sap.ui.define(
        [
            "ui5learning_1/controller/BaseController",
            "sap/m/MessageBox",
            "ui5learning_1/model/models"
        ], 

            // This class is extending from BaseController class so that we can reuse
    function(Controller, MessageBox, models) {
        return Controller.extend(" ", {


            // We create a global variable in controller where we set this object So our view can consume it
            // formatter: lifeSaver,


            //Option-1 Declaring global variable
            // here just for demo purpose we are using global variable, but this we cannot use outside method in a object ( just example how to write global variable)
            // oView: this.getView(),


            // Option-2 Declaring global variable
            // onInit method is called once when controller is initialized it is the constructr of the class
            onInit: function() {
                // this.oView is global variable of this controller
                this.oView = this.getView();

                // creating a JSON model
                // const oModel = new sap.ui.model.json.JSONModel();

                // setting data to model
                // const oData = {
                //     "magic": true,
                //     "employees": [
                //         {
                //             "id": 1,
                //             "name": "John Wick",
                //             "age": 35,
                //             "department": "Operations",
                //             "salary": 1000,
                //             "address": {
                //                 "street": "123 Main St",
                //                 "city": "New York",
                //                 "country": "USA"
                //             },
                //             "skills": [
                //                 { "name": "SAP UI5", "level": "Expert" },
                //                 { "name": "JavaScript", "level": "Advanced" }
                //             ]
                //         },
                //         {
                //             "id": 2,
                //             "name": "Jane Doe",
                //             "age": 28,
                //             "department": "Finance",
                //             "salary": 1200,
                //             "address": {
                //                 "street": "456 Elm St",
                //                 "city": "London",
                //                 "country": "UK"
                //             },
                //             "skills": [
                //                 { "name": "ABAP", "level": "Intermediate" },
                //                 { "name": "Fiori", "level": "Advanced" }
                //             ]
                //         }
                //     ]
                // }

                // oModel.setData(oData);

                // setting model to whole view

                // passing path to load json file dynamically - reusable function

                /** 
                 * both the model we have initialized but the one initalized lately got visible in view 
                 * 
                 * **/
                // sap.ui.getCore().setModel(models.createJSONModel("model/mockdata/sample2.json"));
                sap.ui.getCore().setModel(models.createJSONModel("model/mockdata/sample.json"));

                // different model loading in same view - we need to set model name also
                sap.ui.getCore().setModel(models.createJSONModel("model/mockdata/sample2.json"), "model2");


                // setting resource model to core
                sap.ui.getCore().setModel(models.createResourceModel(), "i18n");


                // initialize
                this.bValue = true;
                

                //dynamic binding using json model
                //bindProperty syntax - bindProperty("property of control", "path of model")
                // this.oView.byId("idInputCurrency").bindProperty("value", "/employees/0/address/country");

                //steps to change default binding mode in UI5 - For JSON model default binding mode is TwoWay.. we can change it to OneWay or OneTime
                //sap.ui.getCore().getModel().setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);

            },

            onBeforeRendering: function() {
                // it is called before the view is rendered to DOM as HTML
                // here we can make changes to the view before it is rendered
                // mostly it is used to do pre-processing before the view is rendered, like if we want to change some value of control/view before it is rendered

                // lets set the salary input field to 5000 before rendering the view
                // this.oView.byId("idInputSalary").setValue("5000");
            },

            onAfterRendering: function() {
                // it is called after the view is rendered
                // here we can make changes to the view after it is rendered
                // mostly it is used to do post-processing after the view is rendered, It is mostly used to show some effects, focus on fields etc

                // lets use jQuery to show fadeout fadein effects after rendering the view
                $("#idView2--idSimpleForm").fadeOut(2000, function() {
                    $("#idView2--idSimpleForm").fadeIn(2000);
                })
            },

            loginChecker: function() {
                //getCore().byId() - works here with input1 and input2 because in global also same id is there
                const sUserName = sap.ui.getCore().byId("input1").getValue()
                const sPassword = sap.ui.getCore().byId("input2").getValue()

                if (sUserName === sPassword) {
                    alert("Login Successful")
                } else {
                    alert("Login Failed")
                }
            },

            onPress: function() {

                // const sInput = this.getView().byId("idInput").getValue();
                //here we are using getCore().byId() with full id of input field as idView2--idInput is the full id in global or DOM in case of XML view
                //Better to use "this" approach in case of XML view
                //this.getView().byId("idInput").getValue(); - it will automatically take the full id
                // const sInput = sap.ui.getCore().byId("idView2--idInput").getValue();

                const sInput = this.oView.byId("idInput").getValue();
                MessageBox.show("Hello " + sInput);
            },

            onClickLoad: function() {
                // all input objects
                // many duplicate code - not a good practice
                // so thats we we use model and bind the data to view
                // also we are using this.getView() many times - not a good practice
                // so we can store this.getView() in a global variable and use it

                // benifit of global variable - we can use this.oView in all methods of this controller and if there is any change in view we need to change only in one place
                const oInput1 = this.oView.byId("idInputFirstName");
                const oInput2 = this.oView.byId("idInputLastName");
                const oInput3 = this.oView.byId("idInputSalary");
                const oInput4 = this.oView.byId("idInputCurrency");

                // set values to input fields
                oInput1.setValue("John");
                oInput2.setValue("Wick");
                oInput3.setValue("1000");
                oInput4.setValue("USD");
            },

            onClickIncrease: function() {
                // get current value from input field
                const sValue = this.oView.byId("idInputSalary").getValue();

                // increment value and set it back to input field
                const sValueNew = parseInt(sValue) + 1;

                this.oView.byId("idInputSalary").setValue(sValueNew);
            },

            onClickMagic: function() {

                // Below is not a good practice, always use json model to manipulate data

                // const bValueName = this.oView.byId("idInputFirstName").getEditable();
                // const bValueAddress = this.oView.byId("idInputCurrency").getEditable();
                // const bValueSkill = this.oView.byId("idInputSkill").getEditable();

                // toggle the editable property
                // this.oView.byId("idInputFirstName").setEditable(!bValueName);
                // this.oView.byId("idInputCurrency").setEditable(!bValueAddress);
                // this.oView.byId("idInputSkill").setEditable(!bValueSkill);

                // using json model to manipulate data
                //for any property value always use json model and bind the property to view, so that we can change the value of model in single place and it will be refleted all the places in view where it is binded
                this.oView.getModel().setProperty('/magic', !this.oView.getModel().getProperty('/magic'));
            },

            onChange: function() {
                //get the Model
                const oModel = sap.ui.getCore().getModel();

                //set the new value to model
                oModel.setProperty("/employees/0/name", "Pritam");
                oModel.setProperty("/employees/0/salary", 50000);
                oModel.setProperty("/employees/0/address/country", "India");
                oModel.setProperty("/employees/0/skills/0/name", "HTML");
            },

            onPrint: function() {
                // get the Model
                const oModel = sap.ui.getCore().getModel();

                // get the data from model
                //getData() - it will return the whole data of model
                oData = oModel.getData();

                //another way to get data using getProperty(path) - it will return the data of given path
                // const oData = oModel.getProperty("/employees/0");

                console.log(oData);
            },

            onFlip: function() {
                if(this.bValue){
                    sap.ui.getCore().setModel(models.createJSONModel("model/mockdata/sample2.json"));
                    this.bValue = false;
                }
                else{
                    sap.ui.getCore().setModel(models.createJSONModel("model/mockdata/sample.json"));
                    this.bValue = true;
                }

                /** 
                //another way to do the same
                const oModel = sap.ui.getCore().getModel();
                const oModel2 = sap.ui.getCore().getModel("model2");

                //interchange the model
                sap.ui.getCore().setModel(oModel2);
                sap.ui.getCore().setModel(oModel, "model2");
                */
            },

            onSelectChange: function(oEvent) {
                // get the selected key from select control
                // const sKey = this.byId("idSelect").getSelectedKey();

                // set the selected key to label - as it contains country names
                // const oLabel = this.byId("idLabelForSelect");
                // oLabel.setText("You have selected " + sKey);


                // We will use event object to get the selected key - better approach
                // Basicaly here using event object we can get the parameter like selectedItem which is actually we have clicked in select control. We can get to know the parameters from oEvent.getParameters() in console or also in sdk. and after getting the parameter we can use it in getParameter("selectedItem") to get the selected item object and after that we can use getKey() method to get the key of selected item.

                const oItem = oEvent.getParameter("selectedItem");

                // item has key property also text property, so we can use getKey() or getText() method to get the value
                const sText = oItem.getText();
                const sKey = oItem.getKey();

                const oLabel = this.byId("idLabelForSelect");
                oLabel.setText("You have selected " + sKey + " "+ sText);
            },

            onSelectionChange: function(oEvent) {
                // step - 1 - get the rowContext(= Element, object of memory that has been allocated to Element - element is the each record's memory in Array - Context is the memory allocated to each and every model element) from the event object
                // this is the memory object for a Row = Element that we are getting from event object 
                const oContext = oEvent.getParameter("rowContext");

                // step - 2 - get the path of the selected row from context
                // memory object contains the path so we can get it using getPath() method
                const sPath = oContext.getPath();

                // step - 3 - get the model from core
                // const oModel = sap.ui.getCore().getModel();

                // step - 4 - get the data from model using path
                // after getting path we can get the data of that path using getProperty(path) method of model
                // const oData = oModel.getProperty(sPath);

                // alert("You have selected " + oData.name + " from " + oData.department + " department.");

                // Element binding
                this.byId("idSimpleForm").bindElement({
                    path: sPath,
                });
            }
        });
    }
)