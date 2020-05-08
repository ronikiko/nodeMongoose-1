const mongoose = require('mongoose')

const personSchema = mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: String
    },
    address: {
        type: [{
            city: String,
            street: String,
            phones: [
                {
                    home: String,
                    mobile: String
                }
            ]
        }]
    }

})


module.exports = mongoose.model('Persones', personSchema)