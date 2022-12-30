const express = require('express'); // เรียกใช้ expressjs
const app = express();
const port = 3000; // ระบุ port
const chalk = require('chalk');
const debug = require('debug')('app'); // เรียกใช้ debug
const morgan = require('morgan'); // เรียกใช้ morgan
const path = require('path');
const topstarsRouter = express.Router(); // สร้าง Router


app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")))

app.set("views", "./src/views");
app.set("view engine", "ejs")


topstarsRouter.route("/").get((req, res) => {
    res.send("This is Topstar Page");
});

topstarsRouter.route("/1").get((req, res) => {
    res.send("This is Topstar Page 1");
});

app.use("/topstars", topstarsRouter)

app.get("/", (req, res) => {
    res.render('index');
})

// รับ port
app.listen(port, () => {
    debug("Listening on port%d" + chalk.red(" : " + port));
})