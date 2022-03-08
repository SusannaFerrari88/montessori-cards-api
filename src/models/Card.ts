const { Schema, model } = require("mongoose");

const Card = new Schema(
  {
    name: String,
    imageUrl: String,
    translations: {
      type: Schema.Types.Map,
      of: String,
    },
  },
  { timestamps: true }
);

module.exports = model("Card", Card);
