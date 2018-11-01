import { gql } from "apollo-server";

const postType = gql`
	type Post {
		picture: String
		description: String
	}
`;

export { postType };
