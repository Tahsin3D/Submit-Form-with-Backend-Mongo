import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    username: {type: String},
    email: {type: String},
    message: {type: String}
})

export const Message = mongoose.model("message", messageSchema)