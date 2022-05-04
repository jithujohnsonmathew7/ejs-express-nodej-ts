import { Request, Response } from 'express';

class Error{
     public static Index = (req: Request , res:Response  , next: any)=>{
          res.render('pages/error');
     }
}

export default Error