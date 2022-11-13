import express from "express";
import router from "./routes/index.js";
import db from './config/db.js';

const app = express();

db.authenticate()
    .then(()=>console.log('Conexion exitosa'))
    .catch(error=>console.log(error));

const port = process.env.PORT || 4000;

app.set('view engine', 'pug');

app.use((req,res,next)=>{
    
    const year = new Date();

    res.locals.ActualYear=year.getFullYear();

    return next();
});

app.use(express.static('public'));

app.use('/',router);

app.listen(port,()=>{
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})