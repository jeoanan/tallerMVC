import Sequelize  from "sequelize";
import db from "../config/db.js";

export const Producto = db.define('productos',{
    referencia: {
        type: Sequelize.STRING
    },
    nombre: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.INTEGER
    },
    cantidad : {
        type: Sequelize.INTEGER
    },
    descripcion : {
        type: Sequelize.STRING
    }

})