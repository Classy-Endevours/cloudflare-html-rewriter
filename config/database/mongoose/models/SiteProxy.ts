import mongoose from "mongoose";
import ThemeSiteProxyParameters from "./ThemeSiteProxyParameters";
const { Schema } = mongoose;
const SiteProxySchema = new Schema(
  {
    head: {
      type: String,
      // required: true,
      default: "",
    },
    bodyPrependJS: {
      type: String,
      // required: true,
      default: "",
    },
    bodyPrependCSS: {
      type: String,
      // required: true,
      default: "",
    },
    bodyAppendJS: {
      type: String,
      // required: true,
      default: "",
    },
    bodyAppendCSS: {
      type: String,
      // required: true,
      default: "",
    },
    constant: {
      type: Schema.Types.ObjectId,
      ref: "SiteProxyConst",
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    resource: {
      type: Schema.Types.ObjectId,
      ref: 'Resource',
      // required: true,
    },
    themeParameters: [{
      type: Schema.Types.ObjectId,
      ref: ThemeSiteProxyParameters,
      // required: true,
    }],
    path: {
      type: String,
      // required: true,
      default: "",
    },
    isExpired: {
      type: Boolean,
      // required: true,
      default: false,
    },
    isDeleted: {
      type: Boolean,
      default: false
    },
  },
  { timestamps: true }
);

export default mongoose.model("SiteProxy", SiteProxySchema);
