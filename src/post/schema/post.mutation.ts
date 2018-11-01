import { gql } from "apollo-server";

const postMutation = gql`
	type Mutation {
		addPost(picture: String, description: String): Post
	}
`;
export { postMutation };
