import { IndexController } from './../controllers/indexController';
import { Router } from 'express';



class IndexRoutes {

    public router:Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', IndexController.index);
    }
}
const indexRoutes = new IndexRoutes();
export default indexRoutes.router;