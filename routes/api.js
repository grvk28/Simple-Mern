const express = require('express');

const router = express.Router();

const colleges = require('../models/colleges');
router.get('/',(req,res)=>{
    colleges.find({ })
        .then((data) =>{
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error)=>{
            console.log('error:', error);
            //res.json(error);
        });
});

router.post('/save',(req,res)=>{
    console.log('Body: ', req.body);
    const data = req.body;
    const newcolleges = new colleges(data);
    newcolleges.save((error)=>{
        if(error){
            res.status(500).json({msg:'data not saved, sorry'});

        }
        else{
            res.json({
                msg:'We received your data and svaed!!!'
            });
        }
    });
    
    
});


module.exports = router;