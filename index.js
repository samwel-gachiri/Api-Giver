const express = require('express')

const app = express();

app.get('/key', (req,res)=>{
    const api_key = process.env.APIKEY || '0000'
    res.status(200).send(api_key)
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server started on port: ${PORT}`)
});