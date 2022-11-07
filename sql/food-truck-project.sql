-- this is a comment in SQL (yes, the space is needed!)
-- these statements will drop the tables and re-add them
-- this is akin to reformatting and reinstalling Windows (OS X never needs a reinstall...) ;)
-- never ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever
-- do this on live data!!!!
DROP TABLE IF EXISTS menu;
DROP TABLE IF EXISTS truck;
DROP TABLE IF EXISTS customer;
DROP TABLE IF EXISTS owner;

CREATE TABLE owner (

                         owner_id UUID NOT NULL, PRIMARY KEY,
                         owner_name varchar(64) NOT NULL,
                         owner_phone VARCHAR(32) NOT NULL UNIQUE,
                         owner_email  VARCHAR(64) NOT NULL UNIQUE ,
                         owner_hash VARCHAR(64) NOT NULL,
                         profileHash CHAR(97) NOT NULL,
                         profile_phone VARCHAR(32),
                         owner_activation_token CHAR(32) NOT NULL
);
CREATE TABLE Customer (
                       customer_id UUID NOT NULL PRIMARY,
                       customer_name VARCHAR(20) NOT NULL UNIQUE ,
                       customer_phone VARCHAR(32) NOT NULL,
                       customer_hash CHAR(97) NOT NULL,
                       customer_email VARCHAR(64) NOT NULL  ,
                       customer_activation_token VARCHAR(32) NULL,
);
CREATE TABLE truck (
                       truck_id UUID NOT NULL PRIMARY KEY,
                       truck_owner_id UUID NOT NULL,
                       truck_card_accepted VARCHAR(3) NOT NULL,
                       food_truck_type VARCHAR(32) NOT NULL ,
                       truck_lat DECIMAL(8,5),
                       truck_lan DECIMAL(8,5),
                       FOREIGN KEY (truck_owner_id) REFERENCES owner(owner_id),
);
CREATE INDEX ON truck(truck_ower_id);


CREATE TABLE menu (
                        menu_id UUID NOT NULL,
                        menu_truck_id UUID NOT NULL,
                        menu_name VARCHAR(128) NOT NULL,
                        menu_price VARCHAR(5) NOT NULL ,
                        menu_description VARCHAR(256) ,
                        menu_img_url VARCHAR(512),
                        FOREIGN KEY (menu_truck_id) REFERENCES truck   (truck_id)
 );
CREATE INDEX ON menu    (menu_truck_id)

CREATE TABLE Favorite(
    favorite_truck_id    BINARY(16) UUID NOT NULL,
    favorite_customer_id BINARY(16) UUID NOT NULL,
 PRIMARY KEY (favorite_truck_id, favorite_customer_id),
    FOREIGN KEY (favorite_customer_id) REFERENCES truck (truck_id),
    FOREIGN KEY (favorite_truck_id) REFERENCES Customer (customer_id)
);
CREATE INDEX ON favorites (favorite_truck_id);
CREATE INDEX ON favorites (favorite_customer_id);


