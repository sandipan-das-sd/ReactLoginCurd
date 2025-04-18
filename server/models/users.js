import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "user"
    },
    profile: {
        type: String,
        default: "https://iconarchive.com/download/i107195/Flat-Design/User-Profile-2/user-profile-flat-icon.ico"
    },
    isVerified: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});


const UserModel = mongoose.model('user', userSchema);
export default UserModel;
