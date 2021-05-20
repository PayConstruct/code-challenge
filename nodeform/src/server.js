require('dotenv').config();
import express from "express";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";

let app = express();

viewEngine(app);

initWebRoutes(app);

let port = process.env.PORT || 8080;

app.listen(port, ()=>{
	console.log(`App is running at the ${port}`);
})