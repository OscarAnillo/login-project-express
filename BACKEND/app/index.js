const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require('cors');
dotenv.config();

const authRoute = require("./routes/auth");


const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoute);



app.listen(PORT, console.log(`Server running on port ${PORT}`)) 