import * as express from "express";
import IndexController from "..";
import ContactController from "../contact";
import AboutController from "../about";
import Error from "../error";

// export default class Routes{
    export const register = (app:express.Application)=>{


        app.get("/", IndexController.Index)
        app.get("/about", AboutController.About)
        app.get("/contact", ContactController.Contact)
        app.get("/401", Error.Index)

}
// }