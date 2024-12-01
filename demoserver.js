// const express = require('express');
// const mongoose = require('mongoose');
// const path = require('path');

// const port = 1234;

// const app = express();
// app.use(express.static(__dirname));
// app.use(express.urlencoded({ extended: true }));

// // Connection url to MongoDB
// mongoose.connect('mongodb://127.0.0.1:27017/students', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log("MongoDB connected successfully"))
//     .catch((err) => console.error("MongoDB connection error:", err));

// // Define Mongoose Schema and Model here according to database
// const userSchema = new mongoose.Schema({
//     name: String,
//     reg_no: String,
//     email: String,
//     branch: String, 
// });

// const User = mongoose.model("data", userSchema); // Fix: Pass `userSchema` instead of undefined `users`

// // Routes
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'form.html'));
// });

// app.post('/post', async (req, res) => {
//     try {
//         const { reg_no, name, email, branch } = req.body;
//         const user = new User({ reg_no, name, email, branch }); // Fix: Use `User` model
//         await user.save(); // Save user to MongoDB
//         console.log(user); // Log saved user
//         res.send("Form Submission Successfully");
//     } catch (error) {
//         console.error("Error saving user:", error);
//         res.status(500).send("Error saving data.");
//     }
// });

// // Start Server
// app.listen(port, () => {
//     console.log(`Server started on port ${1234}`);
// });
