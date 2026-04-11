using { anubhav.db } from '../db/datamodel';
using { cappo.cds } from '../db/CDSViews';

service CatalogService @(path: 'CatalogService') {

    entity BusinessPartnerSet as projection on db.master.businesspartner;
    entity AddressSet as projection on db.master.address;
    entity EmployeeSet as projection on db.master.employees;
    entity POs as projection on db.transaction.purchaseorder;
    entity POitems as projection on db.transaction.poitems;

    entity ProductView as projection on cds.CDSViews.ProductView;

}