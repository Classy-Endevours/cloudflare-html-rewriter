import mongoose from 'mongoose'
const { Schema } = mongoose
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
      default: '',
    },
    bodyPrepend: {
      type: String,
      required: true,
      default: '',
    },
    bodyAppend: {
      type: String,
      required: true,
      default: '',
    },
  },
  { timestamps: true },
)

export default mongoose.model('Wrangler', WranglerSchema)
