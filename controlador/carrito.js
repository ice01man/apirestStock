import Servicio from '../servicio/carrito.js'

class Controlador {

    constructor() {
        this.servicio = new Servicio();
    }
    
    obtenerCarrito = async (req,res) => {
        const carrito = await this.servicio.obtenerCarrito()
        res.json(carrito)
    }
    
    guardarCarrito = async (req,res) => {
        try {
            const carrito = req.body
            const carritoGuardado = await this.servicio.guardarCarrito(carrito)
            res.json(carritoGuardado)
        }
        catch(err){
            res.json({errMsg: err.message})
        }
    }
}    

export default Controlador