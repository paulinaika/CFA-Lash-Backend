const mongoose = require('mongoose');
const { Schema } = mongoose;


const lashSchema = new Schema({
	name: {
		type: String,
		trim: true
	},
  category: {
    type: String,
    trim: true
  },
  price: {
    type: Number,
    trim: true,
		min: 0,
  },
	quantity: {
    type: Number,
    trim: true
  },
	description: {
    type: String,
    trim: true
  },
	image: {
		type: String,
		trim: true
	},
	created_at: {
		type: Date,
		default: Date.now
	}
});

const Lash = mongoose.model('Lash', lashSchema);

module.exports = Lash;
