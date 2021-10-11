import mongoose from 'mongoose';
export default {
    name: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now(),
    },
    updated_at: {
        type: Date,
        default: null,
    },
};
