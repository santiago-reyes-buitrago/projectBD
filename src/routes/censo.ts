import {Router} from "express";
import {postDepartamento,deleteCenso, getCenso, getCensos, putCenso} from "../controllers";

export const routerCenso = Router();

routerCenso.get('/',getCensos);
routerCenso.get('/:id',getCenso);
routerCenso.post('/',postDepartamento);
routerCenso.put('/:id',putCenso);
routerCenso.delete('/:id',deleteCenso);