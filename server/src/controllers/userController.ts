import { Request, Response } from 'express';

import pool from '../database';

class userController{
    public async list(req: Request, res: Response): Promise <void>{
        const users = await pool.query('SELECT * FROM users');
        res.json(users);
    }
    public async getOne(req: Request, res: Response): Promise<any>{
        const {id} = req.params;
        const users = await pool.query('SELECT * FROM users WHERE id =?', [id]);
        console.log(users.length);
        if (users.length > 0){
            return res.json(users[0])
        }
        res.status(404).json({text: "el usurio no existe"});
    }
    public async update(req: Request, res: Response): Promise <void>{
        const {id} = req.params;
        const oldUser = req.body;
        await pool.query('UPDATE users set ? WHERE id = ?', [req.body, id]);
        res.json({message: "the user was update"});
    }
    public async create(req: Request, res: Response): Promise <void>{
        const result = await pool.query('INSERT INTO users set?', [req.body]);
        res.json({message: "user saved"});
    }
    public async delete(req: Request, res: Response): Promise <void>{
        const{id} = req.params;
        await pool.query('DELETE FROM users WHERE id = ?',[id]);
        res.json({message: "the user was deleted"})
    }
}

const UserController = new userController;
export default UserController;