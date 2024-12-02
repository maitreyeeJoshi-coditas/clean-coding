import { Category } from "./categories.model";

const findAll = () => {
    try {
        return Category.categories;
    } catch (error) {
        throw error;
    }
}

export default {
    findAll
}