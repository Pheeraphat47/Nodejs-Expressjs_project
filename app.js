const express = require('express'); // เรียกใช้ expressjs
const app = express();
const port = 3000; // ระบุ port
const chalk = require('chalk');
const debug = require('debug')('app'); // เรียกใช้ debug
const morgan = require('morgan'); // เรียกใช้ morgan
const path = require('path');
const topstarsRouter = express.Router(); // สร้าง Router ของหน้า topstars
const winnersRouter = express.Router(); // สร้าง Router ของหน้า winners
const favicon = require('serve-favicon');
// data
// const winners = require('./data/winners.json');


app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")))

app.set("views", "./src/views");
app.set("view engine", "ejs")


// route ไปหน้า topstars
topstarsRouter.route("/").get((req, res) => {
    res.render('topstars');
});

// route ไปหน้า winners
winnersRouter.route("/").get((req,res) =>{
    res.render('winners');
})



//  สร้าง Topstars Router
app.use("/topstars", topstarsRouter)

// สร้าง winners Router
app.use("/winners",winnersRouter)



app.use(favicon(__dirname + '/public/img/favicon.ico'));

app.use()

// setup หน้าแรกตอนเปิดเว็บ
app.get("/", (req, res) => {
    res.render('index');
})



// รับ port
app.listen(port, () => {
    debug("Listening on port%d" + chalk.red(" : " + port));
})

// 

