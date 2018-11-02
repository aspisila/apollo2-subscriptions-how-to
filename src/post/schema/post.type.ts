import { gql } from "apollo-server";
import { parishType } from "../../parish/schema";

const postType = `
	type Post {
		picture: String
		description: String
		parish: Parish
	}
`;

export default [ postType, parishType ];
