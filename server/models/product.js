const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    photo: {

    },
    category: {
        type: String
    },
    brand: {
        type: String
    },

})

module.exports = mongoose.model('Product', productSchema)