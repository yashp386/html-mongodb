const express = require('express')
const app = express()
const port = 3040

app.get('/', function(req, res) {
  res.send('Hello World!')
})

app.listen(port)

mongoose.connect('mongodb://127.0.0.1:27017/students', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', (error) => {
    console.error("Error connecting to MongoDB:", error);
});

db.once('open', () => {
    console.log("mongodb connected successfully");
});
