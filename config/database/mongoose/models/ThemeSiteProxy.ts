import mongoose, { Model, Schema } from "mongoose";

export interface IThemeSiteProxy {
  name: string;
  head: string;
  bodyPrependJS: string;
  bodyPrependCSS: string;
  bodyAppendJS: string;
  bodyAppendCSS: string;
  parameter: unknown;
  user: Schema.Types.ObjectId;
  isDeleted: boolean;
  tag: string;
  benefits: string[];
  popular: boolean;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IThemeSiteProxyModel extends Model<IThemeSiteProxy> {}

const ThemeSiteProxySchema = new Schema<IThemeSiteProxy, IThemeSiteProxyModel>(
  {
    name: {
      type: String,
    },
    tag: {
      type: String,
    },
    popular: {
      type: Boolean,
    },
    benefits: [{ type: String }],
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
    parameter: {
      type: Object,
      // required: true,
      default: {},
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("ThemeSiteProxy", ThemeSiteProxySchema);
