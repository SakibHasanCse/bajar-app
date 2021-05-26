import mongoose from 'mongoose';
const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String
    },
    image: {
        type: String
    }

})
const category = mongoose.model('Category', categorySchema)
export default category