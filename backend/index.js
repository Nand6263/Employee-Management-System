const express = require('express');

const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8080;
require('./Models/db');

app.get('/', (req, res) => {
    res.send('Employee Mgm Server is Running');
})

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
})