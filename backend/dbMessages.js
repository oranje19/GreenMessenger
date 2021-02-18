import mongoose from 'mongoose';

const greenMessengerSchema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean
});

export default mongoose.model('messageContent', greenMessengerSchema)