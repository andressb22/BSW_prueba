const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes/login'))

app.listen(3000,()=>{
    console.log('servidor activo')
})