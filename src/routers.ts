import { Application } from 'express';
import { personaEndpoint } from './persona/controllers/persona.controller'

  
export const endPoints= (app:Application): void =>
{ 
    personaEndpoint(app);
}
