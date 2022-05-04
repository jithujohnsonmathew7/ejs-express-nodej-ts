import { Request, Response } from 'express';

class AboutController{
     public static About = (req: Request , res:Response  , next: any)=>{
          res.render('pages/about', {
            title:'About Us'
          });
     }
}

export default AboutController