const express = require('express'); // เรียกใช้ expressjs
const app = express();
const port = 3000; // ระบุ port
const chalk = require('chalk');
const debug = require('debug')('app'); // เรียกใช้ debug
const morgan = require('morgan'); // เรียกใช้ morgan
const path = require('path');


app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public")))

app.get("/",(req,res) => {
   res.send('Hello World!');
})

// รับ port
app.listen(port,() =>{
    debug("Listening on port%d" + chalk.red(" : " + port));
})