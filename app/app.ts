import express, { json } from "express";
import categoriesRoutes from "./categories/categories.routes";
import newsRoutes from "./news/news.routes";

export const startServer = () => {
    try {
        const app = express();

        app.use(json());
        app.use("/categories", categoriesRoutes.router);
        app.use("/news",newsRoutes.router);

        const { PORT } = process.env;

        app.listen(
            PORT,
            () => {
                console.log(`Server started on port ${PORT}.`)
            }
        )
    } catch (error) {
        console.log("An error occured in starting the server.");
    }
}