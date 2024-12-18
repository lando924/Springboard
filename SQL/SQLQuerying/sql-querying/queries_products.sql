-- Comments in SQL Start with dash-dash --

-- Add product: chair
INSERT INTO products (name, price, can_be_returned)
VALUES ('chair', 44.00, FALSE);

-- Add product: stool
INSERT INTO products (name, price, can_be_returned)
VALUES ('stool', 25.99, TRUE);

-- Add product: table
INSERT INTO products (name, price, can_be_returned)
VALUES ('table', 124.00, FALSE);

-- Display all products
SELECT * FROM products;

-- Display only product names
SELECT name FROM products;

-- Display product names and prices
SELECT name, price FROM products;

-- Add product: lamp
INSERT INTO products (name, price, can_be_returned)
VALUES ('lamp', 59.99, TRUE);

-- Display products that can be returned
SELECT * FROM products
WHERE can_be_returned = TRUE;

-- Display products with price less than 44.00
SELECT * FROM products
WHERE price < 44.00;

-- Display products with price between 22.50 and 99.99
SELECT * FROM products
WHERE price BETWEEN 22.50 AND 99.99;

-- Update products with a $20 discount
UPDATE products
SET price = price - 20;

-- Remove products with price less than 25.00
DELETE FROM products
WHERE price < 25.00;

-- Increase price by $20 for remaining products
UPDATE products
SET price = price + 20;

-- Make all products returnable
UPDATE products
SET can_be_returned = TRUE;
