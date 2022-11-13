import Sequelize  from "sequelize";
import db from "../config/db.js";

export const Cliente=db.define('clientes',{
    nombre: {
        type: Sequelize.STRING
    },
    apellidos: {
        type: Sequelize.STRING
    },
    documento: {
        type: Sequelize.STRING
    },
    correo : {
        type: Sequelize.STRING
    },
    direccion : {
        type: Sequelize.STRING
    },
    telefono : {
        type: Sequelize.STRING
    }

})