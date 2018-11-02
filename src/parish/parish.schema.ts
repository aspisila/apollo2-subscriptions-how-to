import { addMockFunctionsToSchema, makeExecutableSchema } from "apollo-server";
import { GraphQLSchema } from "graphql";
import { parishType, parishQuery } from "./schema";

const parishSchema: GraphQLSchema = makeExecutableSchema({
	typeDefs: [parishType, parishQuery]
});

addMockFunctionsToSchema({ schema: parishSchema });

export { parishSchema };