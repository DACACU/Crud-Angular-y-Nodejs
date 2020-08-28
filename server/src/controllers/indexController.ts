import {Request, Response} from 'express';

class indexController{
    public index (req: Request, res: Response){
        res.json({text: 'USER is in /user'});
    }
}
export const IndexController = new indexController;