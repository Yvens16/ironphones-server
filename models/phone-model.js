const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const phoneSchema = new Schema({
 // document qtructure and rules 
 brand: {type: String, required: true},
 model: {type: String, required: true},
 image: {type: String, required: true},
 specs: [
   {type: String, minLength: 5}
  ],
  },{
    //additional settings for Schema constructor function()
    timestamps: true
});

const Phone= mongoose.model("Phone", phoneSchema);

module.exports = Phone;