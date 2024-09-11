const express = require('express');
const errorHandler = require('./middleware/errorHanlder');
const dotenv = require('dotenv').config();
const connectDb = require("./config/dbConnection");

connectDb();
const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;

app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server running on ${port}`)
});