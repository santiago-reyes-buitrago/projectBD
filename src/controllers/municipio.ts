import {Request,Response} from "express";
import {Municipio} from "../models";

export const getMunicipios = async (req: Request,res: Response) => {

    const municipios = await Municipio.findAll();

    res.json({municipios})
}

export const getMunicipio = async (req: Request,res: Response) => {
    const {id} = req.params;

    const municipio = await Municipio.findByPk(id);

    if (municipio) res.json({municipio});
    else res.status(404).json({msg: `No existe el municipio con el id: ${id}`})
}

export const postMunicipio = async (req: Request,res: Response) => {

    const {body} = req;

    try {
        const municipio = await Municipio.create(body);
        res.json({municipio})
    }catch (e) {
        console.error(e);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

export const putMunicipio = async (req: Request,res: Response) => {

    const {id} = req.params;
    const {body} = req;

    try {
        const municipio = await Municipio.findByPk(id);
        if (!municipio){
            res.status(404).json({msg: `No existe el municipio con el id: ${id}`})
            return ;
        }
        await municipio.update(body);
        res.json({municipio});
    }catch (e) {
        console.error(e);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

export const deleteMunicipio = async (req: Request,res: Response) => {

    const {id} = req.params;

    try {
        const municipio = await Municipio.findByPk(id);
        if (!municipio){
            res.status(404).json({msg: `No existe el municipio con el id: ${id}`});
            return ;
        }
        await municipio.update({state: false});
        res.json({municipio})
    }catch (e) {
        console.error(e);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}