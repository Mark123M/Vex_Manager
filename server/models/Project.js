const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema({
    userId:{
        type:String,
        required: true
    },
    name: {
        type: String,
        max: 100,
	    required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    robots: {
        type: Array,
        default:[]
    }
},
{timestamps:true}
)

module.exports = mongoose.model("Project", projectSchema)