
import ModelFactory from '../model/DAO/prodcutosFactory.js'
import config from './config.js'
import validar from './validaciones.js'

class Servicio {

    constructor() {
        // this.model = new ModelMem()
        // this.model = new ModelFile()
        this.model = ModelFactory.get(config.MODO_PRESISTENCIA)
    }

    obtenerProductos = async id => {
        if(id) {
            const producto = await this.model.obtenerProducto(id)
            return producto
        }
        else {
            const productos = await this.model.obtenerProductos()
            return productos
        }
    }
    
    guardarProducto = async producto => {
        const error = validar(producto)
        if(!error) {
            const productoGuardado = await this.model.guardarProducto(producto)
            return productoGuardado
        }
        else{
            console.error(error)
            return {}
        }
    }
    
    actualizarProducto = async (id,producto) => {
        const productoActualizado = await this.model.actualizarProducto(id,producto)
        return productoActualizado
    }
    
    borrarProducto = async id => {
        const productoEliminado = await this.model.borrarProducto(id)
        return productoEliminado
    }
}


export default Servicio