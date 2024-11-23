import {Request,Response} from "express";
import {CENSO} from "../models";

export const getCensos = async (req: Request,res: Response) => {

    const censos = await CENSO.findAll();

    res.json({censos})
}

export const getCenso = async (req: Request,res: Response) => {
    const {id} = req.params;

    const censo = await CENSO.findByPk(id);

    if (censo) res.json({censo});
    else res.status(404).json({msg: `No existe el censo con el id: ${id}`})
}

export const postCenso = async (req: Request,res: Response) => {

    const {body} = req;

    try {
        const censo = await CENSO.create(body);
        res.json({censo})
    }catch (e) {
        console.error(e);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

export const putCenso = async (req: Request,res: Response) => {

    const {id} = req.params;
    const {body} = req;

    try {
        const censo = await CENSO.findByPk(id);
        if (!censo){
            res.status(404).json({msg: `No existe el censo con el id: ${id}`})
            return ;
        }
        await censo.update(body);
        res.json({censo});
    }catch (e) {
        console.error(e);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

export const deleteCenso = async (req: Request,res: Response) => {

    const {id} = req.params;

    try {
        const censo = await CENSO.findByPk(id);
        if (!censo){
            res.status(404).json({msg: `No existe el censo con el id: ${id}`});
            return ;

        }
        await censo.update({state: false});
        res.json({censo});
    }catch (e) {
        console.error(e);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}