import { Application, Request, Response } from "express";
import {ff} from '../app1'
import CoursesData from "../../data/courses.json";

export const loadApiEndpoints = (app: Application): void => {
  app.get("/api", (req: Request, res: Response) => {
    return res.status(200).send(CoursesData);
  });
  app.get("/chu", (req: Request, res: Response) => {
    ff();
    return res.status(200).send(CoursesData);
  });
};
