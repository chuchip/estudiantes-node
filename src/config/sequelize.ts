import {
    Sequelize
  } from "sequelize";
  console.log("Inicializando database ...\n\n ");
 
 
  export const sequelize = new Sequelize("postgres://postgres:pass@localhost:5432/estudiantes");
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


