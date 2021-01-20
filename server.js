const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

const routes= require('./routes/api');
//const MONGODB_URI ='mongodb+srv://grvk28:gS07078905@cluster0.anjq5.mongodb.net/<dbname>?retryWrites=true&w=majority';
//MONGODB_URI ||
mongoose.connect( 'mongodb://localhost/mydb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

mongoose.connection.on('connected',()=>{
    console.log('Mooooo');
});

//data parsing
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(cors());
app.use(morgan('tiny'));
app.use('/api', routes);



app.listen(PORT, console.log(`Started`));