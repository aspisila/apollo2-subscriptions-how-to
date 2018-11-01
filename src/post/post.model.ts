import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
	picture: String,
	description: String
});

const Post = mongoose.model("posts", PostSchema);
export { Post };
