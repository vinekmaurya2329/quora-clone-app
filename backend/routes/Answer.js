const express = require('express')
const router = express.Router();

const answerDB = require('../models/Answer') 

router.post('/',async(req,res)=>{
    try {
        await answerDB.create({
            answer:req.body.answer,
            questionId:req.body.questionId,
            user:req.body.user
        }).then(()=>{
            res.status(201).send({
                status:true,
                message:'Answer Added successfully'
            })
        }).catch((error)=>{
            res.status(404).send({
                status:false,
                message:'bad request '
            })
        })
    } catch (error) {
        res.status(500).send({
            status:false,
            message:'Error while adding answer'
        })
    }
})



module.exports = router; 