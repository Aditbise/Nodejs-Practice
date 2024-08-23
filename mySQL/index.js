// const mysql=require("mysql");
// const con=mysql.createConnection({
//     host:'localhost',
//     user:"root",
//     password:"",
//     database:"test"
// });
// con.connect((err)=>{
//     if(err)
//     {
//         console.warn("error");
//     }
//     else{
//         console.warn("connected");
//     }

// });
// con.query("select * from users ",(err,result)=>{
//     console.warn("result  :",result)
// });

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});

con.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

// Create a new user
app.post('/users', (req, res) => {
    const { name, email } = req.body;
    const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
    con.query(query, [name, email], (err, result) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.status(201).send(`User added with ID: ${result.insertId}`);
    });
});

// Get all users
app.get('/users', (req, res) => {
    const query = 'SELECT * FROM users';
    con.query(query, (err, results) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.status(200).json(results);
    });
});

// Get a user by ID
app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM users WHERE id = ?';
    con.query(query, [id], (err, result) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        if (result.length === 0) {
            res.status(404).send('User not found');
            return;
        }
        res.status(200).json(result[0]);
    });
});

// Update a user by ID
app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const query = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
    con.query(query, [name, email, id], (err, result) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        if (result.affectedRows === 0) {
            res.status(404).send('User not found');
            return;
        }
        res.status(200).send('User updated successfully');
    });
});

// Delete a user by ID
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM users WHERE id = ?';
    con.query(query, [id], (err, result) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        if (result.affectedRows === 0) {
            res.status(404).send('User not found');
            return;
        }
        res.status(200).send('User deleted successfully');
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

