const introductionToSQL = () => `
# Introduction To Sql
  - SQL Stands for Strcutured Query Language
  - SQL is with us more than 3 decade and still raocking in data science.

# SQL Important Commands
  - SELECT - extracts data from a database
  - UPDATE - updates data in a database
  - DELETE - deletes data from a database
  - INSERT INTO - inserts new data into a database
  - CREATE DATABASE - creates a new database
  - ALTER DATABASE - modifies a database
  - CREATE TABLE - creates a new table
  - ALTER TABLE - modifies a table
  - DROP TABLE - deletes a table
  - CREATE INDEX - creates an index (search key)
  - DROP INDEX - deletes an index
`;

const sqlDistinctandCount = () => `
# Distinct
  - Return Only the unique or different value only
  - SELECT DISTINCT Country FROM Customers
# Count
  - Return the count value what ever passed in ( )
  - SELECT Count(*) AS DistinctCountries FROM (SELECT DISTINCT Country FROM Customers);
  - SELECT COUNT(DISTINCT Country) FROM Customers;
# Where
  - Where adds an condition along with search
  - SELECT * FROM Customers WHERE CustomerID > 80;
     # Equals (=)
         - SELECT * FROM Products WHERE Price = 18;
     # Greater Than (>)
         - SELECT * FROM Products WHERE Price > 30;
     # Less than (<)
         - SELECT * FROM Products WHERE Price < 30;
     # Greater than or equal (>=)
         - SELECT * FROM Products WHERE Price >= 30;
     # Less than or equal (<=)
         - SELECT * FROM Products WHERE Price <= 30;
     # Not equal (<>, !=)
         - SELECT * FROM Products WHERE Price <> 18;
         - SELECT * FROM Products WHERE Price != 18;
     # BETWEEN
         - SELECT * FROM Products WHERE Price BETWEEN 50 AND 60;
     # LIKE
         - SELECT * FROM Customers WHERE City LIKE 's%';
     # IN
         - SELECT * FROM Customers WHERE City IN ('Paris','London');
# Order By
  - The Order by keyword is used to sort the result-set in ascending and descending order.
     # ASC
         - SELECT * FROM Products ORDER BY Price;
         - SELECT * FROM Products ORDER BY Price ASC; 
     # DESC
         - SELECT * FROM Products ORDER BY DESC;
     # Combination of ASC|DESC
         - SELECT * FROM Customers ORDER BY Country ASC, CustomerName DESC;

# AND
  - The AND opertaor is used to filter records based on more than one condition
  - SELECT * FROM Customers
        WHERE Country = 'Spain' AND CustomerName LIKE 'G%';

# OR
  - The OR opertaor is used to filter records based on more than one condition if any one is true.
  - SELECT * FROM Customers
        WHERE Country = 'Spain' OR Country = 'Spain';

# Not 
  - The Not opertaor is used to pull out the negative condition from record.
     # NOT LIKE
       - SELECT * FROM Customers WHERE CustomerName NOT LIKE 'A%';
     # NOT BETWEEN
       - SELECT * FROM Customers WHERE CustomerID NOT BETWEEN 10 AND 60;
     # NOT IN
       - SELECT * FROM Customers WHERE City NOT IN ('Paris', 'London');
     # NOT Greater Than
       - SELECT * FROM Customers WHERE NOT CustomerID > 50;
     # NOT Less Than
       - SELECT * FROM Customers WHERE NOT CustomerId < 50;

`;

const crudOperation = () => `
# Insert Into
  - Insert Into statement is used to insert new record in a table.
  - INSERT INTO Customers (CustomerName, City, Country)
        VALUES ('Cardinal', 'Stavanger', 'Norway');

# Null and Not Null
  - Null is used to check the empty value
  - SELECT CustomerName, ContactName, Address FROM Customers
        WHERE Address IS NULL;
  - Not null is used to check the non-empty value
  - SELECT CustomerName, ContactName, Address FROM Customers
        WHERE Address IS NOT NULL;

# Update Condition
  - Need to Update the table data on base of some condition
  - UPDATE Customers
        SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
        WHERE CustomerID = 1;

# Delete Condition
  - Used to Delete the existing record in a table
  - DELETE FROM Customers WHERE CustomerName='Alfreds Futterkiste';

# Select Top
  - Used to select the number of record that is specified.
`;
