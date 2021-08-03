import {
    Sequelize
  } from "sequelize";
  console.log("Inicializando database ...\n\n ");
 
  export const DB_CONFIG= {
    user: process.env.DB_USER ? process.env.DB_USER: 'postgres',
    password:  process.env.DB_PASSWORD?process.env.DB_PASSWORD :'pass',
    host: process.env.DB_HOST ? process.env.DB_HOST: 'localhost',    
    port: process.env.DB_PORT ? process.env.DB_PORT: 5432,        
    db: process.env.DB_NAME ?process.env.DB_NAME:"estudiantes"
}
 
  export const sequelize = new Sequelize(`postgres://${DB_CONFIG.user}:${DB_CONFIG.password}@${DB_CONFIG.host}:${DB_CONFIG.port}/${DB_CONFIG.db}`);
  export async function testDB()
  {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
  }
  export interface LooseObject {
    [key: string]: any
  }


