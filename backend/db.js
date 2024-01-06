const mongoose = require('mongoose');

const url =process.env.URL



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
