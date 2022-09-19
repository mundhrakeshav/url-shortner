import { Express, Request, Response  } from "express";
import { createShortURL, getAnalytics, getShortURL, handleRedirect } from "../controllers/shortURL.controller";
import validateResource from "../middlewares/validateResource.middleware";
import createShortURLSchema from "../schema/createShortURL.schema";



function routes(app: Express) {
    
    app.get("/healthcheck", (request: Request, response: Response) => {
        return response.send("App Healthy ")
    })

    app.post("/api/url", validateResource(createShortURLSchema), createShortURL)
    app.get("/:shortID", handleRedirect)
    app.get("/api/url/:shortID", getShortURL);
    app.get("/api/analytics", getAnalytics)
}

export default routes;