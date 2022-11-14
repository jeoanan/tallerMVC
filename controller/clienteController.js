import { Cliente } from "../models/Cliente.js";

const guardarCliente = async (req,res)=>{
    const {nombreCliente,apellidoCliente,docCliente,correoCliente,direccionCliente,telefonoCliente} = req.body;

    const errores =[];

    if (nombreCliente.trim()===''){
        errores.push({mensaje: 'El nombre está vacio'});
    }

    if (apellidoCliente.trim()===''){
        errores.push({mensaje: 'El apellido está vacio'});
    }

    if (docCliente.trim()===''){
        errores.push({mensaje: 'El documento está vacio'});
    }

    if (correoCliente.trim()===''){
        errores.push({mensaje: 'El correo está vacio'});
    }

    if (direccionCliente.trim()===''){
        errores.push({mensaje: 'La direccion está vacia'});
    }

    if (telefonoCliente.trim()===''){
        errores.push({mensaje: 'El teléfono está vacio'});
    }

    if(errores.length>0){
        res.render('viewcliente',{
            pagina:'Clientes',
            errores,
            nombreCliente,
            apellidoCliente,
            docCliente,
            correoCliente,
            direccionCliente,
            telefonoCliente
        });
    }else{
        try {
            await Cliente.create({
                nombre: nombreCliente,
                apellidos: apellidoCliente,
                documento: docCliente,
                correo: correoCliente,
                direccion: direccionCliente,
                telefono: telefonoCliente
            });

            res.redirect('/clientes');
        } catch (error) {
            console.log(error);
        }
    }
}

export {guardarCliente}