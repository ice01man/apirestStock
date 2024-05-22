
import ModelFactory from '../model/DAO/carrito/carritoFactory.js'
import config from './config.js'


class Servicio {

    constructor() {
        // this.model = new ModelMem()
        // this.model = new ModelFile()
        this.model = ModelFactory.get(config.MODO_PRESISTENCIA)
    }

    obtenerCarrito = async _ => {
        const carrito = await this.model.obtenerCarrito()
        return carrito
    
    }
    
    guardarCarrito = async carrito => {
        const carritoGuardado = await this.model.guardarCarrito(carrito)
        return carritoGuardado
     
    }
    
}


export default Servicio