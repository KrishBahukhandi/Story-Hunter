const express = require("express");
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 8081;
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
// MySQL connection configuration
const db = mysql.createConnection({
    host: "localhost",
    user: "root",         // MySQL username
    password: "Krish23@", // MySQL password
    database: "user_auth_db" // Database name
});

// Checking the connection to the database
db.connect((err) => {
    if (err) {
        console.error("Error connecting to the database:", err.message);
        return;
    }
    console.log("Connected to the database successfully!");
});

// Handling the POST request to '/signup'
app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;

    // SQL query to insert the new user data into the 'users' table
    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    const values = [name, email, password];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error("Error inserting data:", err.message);
            return res.status(500).json({ error: "Database error occurred" });
        }
        return res.status(201).json({ message: "User created successfully!" });
    });
});

// Starting the server and listening on port 8081
app.listen(8081, () => {
    console.log("Server is listening on port 8081");
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
    const values = [email, password];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Server Error" });
        }
        if (result.length > 0) {
            // User found, send success response
            return res.json({ message: "Login successful" });
        } else {
            // User not found or credentials do not match
            return res.json({ message: "Invalid credentials" });
        }
    });
});

