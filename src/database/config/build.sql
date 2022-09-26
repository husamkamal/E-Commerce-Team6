BEGIN;
    DROP TABLE IF EXISTS cart, users, categories, products CASCADE;
    CREATE TABLE users (
        ID SERIAL PRIMARY KEY,
        Name VARCHAR(50) NOT NULL,
        Email VARCHAR(100) NOT NULL UNIQUE,
        HshedPassword TEXT NOT NULL
    );

    CREATE TABLE categories (
        ID SERIAL PRIMARY KEY,
        Name VARCHAR(50) NOT NULL
    );

    CREATE TABLE products (
        ID SERIAL PRIMARY KEY,
        Name VARCHAR(50) NOT NULL,
        Description TEXT,
        Image TEXT NOT NULL,
        Price INTEGER NOT NULL ,
        CategoryID INTEGER NOT NULL,
        FOREIGN KEY (CategoryID) REFERENCES categories(ID) 
    );

    CREATE TABLE cart (
        ID SERIAL PRIMARY KEY,
        Quantity INTEGER NOT NULL DEFAULT 1,
        ProductID INTEGER NOT NULL,
        UserID INTEGER NOT NULL,
        FOREIGN KEY (ProductID) REFERENCES products(ID),
        FOREIGN KEY (UserID) REFERENCES users(ID) 
    );
Commit;