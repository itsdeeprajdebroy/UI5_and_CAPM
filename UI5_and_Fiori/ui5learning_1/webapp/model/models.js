sap.ui.define(
    [
        "sap/ui/model/json/JSONModel",
        "sap/ui/model/xml/XMLModel",
        "sap/ui/model/resource/ResourceModel"
    ], 
    function(JSONModel, XMLModel, ResourceModel) {
        return {
            createJSONModel: function(filePath) {
                // creating a JSON model
                const oModel = new JSONModel();

                // setting data to model

                //Remember as module we only load or pass js files not other. So we cannot load json file directly as module.

                // we can load json file using loadData method of JSONModel

                //oModel.loadData("ui5learning_1/model/mockdata/sample.json") -- this path doesn't work as loadData makes ajax call and it requires URL path and it doen't understand ui5 namespace or module path.

                //hardcoding path here, so it is not reusable anymore
                // oModel.loadData("model/mockdata/sample.json");
                oModel.loadData(filePath);

                //returing the model object for re-use
                return oModel;
            },

            createXMLModel: function() {},

            createResourceModel: function() {
                // creating a Resource model
                const oModel = new ResourceModel({
                    bundleUrl: 'i18n/i18n.properties'
                });

                return oModel;
            }
        }
    })