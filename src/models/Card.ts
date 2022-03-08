import { Schema, model } from "mongoose";

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

const cardModel = model("Card", Card);

export default cardModel;
