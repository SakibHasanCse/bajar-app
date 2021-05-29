import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema
const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        optional: true,
        unique: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    mdesc: {
        type: String
    },
    mtitle: {
        type: String
    },
    price: {
        type: Number
    },
    image: [
        { img: { type: String } }
    ],

    category: {
        type: ObjectId,
        ref: 'Category',
        required: true,

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
        default: 0
    },
    brand: {
        type: String,
        optional: true
    },
    offer: {
        type: Number,
    },
    sku: {
        type: String,
        optional: true
    },
    reviews: [
        {
            review: String,
            userId: { type: ObjectId, ref: 'User' }
        }
    ],
    createdBy: {
        type: ObjectId,
        ref: 'user',
        required: true
    }

}, { timeStamps: true })

const products = mongoose.model('Products', productSchema)
export default products