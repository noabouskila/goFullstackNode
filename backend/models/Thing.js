const mongoose = require('mongoose');

// creation du schema de donnée Thing
const thingSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },  
    imageUrl: { type: String, required: true },
    price: { type: Number, required: true },
    userId: { type: String, required: true },
});
// exportation du modele Thing basé sur le schema thingSchema
module.exports = mongoose.model('Thing', thingSchema);


