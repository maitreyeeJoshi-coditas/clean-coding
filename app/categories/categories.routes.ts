import { NextFunction, Request, Response, Router } from "express";
import categoriesServices from "./categories.services";

const router = Router();

router.get(
    "/",
    (req: Request, res: Response, next: NextFunction) => {
        try {
            const categories = categoriesServices.findAll();
            res.status(200).send(categories);
        } catch (error) {
            res.status(500).send(error);
        }
    }
)

export default { router };