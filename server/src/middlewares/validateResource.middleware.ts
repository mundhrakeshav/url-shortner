import { NextFunction, Request, Response } from "express";
import { AnyObjectSchema } from "yup";

const validateResource = (resourceSchema : AnyObjectSchema) => async (req: Request, res: Response, next: NextFunction) => {

    try {
        await resourceSchema.validate({
            body: req.body,
            query: req.query,
            params: req.params
        });
        next()
    } catch (error) {
        console.log("ERROR: ", {error});
         return res.status(401).send(error)
    }
}


export default validateResource;