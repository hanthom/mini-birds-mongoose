var mongoose = require('mongoose');

var Sighting = mongoose.model('Sighting', new mongoose.Schema({
	name: { type: String, lowercase: true, required: true, index: true },
	order: { type: String, lowercase: true, maxlength: 20},
	status: {
		type: String,
		lowercase: true,
		enum: [
			'extinct',
			'extinct in the wild',
			'critically endangered',
			'endangered',
			'vulnerable',
			'near threatened',
			'conservation dependent',
			'least concern',
		],
		required: true,
		index: true,
	},
	numberSeen: {type: Number, min: 1},
	confirmed: {type: Boolean, default: false}
}));

module.exports = Sighting;