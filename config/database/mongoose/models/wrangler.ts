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
    script: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
)

export default mongoose.model('Wrangler', WranglerSchema)
