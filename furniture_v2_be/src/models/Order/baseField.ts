
const baseField = {
    totalPrice: {
        type: Number,
        required: true,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    status:{
        type: String,
        default: "pending"
    }
}

export default baseField;