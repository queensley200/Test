const Joi= require('Joi');
const mongoose= require ('mongoose');
const express = require ('express');
const path = require('path');
const router = express.Router();
const bodyParser= require('body-parser');

const teacher = require('./routes/auth.js');
const { User } = require('./model/user.js');
const app= express();

mongoose.connect('mongodb://127.0.0.1:27017/Teacher',{
    useNewUrlParser: true, useUnifiedTopology: true
})

app.use('/', routes);   
app.use(express.json());
app.use('/', express.static(path.join(__dirname, 'static')))
// query parameter
app.use(express.urlencoded({extended:true})); 
app.use (bodyParser.json())
app.use('/api/auth/register', User);



app.post('/api/register', async (req,res)=>{

})


const port = process.env.PORT||5000

app.listen(port,()=> console.log(`Listening on port ${port}`));