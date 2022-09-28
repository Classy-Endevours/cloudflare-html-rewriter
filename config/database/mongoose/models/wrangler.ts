import mongoose from "mongoose";
const { Schema } = mongoose;
const WranglerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    account_id: {
      type: String,
      required: true,
    },
    head: {
      type: String,
      required: true,
      default: "",
    },
    bodyPrependJS: {
      type: String,
      required: true,
      default: "",
    },
    bodyPrependCSS: {
      type: String,
      required: true,
      default: "",
    },
    bodyAppendJS: {
      type: String,
      required: true,
      default: "",
    },
    bodyAppendCSS: {
      type: String,
      required: true,
      default: "",
    },
    input_url: {
      type: String,
      required: true,
      default: "",
    },
    output_url: {
      type: String,
      required: true,
      default: "",
    },
    path: {
      type: String,
      required: true,
      default: "",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Wrangler", WranglerSchema);
