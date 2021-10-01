export default {
    name: {
        type: String,
        require: true,
    },
    type: {
        type: String,
        require: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
}