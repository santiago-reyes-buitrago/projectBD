import express, { Express, Request, Response } from "express";
import cors from "cors";
import {verificarConexion} from "./database/db";
import dotenv from "dotenv";
import {routerCenso, routerDepartament, routerMunicip} from "./routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;



app.use(cors());
app.use(express.json());
verificarConexion();

app.get("/", async (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});

app.use('/municipios',routerMunicip);
app.use('/departamentos',routerDepartament);
app.use('/censos',routerCenso);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});