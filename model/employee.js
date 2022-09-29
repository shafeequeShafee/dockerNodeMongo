
const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema({
    
    name:{
        type :String
       
    },
    experience:{
        type:String
        
    },
    teamLead:{
        type :String
    },
    language:{
        type:String
    }

})


module.exports = mongoose.model('Employee',employeeSchema)