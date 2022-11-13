import express from 'express';

const router = express.Router();

router.get('/',(req,res)=>{
    res.render('viewinicio',{
        pagina:'Inicio'
    });
});

router.get('/clientes',(req,res)=>{
    res.render('viewcliente',{
        pagina:'Clientes'
    });
});

router.get('/productos',(req,res)=>{
    res.render('viewproductos',{
        pagina:'Productos'
    });
});

router.get('/lista-clientes',(req,res)=>{
    res.send('lista-clientes');
});

router.get('/lista-productos',(req,res)=>{
    res.send('lista-productos');
});


export default router;