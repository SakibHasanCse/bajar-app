import mongoose from 'mongoose';
const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String
    },
    image: {
        type: String
    },
    parentId: {
        type: String
    }

}, { timeStamps: true })
const category = mongoose.model('Category', categorySchema)
export default category