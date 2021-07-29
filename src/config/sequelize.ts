import {
    Sequelize,
    Model,
    ModelDefined,
    DataTypes,
    HasManyGetAssociationsMixin,
    HasManyAddAssociationMixin,
    HasManyHasAssociationMixin,
    Association,
    HasManyCountAssociationsMixin,
    HasManyCreateAssociationMixin,
    Optional,
  } from "sequelize";
  console.log("Inicializando database ...\n\n ");
  class testInit
{
    constructor()
    {
        console.log("Iniciada clase testInit");
    }
}
  export const xx= new testInit();
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


