import {Producto} from '../models/Producto.js';

const paginaProductos = async (req,res)=>{
    const productos = await Producto.findAll();

    console.log(productos);
    res.render('viewproductos',{
        pagina:'Productos',
        productos
    });
}

const paginaClientes =(req,res)=>{
    res.render('viewcliente',{
        pagina:'Clientes'
    });
}



export {paginaProductos,paginaClientes}