const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');

dotenv.config();

const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/api/v1/test',require('./routes/testRoutes'));

const PORT = process.env.PORT || 3900;

app.listen(PORT, ()=>{
    console.log(`Node Server Running in ${process.env.DEV_MODE} mode on PORT ${process.env.PORT}`);
})