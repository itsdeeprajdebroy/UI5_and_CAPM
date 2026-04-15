using {anubhav.db} from '../db/datamodel';
using {cappo.cds} from '../db/CDSViews';

service CatalogService @(path: 'CatalogService') {

    entity BusinessPartnerSet as projection on db.master.businesspartner;
    entity AddressSet         as projection on db.master.address;
    entity EmployeeSet        as projection on db.master.employees;

    // Boost action for POs - Adding 20000 on PO if we click
    entity POs                as
        projection on db.transaction.purchaseorder {
            *
        }
        actions {
            action boost();
            function largestOrder() returns POs;
        };

    entity POitems            as projection on db.transaction.poitems;

    entity ProductView        as projection on cds.CDSViews.ProductView;

}


/**
 * unbound actions & functions
 *
  function sum (x:Integer, y:Integer) returns Integer;
  function stock (id : Foo:ID) returns Integer;
  action add (x:Integer, to: Integer) returns Integer;
 */

/**
 * bound action , means bound to a entity.
 *
 * entity Foo { key ID:Integer } actions {
 *      action order (x:Integer) returns Integer;
 * }
 */
