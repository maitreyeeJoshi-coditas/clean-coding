import categoriesRepository from "./categories.repository";

const findAll = () => {
    try {
        const categories = categoriesRepository.findAll();
        if(!categories.length) {
            throw "Categories not found.";
        }
        return categories;
    } catch (error) {
        throw error;
    }
}

export default {
    findAll
}