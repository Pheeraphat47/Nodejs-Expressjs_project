const express = require('express'); // เรียกใช้ expressjs
const app = express();
const port = 3000; // ระบุ port


app.get("/",(req,res) => {
   res.send('Hello World!');
})