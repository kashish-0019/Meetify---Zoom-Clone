import { Schema } from "mongoose";

const meetingSchema = new Schema(
    {
        user_id:{
            type: String
        },
        meetingCode:{
            type: String,
            required: true,
        },
        date:{
            type: Date,
            default: Date.now,
            rquired: true
        }
    }
)

const meeting = mongoose.model("meeting", meetingSchema);

export {meeting};