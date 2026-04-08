namespace mycapproject.reuse;

using { Country } from '@sap/cds/common';


// This is type - simply data type crated for reusability
type Guid : String(32);

// aspect is like structure with field already there so once adding to entity those field will be added
aspect address {
    city    : String(30);
    country : Country;
    houseNo : Int64;
}