const express = require('express');
const path = require('path');
const app = express();
const cookieParser = require('cookie-parser');
const db = require('./config/db');
const userRouter = require('./routes/userRouter');
const sellerRouter = require('./routes/sellerRouter');
const homeRouter = require('./routes/homeRouter');
const productRouter = require('./routes/productRouter');
const cartRouter = require('./routes/cartRouter');
const orderRouter = require('./routes/orderRouter');
require("dotenv").config();

app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(cookieParser());

app.use('/', homeRouter);

app.use('/products', productRouter);

app.use('/cart', cartRouter);

app.use('/orders', orderRouter);

app.use('/user', userRouter);

app.use('/seller', sellerRouter);

app.listen(3000);