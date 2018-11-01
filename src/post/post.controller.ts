import { Post } from "./post.model";

const postController = {
	posts: () => Post.find({}),
	addPost: (post: any) => {
		const newPost = new Post({ picture: post.picture, description: post.description });
		return newPost.save();
	}
};

export { postController };