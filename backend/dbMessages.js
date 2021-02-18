import mongoose from 'mongoose';

const greenMessengerSchema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean
});

// collection
export default mongoose.model('messagecontents', greenMessengerSchema)