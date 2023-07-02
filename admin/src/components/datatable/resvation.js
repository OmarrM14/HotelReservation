const mongoose = require('mongoose');


// resvation Schema


const resvationSchema = mongoose.Schema({
    place:{
        type:String,
        require:false
    },
    Hotel:{
        type:String,
        require:false
    },
    Persons:{
        type:String,
        require:false
    },
    data:{
        type:String,
        require:false
    },
    End:{
        type:String,
        require:false
    },
    customer:{
        type:String,
        require:false
    },
});

module.exports = mongoose.model("resvation",resvationSchema)
