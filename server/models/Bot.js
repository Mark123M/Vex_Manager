const mongoose = require("mongoose")

//have multiple channels like "announcements", "discussion and feedback", (must post audio), and "submission/vote"
const botSchema = new mongoose.Schema({
    name: {
        type: String,
        max: 100,
	    required: true
    },
    changeLog:{
        type:String,
        max:5000,
        default: ""
    },
    model:{
        type:String,
        default:""
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