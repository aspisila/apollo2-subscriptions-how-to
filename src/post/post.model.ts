import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
	picture: String,
	description: String,
	parish: { type: mongoose.Schema.Types.ObjectId, ref: 'Parish' }
});

const Post = mongoose.model("posts", PostSchema);
export { Post };
