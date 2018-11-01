import { userResolver } from "./user";
import { helloResolver } from "./hello";
import { postResolver } from "./post";
import { parishResolver } from "./parish";

const resolvers = [userResolver, helloResolver, postResolver, parishResolver];

export default resolvers;
