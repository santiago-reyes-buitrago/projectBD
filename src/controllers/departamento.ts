import {Request,Response} from "express";
import {DEPARTAMENTO} from "../models";

export const getDepartamentos = async (req: Request,res: Response) => {

    const departamentos = await DEPARTAMENTO.findAll();

    res.json({departamentos})
}

export const getDepartamento = async (req: Request,res: Response) => {
    const {id} = req.params;

    const departamento = await DEPARTAMENTO.findByPk(id);

    if (departamento) res.json({departamento});
    else res.status(404).json({msg: `No existe el municipio con el id: ${id}`})
}

export const postDepartamento = async (req: Request,res: Response) => {

    const {body} = req;

    try {
        const departamento = await DEPARTAMENTO.create(body);
        res.json({departamento})
    }catch (e) {
        console.error(e);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

export const putDepartamento = async (req: Request,res: Response) => {

    const {id} = req.params;
    const {body} = req;

    try {
        const departamento = await DEPARTAMENTO.findByPk(id);
        if (!departamento){
            res.status(404).json({msg: `No existe el municipio con el id: ${id}`})
            return ;
        }
        await departamento.update(body);
        res.json({departamento});
    }catch (e) {
        console.error(e);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

export const deleteDepartamento = async (req: Request,res: Response) => {

    const {id} = req.params;

    try {
        const departamento = await DEPARTAMENTO.findByPk(id);
        if (!departamento){
            res.status(404).json({msg: `No existe el municipio con el id: ${id}`});
            return ;
        }
        await departamento.update({state: false});
        res.json({departamento})
    }catch (e) {
        console.error(e);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}