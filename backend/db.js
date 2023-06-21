const mongoose = require('mongoose');

const url = 'mongodb+srv://vinekmaurya2329:vinek7068594746@cluster0.5iwx2uw.mongodb.net/quora-clone-mern'



module.exports.connect = () =>{
    mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>{
        console.log('mongodb connected successfully')
    }).catch((error)=>{
console.log( ' error',error)
    })
        
    
}