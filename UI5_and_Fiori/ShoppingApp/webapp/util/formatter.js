sap.ui.define(
    [
        "sap/ui/core/format/NumberFormat"
    ],
    function (NumberFormat) {
        return {
            currencyConverter: function (price) {
                // Check if a valid number or string else return empty string
                if(price){
                    // Providing format options in NumberFormat.getCurrencyInstance() : NumberFormat only and converting the value using format() method
                    return NumberFormat.getCurrencyInstance({
                        showMeasure: false,
                        decimals: 2,
                        decimalSeparator: ","
                    }).format(price)
                }
                return ""
            },

            statusText: async function (unitInStock, isDiscontinued) {
                const oBundle = await this.bundleProvider();
                // Check first if unitInStock and isDiscontinued are valid
                if(!isNaN(unitInStock)){
                    if(isDiscontinued){
                        return oBundle.getText("XTXT_statusDisCont");
                    }
                    else if(unitInStock < 5){
                        return oBundle.getText("XTXT_statusOutOfStock");
                    }
                    else{
                        return oBundle.getText("XTXT_statusAvl");
                    }
                }
                return oBundle.getText("XTXT_statusUnkown");
            },

            statusState: function (unitInStock, isDiscontinued) {
                // Check first if unitInStock and isDiscontinued are valid
                if(!isNaN(unitInStock)){
                    if(isDiscontinued){
                        return "Error";
                    }
                    else if(unitInStock < 5){
                        return "Warning";
                    }
                    else{
                        return "Success";
                    }
                }
                return "Information"
            },
        }
    }
)