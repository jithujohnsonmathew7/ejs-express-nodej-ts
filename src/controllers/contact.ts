import { Request, Response } from 'express';

class ContactController{
     public static Contact = (req: Request , res:Response  , next: any)=>{
          res.render('pages/contact', {
            title:'Contact Us'
          });
     }
}

export default ContactController