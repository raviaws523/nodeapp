const express = require('express');

const bodyParser = require('body-parser');

const app = express ();


app.use(bodyParser.urlencoded({extended: true}));

app.use('/', (req,res) => {
    res.send('Hello There');
})

app.listen(3000, ()=>{
    console.log("Server up and running")
})

