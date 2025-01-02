import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
  img: { type: String },
  timeRead: { type: String },
  date: { type: Date },
  href: { type: String },
});

export default mongoose.model('Post', postSchema);
