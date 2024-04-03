const express = require('express')
const cors = require('cors')
const mongoose= require('./database');
const dotenv = require('dotenv');
const USER=require('./Model/User');
dotenv.config();
const port = process.env.PORT || 5004;

// configration
const app = express(); 
                                                 
app.use(express.json());

app.use(cors());
mongoose();


//defining routes path  
app.use("/api/user", require("./Route/user"));
app.use("/api/query", require("./Route/search"));
app.use("/api/team", require("./Route/team"));

app.get("/", (req, res) => {
  res.json({ message: "Hello I am Backend" });
});


app.listen(port, () => {
    console.log(`Heliverse backend  listening on port http://localhost:${port}`)
})






