const mongoose = require('mongoose');
// destructuring
const { Schema } = mongoose;

// database is called music

const lashSchema = new Schema({
	name: {
		type: String,
		trim: true // name="    Sugar " - the white spaces will be trimmed!
	},
  category: {
    type: String,
    trim: true // name="    Sugar " - the white spaces will be trimmed!
  },
  price: {
    type: Number,
    trim: true, // name="    Sugar " - the white spaces will be trimmed!
		min: 0,
  },
	quantity: {
    type: Number,
    trim: true // name="    Sugar " - the white spaces will be trimmed!
  },
	description: {
    type: String,
    trim: true // name="    Sugar " - the white spaces will be trimmed!
  },
	image: {
		type: String,
		trim: true // name="    Sugar " - the white spaces will be trimmed!
	},
	created_at: {
		type: Date,
		default: Date.now
	}
});

const Lash = mongoose.model('Lash', lashSchema);

module.exports = Lash;
