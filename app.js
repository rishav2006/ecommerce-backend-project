const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');

require("dotenv").config();
const db = require('./config/db');

const userRouter = require('./routes/userRouter');
const sellerRouter = require('./routes/sellerRouter');
const homeRouter = require('./routes/homeRouter');
const productRouter = require('./routes/productRouter');
const cartRouter = require('./routes/cartRouter');
const orderRouter = require('./routes/orderRouter');

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

const PORT = process.env.PORT || 3000;
app.listen(PORT);