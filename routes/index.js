import express from 'express';
import { paginaProductos,paginaClientes } from '../controller/paginasController.js';
import { guardarCliente } from '../controller/clienteController.js';

const router = express.Router();

router.get('/',(req,res)=>{
    res.render('viewinicio',{
        pagina:'Inicio'
    });
});

router.get('/clientes', paginaClientes);
router.post('/clientes',guardarCliente);

router.get('/productos',paginaProductos);


export default router;