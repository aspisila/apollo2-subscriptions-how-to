import { Parish } from "./parish.model";

const parishController = {
    parishes: () => Parish.find({})
};

export { parishController };