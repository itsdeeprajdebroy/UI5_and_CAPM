using { mycapproject.db } from '../db/mydb';

service collageservice {

    entity StudentSet as projection on db.master.student;
    entity ClassSet as projection on db.master.class;
    entity BookSet as projection on db.master.books;
    entity SubsSet as projection on db.transaction.subs;

}