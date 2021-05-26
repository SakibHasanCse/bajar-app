import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema
const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        optional: true
    },
    description: {
        type: String
    },
    mdesc: {
        type: String
    },
    mtitle: {
        type: String
    },
    price: {
        type: String
    },
    image: {
        type: Array
    },
    category: [{
        type: ObjectId,
        ref: 'category',
        required: true,

    }],
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
    sku: {
        type: String,
        optional: true
    },
    created: {
        type: ObjectId,
        ref: 'user',
        required: true
    }

}, { timeStamps: true })

const products = mongoose.model('Products', productSchema)
export default products