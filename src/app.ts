// import dotenv from "dotenv";
import express from "express";
import path from "path";
import * as routes from "./controllers/routes/routesHandler";


// dotenv.config();

const app = express();
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static('public'));
app.use('/css',express.static(path.join(__dirname,'public/css')));

app.set('view engine','ejs');
app.set("views",path.join(__dirname,'views'));




// Configure routes
routes.register( app );

const PORT = 8080;

app.listen(PORT,()=>{
    // tslint:disable-next-line:no-console
    console.log(`Server started at http://localhost:${PORT}`)
})