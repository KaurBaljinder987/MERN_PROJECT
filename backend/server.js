require('dotenv').config();
const cors = require("cors");
const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');
const { userRoute, productRoute } = require('./routes');



const app = express();

const port = process.env.PORT;
console.log("------port-----", port);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database Connected Successfully!!");
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});

app.use('/', userRoute);
app.use('/', productRoute);

app.get('/', (req, res) => {
    res.json({ "message": "Hello Crud Node Express" });
});

app.listen(port, (error) => {
    if (!error) {
        console.log("server successfully created at port", port);
    }
    else {
        console.log("error occured" + error);
    }
})