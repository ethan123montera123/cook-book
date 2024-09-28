
# Data

The Data directory is responsible for handling all database-related operations, including queries, connections, and interactions with the database. This folder houses modules that abstract the direct interaction with the database, making the system more organized and easier to maintain. It ensures that all database logic is centralized, avoiding scattered database code across the project.

The data folder should follow a repository pattern, which helps keep the database operations separate from the business logic and provides a clear structure for performing CRUD (Create, Read, Update, Delete) operations.

## Common Files in the Data Directory

- **Database Connection:** A module that sets up and maintains the database connection.
- **Repositories:** These contain the CRUD operations for each entity/table.
- **Migrations (Optional):** SQL scripts to create or update the database schema.

```jsx
// data/config/dbConfig.js
const mysql = require('mysql2');

// Create a connection pool to manage multiple connections efficiently
const pool = mysql.createPool({
  host: 'localhost',         // Database host (e.g., AWS RDS, local machine)
  user: 'root',              // Database username
  password: 'password123',    // Database password
  database: 'mydatabase',     // Name of the database
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise();  // Exporting a pool promise to work with async/await
```
