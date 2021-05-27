import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    photo: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    hashPassword: {
        type: String
    }
}, { timeStamps: true });

userSchema.virtual('password')
    .set(function (password) {
        this.hashPassword = bcrypt.hashSync(password, 10);
    })

userSchema.methods = {
    authenticate: function (password) {
        return bcrypt.compareSync(password, this.hashPassword)
    }
}

const user = mongoose.model('User', userSchema)
export default user