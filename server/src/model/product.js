import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: ['Title is required', true],
    },
    slug: {
        type: String,
        optional: true
    },
    price: {
        type: String
    },
    image: {
        type: String
    },
    category: {
        type: String,
    },
    size: {
        type: Array,
        optional: true
    },
    color: {
        type: Array,
        optional: true
    },
    stock: {
        type: Number,
        optional: true
    },
    brand: {
        type: String,
        optional: true
    },
    sku: {
        type: String,
        optional: true
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    }

}, { timeStamps: true })

const products = mongoose.model('Products', productSchema)
export default products