const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true, 
        maxlength: [40, 'Name can not be more than 40 characters']
    },
    description:{
        type: String,
        required: true,
        maxlength: [200, 'Description can not be more than 200 characters']
    },
    quantity: {
        type: Number,
        min: 1,
        max: 100
    }
});

module.exports = mongoose.models.Product || mongoose.model('Product', ProductSchema);