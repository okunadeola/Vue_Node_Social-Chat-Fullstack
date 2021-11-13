import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    max: 500
  },
  img: {
    type: String
  },
  likes: {
    type: Array,
    default: []
  },
  shares: {
    type: Array,
    default: []
  },
  comments: [
    {
      comment: { type: String },
      reply: { type: Array, default: [] },
      commentId:{type:String}
    }
  ],

}, { timestamps: true })

export default mongoose.model("Post", postSchema)