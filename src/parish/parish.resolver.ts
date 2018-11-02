import { parishController } from "./parish.controller";

const parishResolver = {
    Query: {
        parishes(root: any, args: any, context: any) {
            return parishController.parishes();
        }
    }
}

export { parishResolver }