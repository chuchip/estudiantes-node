import { userInfo } from "os";
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
  import {sequelize } from '../../config/sequelize'
/*
  interface PersonaAttributes {
    id_persona: number;
    user: string;
    password: string | null;
  }
  interface PersonaCreationAttributes extends Optional<PersonaAttributes, "id_persona"> {}
*/
  export class Persona extends Model//<PersonaAttributes, PersonaCreationAttributes>   implements PersonaAttributes
  {   
    public id_persona!: number; // Note that the `null assertion` `!` is required in strict mode.
    public user!: string;
    public password!: string | null; // for nullable fields
    public name!: string;
    public surname!:string;
    public company_email!:string;
    public personal_email!:string;
    public city!: string;
    public active!: boolean ;
    public imagen_url!: string
    public termination_date!: Date
     // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
  }

  Persona.init(
    {
        id_persona: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        user: {
            type: new DataTypes.STRING(30),
            allowNull: false,
        },
        password: {
            type: new DataTypes.STRING(25),
            allowNull: false,
        },
        name: {
          type: new DataTypes.STRING(100),
          allowNull: false,
        },
        surname: {
          type: new DataTypes.STRING(100),
          allowNull: false,
        },
        company_email: {
          type: new DataTypes.STRING(50),
          allowNull: false,
        },
        personal_email: {
          type: new DataTypes.STRING(50)
        },
        city:{
          type: new DataTypes.STRING(50),
          allowNull: false,
        }, 
        active:
        {
          type: DataTypes.BOOLEAN,
          defaultValue: true,
        },
        imagen_url:
        {
          type: new DataTypes.STRING(50)
        },
        termination_date:
        {
          type: new DataTypes.DATE
        } 
    },
    {
      tableName: "persona",
      sequelize, // passing the `sequelize` instance is required
    }
  );
 
/*
    id_persona string [pk, increment]
    user string
    password string [note: "estara Encriptado"]
    surname string  [not null]
    company_email string  [not null]
    personal_email string [not null]
    city string [not null]
    active boolean  [not null] 
    created_date date  [not null]
    imagen_url string
    termination_date date*/
      