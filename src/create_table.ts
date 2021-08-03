import { Client } from 'pg';
import { DB_CONFIG} from './config/sequelize'

var puerto:number= +DB_CONFIG.port;

const client = new Client({
    user: DB_CONFIG.user,
    host: DB_CONFIG.host,
    database: DB_CONFIG.db,
    password: DB_CONFIG.password,
    port: puerto
  });

  client.connect().then(
    r => client.query("SELECT EXISTS (SELECT n.* FROM pg_catalog.pg_class c  JOIN   pg_catalog.pg_namespace n ON n.oid = c.relnamespace WHERE  n.nspname = 'public'"+
      "   AND  c.relname = 'persona' );").then(r =>{
        //console.log(r.rows[0].exists);
        if (!r.rows[0].exists)
        {
          console.log("Tabla persona No encontrada");
          client.query(`CREATE TABLE "persona" (
            "id_persona" SERIAL PRIMARY KEY,
            "user" varchar(30),
            "password" varchar(25),
            "surname" varchar(100) NOT NULL,
            "company_email" varchar(50) NOT NULL,
            "personal_email" varchar(50),
            "city" varchar(50) NOT NULL,
            "active" boolean NOT NULL,
            "createdAt" date NOT NULL,
            "updatedAt" date,
            "imagen_url" varchar(100),
            "termination_date" date
          )`).then(x  => console.log("Tabla persona creada!")); 
        }
      }
    )
  )
  
