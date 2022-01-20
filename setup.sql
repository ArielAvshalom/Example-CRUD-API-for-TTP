--postgres code for creating a new user, database and table:

----user
create role ttp_user;
--give database permissions
alter role ttp_user CREATEDB;

----psql to this user and then create a database

create database example_api

\c example_api --to connect to this database


----table
create table users ( --note that users is plural here but not so in js (conventions)
    ID Serial Primary Key, --automatically populate id with a series of integers
    name varchar,
    email varchar
);

insert into users (name, email)
    values
        ('Ariel', 'A@Example.com'),
        ('Mo', 'Mo@MoShakes.co')
    ;
