/**
 * Created by mayomi on 7/26/17.
 */
// Add the mongoose the package
const mongoose = require('mongoose');
// Add the Schema method from the mongoose
const Schema = mongoose.Schema;



///////////////////////
///==todo schema====///
//////////////////////

const TodoSchema = new Schema({
    title: {
        type: String
    },
    date: {
        type: Date
    }
});

module.exports = mongoose.model('Todo', TodoSchema);// Note that the 'Todo' is the name of the collection that will be created
