const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ADNSchema = new Schema({
  mutation: {type: Boolean},
  ADNSecuence: {
    type: [String],
    required: true,
    maxlength: 6,
    maxItems: 6,
    pattern: "/^AGTC$/i",
  },
});

module.exports = mongoose.model("ADN", ADNSchema);
