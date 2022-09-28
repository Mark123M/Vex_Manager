const mongoose = require("mongoose")

//have multiple channels like "announcements", "discussion and feedback", (must post audio), and "submission/vote"
const botSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    name: {
        type: String,
        max: 100,
	    required: true
    },
    description:{
        type:String,
        max:5000
    },
    project:{
        type:String,
        unique: true
    },
    model:{
        type:String,
        default:null
    },
    partsCount:{
        type:Array,
        default: []
    },
    comments:{
        type:Array,
        default:[]
    }
},
{timestamps:true}
)

module.exports = mongoose.model("Bot", botSchema)