import mongoose from 'mongoose'
const { Schema } = mongoose
const SiteProxySchema = new Schema(
  {
    head: {
      type: String,
      required: true,
      default: '',
    },
    bodyPrependJS: {
      type: String,
      required: true,
      default: '',
    },
    bodyPrependCSS: {
      type: String,
      required: true,
      default: '',
    },
    bodyAppendJS: {
      type: String,
      required: true,
      default: '',
    },
    bodyAppendCSS: {
      type: String,
      required: true,
      default: '',
    },
    constant: {
      type: Schema.Types.ObjectId,
      ref: 'SiteProxyConst',
      required: true,
    },
    path: {
      type: String,
      required: true,
      default: '',
    },
  },
  { timestamps: true },
)

export default mongoose.model('SiteProxy', SiteProxySchema)
