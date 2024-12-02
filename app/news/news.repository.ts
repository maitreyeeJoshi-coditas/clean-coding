import { newsArticles } from "./news.data";
import { INews } from "./news.model";

const findAll = (query: Pick<INews, "categoryId">) => {
    try {
        const { categoryId } = query;
        return newsArticles.map(newsArticle => newsArticle.categoryId === categoryId);
    } catch (error) {
        throw error;
    }
}

const findOne = (query: Pick<INews, "id">) => {
    try {
        const { id } = query;
        return newsArticles.find(newsArticle => newsArticle.id === id);
    } catch (error) {
        throw error;
    }
}

export default {
    findOne,
    findAll
}