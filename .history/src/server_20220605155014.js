require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const Connection = require('./db')

app.use(express.json());
app.use(cors());

Connection();
// sample for express server
// app.use("/", (req, res, next) => {
//   res.status(200).json({ success: true, data: "Start Here" });
// });

const PORT = process.env.PORT || 8080; // port at which server listening

app.listen(
  PORT,
  console.log(`server started in ${process.env.NODE_ENV} mode at port ${PORT}`)
);

// fetch routes
let userRouter = require('./routes/user');
let userRouter = require('./routes/user');

//define root routes.
app.use('/', userRouter);
app.use('auth', userRouter);

