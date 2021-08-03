import { PersonOutputDto } from './dto/output/PersonOutputDto';
import {Persona} from './persona';

export function personToDto(p:Persona)
{
    return {
        id_persona: p.id_persona,
        user: p.user,
        password: p.password,
        name: p.name,
        surname:p.surname,
        company_email:p.company_email,
        personal_email:p.personal_email,
        city: p.city,
        active: p.active,
        imagen_url: p.imagen_url,
        termination_date: p.termination_date,
        createdAt: p.createdAt,
        updatedAt: p.updatedAt
    };
}