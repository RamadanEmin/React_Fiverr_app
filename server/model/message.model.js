import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const messageSchema = new Schema({
    conversationId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

export default model('Message', messageSchema)