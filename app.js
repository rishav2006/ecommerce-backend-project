const express = require('express');
const path = require('path');
const app = express();
const cookieParser = require('cookie-parser');
const db = require('./config/db');
const userRouter = require('./routes/userRouter');
const sellerRouter = require('./routes/sellerRouter');
require("dotenv").config();

app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cookieParser());

app.use('/user', userRouter);

app.use('/seller', sellerRouter);

app.listen(3000);