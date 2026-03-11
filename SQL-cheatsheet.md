# PostgreSQL Cheatsheet

Each student will complete the Description and Example sections for the SQL clause assigned to them.

For each clause:

1. In the **Description**, explain what the clause does in plain language.main
2. In the **Example**, write a working SQL statement that shows how the clause is used (like the `SELECT and `CREATE TABLE` examples below).
3. As a reference, `SELECT` and `CREATE TABLE` are already done for you.

---

### 1. `SELECT`
   
**Description:** `SELECT *` returns all columns from the provided table. You can also do `SELECT column_name_1, column_name_2` to return specific columns from the provided table.

**Example:**

```sql
SELECT *
FROM movies;
```

### 2. `CREATE TABLE`

**Description:** `CREATE TABLE` creates a new table in a database. It allows one to specify the name of the table, the name of each column, and each column's data type in the table.

**Example:**

```sql
CREATE TABLE friends (
  friend_id SERIAL PRIMARY KEY,
  name VARCHAR,
  birthday DATE
);
```

### 3. `INSERT INTO` — assigned to _____

**Description:** 

**Example:**

```sql

```

### 4. `UPDATE` — assigned to _____

**Description:**

**Example:**

```sql

```

### 5. `DELETE FROM` — assigned to _____

**Description:**

**Example:**

```sql

```

### 6. `GROUP BY` — assigned to _____

**Description:**

**Example:**

```sql

```

### 7. `ORDER BY` — assigned to _____

**Description:**

**Example:**

```sql

```

### 8. `INNER JOIN` — assigned to _____

**Description:**

**Example:**

```sql

```

### 9. `LIMIT` — assigned to _____

**Description:**

**Example:**

```sql

```

### 10. `ON CONFLICT` — assigned to _____

**Description:**

**Example:**

```sql

```

### 11. `LIKE` — assigned to _____

**Description:**

**Example:**

```sql

```

### 12. `COUNT` — assigned to _____

**Description:** 

**Example:**

```sql

```
