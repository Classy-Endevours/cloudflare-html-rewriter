import mongoose, { Document, Model, PopulatedDoc, Schema } from "mongoose";
import { IThemeSiteProxy } from "./ThemeSiteProxy";

export interface IThemeSiteProxyParameters {
  parameter: any;
  data: any;
  siteProxy: Schema.Types.ObjectId;
  theme: PopulatedDoc<Document<Schema.Types.ObjectId> & IThemeSiteProxy>;
  user: Schema.Types.ObjectId;
  domains?: string[];
  isDeleted: boolean;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IThemeSiteProxyParametersModel
  extends Model<IThemeSiteProxyParameters> {}

const ThemeSiteProxyParametersSchema = new Schema<
  IThemeSiteProxyParameters,
  IThemeSiteProxyParametersModel
>(
  {
    parameter: {
      type: Object,
      // required: true,
      default: {},
    },
    siteProxy: {
      type: Schema.Types.ObjectId,
      ref: "SiteProxy",
      required: true,
    },
    theme: {
      type: Schema.Types.ObjectId,
      ref: "ThemeSiteProxy",
      required: true,
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

export default mongoose.model(
  "ThemeSiteProxyParameters",
  ThemeSiteProxyParametersSchema
);
