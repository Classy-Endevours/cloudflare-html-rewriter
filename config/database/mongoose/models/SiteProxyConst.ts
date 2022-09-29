import mongoose from 'mongoose'
const { Schema } = mongoose
const SiteProxyConstSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    account_id: {
      type: String,
      required: true,
    },
    input_url: {
      type: String,
      required: true,
      default: '',
    },
    output_url: {
      type: String,
      required: true,
      default: '',
    },
  },
  { timestamps: true },
)

export default mongoose.model('SiteProxyConst', SiteProxyConstSchema)
