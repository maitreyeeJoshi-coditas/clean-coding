import { INews } from "./news.model";
import newsRepository from "./news.repository";

const findAll = (query: Pick<INews, "categoryId">) => {
    try {
        const newsArticles = newsRepository.findAll(query);
        if(!newsArticles.length) {
            throw "Could not find the news articles.";
        }
    } catch (error) {
        throw error;
    }
}

const findOne = (query: Pick<INews, "id">) => {
    try {
        const newsArticle = newsRepository.findOne(query);
        if(!newsArticle) {
            throw "Could not find the news article.";
        }
    } catch (error) {
        throw error;
    }
}

export default {
    findAll,
    findOne
}