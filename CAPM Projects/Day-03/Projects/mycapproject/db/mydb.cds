namespace mycapproject.db;

using { mycapproject.reuse } from './reuse';
using { cuid, managed, temporal } from '@sap/cds/common';


// Context - Master or Transaction
context master {

    entity student : reuse.address {
        key studentId   : reuse.Guid;
            studentName : String(255);
            gender      : String(1) enum {
                MALE = 'M';
                FEMALE = 'F';
                UNDEFINED = 'U'
            };
            rollNo      : Int64;
            class       : Association to one class;
    };

    entity class {
        key id        : Int64;
            className : String(64);
            teacher   : String(255);
            students  : Association to many student
                            on students.class = $self;
    };

    /**
     * localized keyword is used to provide multilanguage support for any field. we can a table and we can maintain our data's
     */
    entity books {
        key id       : Int64;
            bookName : localized String(64);
            author   : String(255);
    };

}

context transaction {

    entity subs : cuid, managed, temporal {
        // key id         : reuse.Guid;
            student_id : Association to one master.student;
            book_id    : Association to one master.books;
    }

}
