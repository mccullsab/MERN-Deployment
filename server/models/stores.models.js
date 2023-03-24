const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name required"],
        minlength: [3, "Name must contain at least 3 characters!"]
        },
    open: {
        type: Boolean,
        // required: [true, "must specify if store is open or not"],
    },
    number: {
        type: Number,
        required: [true, "store number required"],
        min: [.1, "store number must be greater than 0"]

    }
}, { timestamps: true });

const Store = mongoose.model('Store', StoreSchema);

module.exports = Store;