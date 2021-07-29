
import { Application, Request, Response } from "express";
import { STATUS_CODES } from "http";
import { Persona } from '../model/persona'

async function addPersona(req: Request, res: Response)
{
    const cuerpo:Persona = req.body;
    //console.log("Body: "+  JSON.stringify(cuerpo));
    try {
      const persona= await Persona.create(cuerpo);
      res.status(201).send(persona);
    } catch (ex:any)
    {
     // console.log(ex);
      res.status(501).send(ex);
      return;
    }

}

async function findById(req: Request, res: Response)
{
  const persona= await Persona.findByPk(req.params.id);
  if (persona==null)
    res.status(404).send(`Person con ID: ${req.params.id} no encontrada`);
  else
    res.status(200).send(persona);
}

async function deletePersona(req: Request, res: Response)
{
  const persona = await Persona.findByPk(req.params.id);
  if (persona==null)
    res.status(404).send(`Person con ID: ${req.params.id} no encontrada`);
  else
  {
    persona.destroy();
    res.status(200).send();
  }
}
async function updatePersona(req: Request, res: Response)
{
  const persona = await Persona.findByPk(req.params.id);
  if (persona==null)
    res.status(404).send(`Person con ID: ${req.params.id} no encontrada`);
  else
  {
    try {
      const personaUpdate=Object.assign(persona,req.body);
      personaUpdate.save();
      res.status(200).send();
    } catch (ex)
    {
      res.status(501).send(ex);
      return;
    }
  }
}
export const personaEndpoint = (app: Application): void => {
 
  app.post("/persona/add", addPersona); 
  app.delete("/persona/:id", deletePersona); 
  app.get("/persona/:id", findById)
  app.put("/persona/:id", updatePersona); 
};

