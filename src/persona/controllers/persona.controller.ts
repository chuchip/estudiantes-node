import { Application, Request, Response } from "express";
import { LooseObject } from '../../config/sequelize'
import { Persona } from '../model/persona'
import { PersonOutputDto } from '../model/dto/output/PersonOutputDto'
import { personToDto} from '../model/mapper'
async function addPersona(req: Request, res: Response)
{
    const cuerpo:Persona = req.body;
    //console.log("Body: "+  JSON.stringify(cuerpo));
    try {
      const persona= await Persona.create(cuerpo);
      res.status(201).send(persona);
    } catch (ex)
    {
      res.status(501).send("Error at addPersona: "+ex.message);
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
async function findAllPersona(req: Request, res: Response)
{
  console.log("Buscando todas las personas");
  const personas= await Persona.findAll({
    order: [  'id_persona']});
  const personasOutput:PersonOutputDto[]=[];
  personas.forEach( p =>   
    {      
      personasOutput.push(
        personToDto(p)
      )
    }
  )

  res.status(200).send(personasOutput);
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
      res.status(200).send(personaUpdate);
    } catch (ex)
    {
      res.status(501).send(ex.message);
      return;
    }
  }
}


async function searchPersona(req: Request, res: Response)
{
  console.log("en SearchPersona");
  const query=req.query;
 /* 
  var condWhere:LooseObject={}
  for (var prop in query) 
  {
//    console.log("Valor de propiedad: "+prop+" es: "+query[prop]);
    condWhere[prop]=query[prop];
    //condWhere[prop]={ [Op.like]: query[prop]};
  }
 */
 // console.log(condWhere)
  const persona = await Persona.findAndCountAll({ where: query});

  res.status(200).send(persona);
}
export const personaEndpoint = (app: Application): void => {
 
  app.post("/persona", addPersona); 
  app.delete("/persona/:id", deletePersona);   
  app.put("/persona/:id", updatePersona); 
  app.get("/persona/:id/id", findById)
  app.get("/persona", findAllPersona)
  app.get("/persona/search", searchPersona); 
};

