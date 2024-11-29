import {Router} from "express";
import {deleteDepartamento, getDepartamento, getDepartamentos, postDepartamento, putDepartamento} from "../controllers";

export const routerDepartament = Router();

routerDepartament.get('/',getDepartamentos);
routerDepartament.get('/:id',getDepartamento);
routerDepartament.post('/',postDepartamento);
routerDepartament.put('/:id',putDepartamento);
routerDepartament.delete('/:id',deleteDepartamento);