const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const mysql = require('mysql2');
const {body, validationResult} = require('express-validation');
const port = 3000; // Change to your desired port

const app = express();
app.use(express.urlencoded({extended:false}));
app.set('view', path.join(__dirname, 'view'));
app.use(express.json());

const dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'medication_hub',
    port: '3306'
})

dbConnection.connect((err) => {
    if(err){
        console.log('Error connecting to MySQL database = ', err)
        return;
    }
    console.log('MySQL successfully connected!');
})

// CREATE Routes
app.post("/login", (req, res) => {
    const { email, password } = req.body;
  
    // Check if the user exists in the database
    dbConnection.query("SELECT * FROM patient WHERE email = ? AND password = ?", [email, password], (err, results, fields) => {
      if (err) {
        console.log(err);
        return res.status(400).json({ message: "Login failed." });
      }
  
      if (results.length > 0) {
        // User found, login successful
        return res.status(200).json({ message: "Login successful!" });
      } else {
        // User not found or password incorrect
        return res.status(401).json({ message: "Invalid email or password." });
      }
    });
});

app.post("/register", (req, res) => {

    const { email, password, firstname, lastname,citizenId, address, phoneNumber, gender } = req.body;
  
    const sql = "INSERT INTO patient (email, password, firstname, lastname, citizenId, address, phoneNumber, gender) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  
    dbConnection.query(sql, [email, password, firstname, lastname,citizenId, address, phoneNumber, gender], (err, results) => {
      if (err) {
        console.log("Error while inserting a user into the database", err);
        return res.status(400).json({ message: "Failed to create a new user." });
      }
      return res.status(201).json({ message: "New user successfully created!" });
    });
})

//READ
app.get("/read", async (req, res) => {
  try{
    dbConnection.query("SELECT * FROM patient", (err, results, fields) => {
      if (err) {
        console.log(err);
        return res.status(400).send();
      }
      res.status(200).json(results)
    })
  } catch(err){
    console.log(err);
    return res.status(500).send();
  }
})

//READ single users from db
app.get("/read/single/:email", async (req, res) => {
  const email = req.params.email;
  try{
    dbConnection.query("SELECT * FROM patient WHERE email = ?", [email], (err, results, fields) => {
      if (err) {
        console.log(err);
        return res.status(400).send();
      }
      res.status(200).json(results)
    })
  } catch(err){
    console.log(err);
    return res.status(500).send();
  }
})

//UPDATE data
app.patch("/update/:email", async(req,res) => {
  const email = req.params.email;
  const newPassword = req.body.newPassword;

  try{
    dbConnection.query("UPDATE patient SET password = ? WHERE email = ?", [newPassword,email], (err, results, fields) => {
      if (err) {
        console.log(err);
        return res.status(400).send();
      }
      res.status(200).json({message: "User password update successfully"})
    })
  } catch(err){
    console.log(err);
    return res.status(500).send();
  }
})

//DELETE
app.delete("/delete/:email", async(req,res) => {
  const email = req.params.email;

  try{
    dbConnection.query("DELETE FROM patient WHERE email = ?", [email], (err, results, fields) => {
      if (err) {
        console.log(err);
        return res.status(400).send();
      }
      if (results.affectedRows === 0){
        return res.status(404).json({message:"No user with that email"})
      }
      res.status(200).json({message: "User deleted successfully"})
    })
  } catch(err){
    console.log(err);
    return res.status(500).send();
  }
})

app.listen(port, () => {
  console.log('Server is running...');
});