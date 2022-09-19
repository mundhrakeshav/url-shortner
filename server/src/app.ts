import bodyParser from "body-parser";
import express  from "express";
import config from "config"; //picks from config folder
import routes from "./routes";
import db from "./db"
import cors from "cors";

const app = express();
app.use(cors({
    origin: config.get("cors_origin")
}))
app.use(bodyParser.json())

app.listen(config.get("port"), () => {    
    db();
    routes(app);
    console.log(`Server started on port: ${config.get("port")}`);
})