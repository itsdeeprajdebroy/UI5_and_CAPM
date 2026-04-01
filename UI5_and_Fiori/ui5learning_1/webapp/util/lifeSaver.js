sap.ui.define(
    ["sap/ui/core/format/NumberFormat"], 
    function(NumberFormat) {

        return {
            // a utility function to convert any string to upper case
            transFormToUpperCase: function(sInput) {
                if(sInput && sInput.length > 0) {
                    return sInput.toUpperCase();
                }
                return '';
            },


            // a utility function to format salary with currency
            // Remember always return value in formatter, here below inside if condition after formatting we are returning must as it is the final output of formatter, outside it will have no access to formatted value
            salaryConverter: function(fSalary, sCurrency) {
                if(fSalary && !isNaN(fSalary)) {
                    const oCurrencyInstance = NumberFormat.getCurrencyInstance({
                        currencyCode: false,
                        showMeasure: true,
                        decimals: 2
                    });
                    // returning the formatted salary
                    return oCurrencyInstance.format(fSalary, sCurrency);
                }
                return '';
            }
        }
    }
)