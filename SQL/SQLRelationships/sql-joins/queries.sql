-- write your queries here

-- PART ONE --

-- Join the two tables
SELECT * 
FROM owners
FULL JOIN vehicles
ON vehicles.owner_id = owners.id;

-- Count the number of cars for each owner
SELECT o.first_name, o.last_name, COUNT(v.owner_id) 
FROM owners o
FULL JOIN vehicles v
ON v.owner_id = o.id
GROUP BY o.first_name, o.last_name
ORDER BY o.first_name;

-- Count the number of cars for each owner and display the avg price
SELECT o.first_name, o.last_name, ROUND(AVG(price)) AS average_price, COUNT(v.owner_id) 
FROM owners o
FULL JOIN vehicles v
ON v.owner_id = o.id
GROUP BY o.first_name, o.last_name
HAVING COUNT(v.owner_id) > 1 AND AVG(price) > 10000
ORDER BY o.first_name DESC;