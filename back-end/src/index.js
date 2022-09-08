const express = require('express');
require('dotenv').config();

const connectDB = require('./config/db');
connectDB();
const bodyParser = require('body-parser')
const cors = require("cors");
const app = express();
app.use(bodyParser.json());
app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000', 'http://localhost:8080', 'http://localhost:4200']
}))

const postRouter  = require('./routes/post');
const userRouter  = require('./routes/Users');

app.listen(`${process.env.BACK_URL}`, () => {
    console.log(`Server Running on ${process.env.BACK_URL}`);
    app.use('/post', postRouter)
    app.use('/user', userRouter)
});


