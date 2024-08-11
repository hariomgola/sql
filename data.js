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
  - Used to select the number of record that is specified record with in the range.
  - SELECT TOP 3 * FROM Customers;
  - SELECT TOP number|percent column_name(s)
      FROM table_name WHERE condition;
    
    # Limit 
      - SELECT * FROM Customers LIMIT 3;
    # Fetch First
      - SELECT * FROM Customers FETCH FIRST 3 ROWS ONLY;
`;

const aggregateFunction = () => `
# Aggregate Function
  - An Aggregate Function is a function that perform a calculation on a set of values, and return a single value.
  - Aggregate function are often used with the group by clause of the select statement.
  - Aggregare function ignore null values except for count()

# Min and Max
  - Min - Return the smallest value of the selected column
        - SELECT MIN(Price) FROM Products;
  - Max - Return the largest value of the selected column
        - SELECT MAX(Price) FROM Products;

# Count 
  - Count returns the number of rows that matches a specified criteria.
  - SELECT COUNT(column_name)
      FROM table_name WHERE condition;

# Sum 
  - Sum returns the total sum of a numeric column
  - SELECT SUM(column_name)
      FROM table_name WHERE condition;
# Average
  - Average retunr the average value of numeric columns.
  - SELECT AVG(column_name)
      FROM table_name WHERE condition;
  
# Like
  - The Like operator is used in a WHERE clause to search for a specified pattern in a column
  # 2 types of wildcard search
     - %   -  'a%','%b%'
     - _   - 'H__i_m'

# SQL WildCart
  - A Wildcart character is used to substitute one or more characters in a string.
  - Wild cart character are used with the like opertor along with where conditions.

# WildCart Example
  - %	Represents zero or more characters
      - SELECT * FROM Customers WHERE CustomerName LIKE '%es';
      - Return all customers that ends with the pattern 'es':
  - _	Represents a single character
      - SELECT * FROM Customers WHERE City LIKE '_ondon';
      - Return all customers with a City starting with any character, followed by "ondon"
  - []	Represents any single character within the brackets *
      - SELECT * FROM Customers WHERE CustomerName LIKE '[bsp]%';
      - Return all customers starting with either "b", "s", or "p":
      - SELECT * FROM Customers WHERE CustomerName LIKE '[a-f]%';
      - Return all customers starting with "a", "b", "c", "d", "e" or "f":
  - ^	Represents any character not in the brackets *
  - -	Represents any single character within the specified range *
  - {}	Represents any escaped character **

# IN
  - IN value allows you to specify multiple values in a where clause.
  - SELECT * FROM Customers
      WHERE Country IN ('Germany', 'France', 'UK');

# Between
  - The Between operator selects values within a given range.
  - SELECT column_name(s) FROM table_name
        WHERE column_name BETWEEN value1 AND value2;

# Alais
  - SQL Aliases are used to give a table, or a column in a table, a temporary name.
  - SELECT CustomerID AS ID FROM Customers;
  - Without space name 
       - SELECT ProductName AS [My Great Products] FROM Products;
`;
const joins = () => {};
