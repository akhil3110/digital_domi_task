import mongoose from 'mongoose';
const schema = new mongoose.Schema({
    userId: {
        type: String,
        required: [true, 'userId is required'],
    },
    imageUrl: {
        type: String,
        required: [true, 'imageUrl is required']
    },
    description: {
        type: String,
        required: [true, 'Product description is required']
    },
}, { timestamps: true });
export const ImageDescription = mongoose.model('ImageDescription', schema);
