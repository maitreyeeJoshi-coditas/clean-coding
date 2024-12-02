import { NextFunction, Request, Response, Router } from "express";
import newsServices from "./news.services";
import { INews } from "./news.model";

const router = Router();

router.get(
    "/",
    (req: Request, res: Response, next: NextFunction) => {
        try {
            const categoryId = req.query.categoryId as unknown as Pick<INews, "categoryId">;
            const newsArticles = newsServices.findAll(categoryId);
            res.status(200).send(newsArticles);
        } catch (error) {
            res.status(500).send(error);
        }
    }
)

router.get(
    "/:id",
    (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id as unknown as Pick<INews, "id">;
            const newsArticles = newsServices.findOne(id);
            res.status(200).send(newsArticles);
        } catch (error) {
            res.status(500).send(error);
        }
    }
)

export default { router };