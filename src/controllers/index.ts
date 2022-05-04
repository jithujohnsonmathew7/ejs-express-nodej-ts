import { Request, Response } from 'express';

class IndexController{
     public static Index = (req: Request , res:Response  , next: any)=>{
        const mascots = [
            { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
            { name: 'Tux', organization: "Linux", birth_year: 1996},
            { name: 'Moby Dock', organization: "Docker", birth_year: 2013},
            { name: 'Loby mock', organization: "Microsoft", birth_year: 2022}
          ];
          const tagline = "No programming concept is complete without a cute animal mascot.";

          res.render('pages/index', {
            mascots,
            tagline,
            title:'Welcome'
          });
     }
}

export default IndexController