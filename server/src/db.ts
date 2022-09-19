import mongoose from "mongoose";
import config from "config"

export default async function db() {
    const db_uri = process.env.MONGODB_URL;
    console.log("connecting to DB", db_uri);
    
    try { 
        if (!db_uri) {
            console.error("No db URI", {db_uri});
            
            return;
        }
        await mongoose.connect(db_uri, {
            dbName: process.env.MONGODB_DB_NAME,
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log("Connected to DB");
            
        })
    }
    catch (e) {
        console.log(e);
        
    }
}