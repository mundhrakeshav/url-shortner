import { Request, Response } from "express";
import analytics from "../Model/analytics.model";
import shortURL from "../Model/shortUrl.model";

export async function createShortURL(req: Request, res: Response) {
    const { destination } = req.body;
    const newUrl = await shortURL.create({ destination })
    return res.send(newUrl)
}

export async function handleRedirect(req: Request, res: Response) {
    console.log("Handling Redirect");
    const { shortID } = req.params;
    console.log({shortID});
    
    const short = await shortURL.findOne({ shortID }).lean();
    console.log("Short Found",{short});
    if (short == null) {
        return res.sendStatus(404);
    }
    (await analytics.create({shortURL: short._id}))
    return res.redirect(short.destination.toString());
}

export async function getShortURL(req: Request, res: Response) {
    const { shortID } = req.params;    
    const short = await shortURL.findOne({ shortID }).lean();
    if (!short) {
        return res.sendStatus(404);
    }

    return res.json(short);
}
export async function getAnalytics(req: Request, res: Response) {
    const data = await analytics.findOne({}).lean();
    console.log(data);
    
     return res.send(data)
}