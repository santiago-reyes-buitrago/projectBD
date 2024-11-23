import {Router} from "express";
import {deleteMunicipio, getMunicipio, getMunicipios, postMunicipio, putMunicipio} from "../controllers";

export const routerMunicip = Router();

routerMunicip.get('/',getMunicipios);
routerMunicip.get('/:id',getMunicipio);
routerMunicip.post('/',postMunicipio);
routerMunicip.put('/:id',putMunicipio);
routerMunicip.delete('/:id',deleteMunicipio);