import ModelMongoDB from "../carrito/carritoDB.js"
import ModelMem from "../carrito/carritoMEM.js"

class ModelFactory {

    static get(tipo){
        switch(tipo) {
            case 'MEM':
                console.log("***** PRESISITENDO EN MEMORIA ***** ")
                return new ModelMem()

            case 'MONGODB':
                console.log("***** PRESISITENDO EN BASE DE DATOS MDB Carrito ***** ")
                return new ModelMongoDB()

            default:
                console.log("***** PRESISITENDO EN DEFAULT ***** ")
                return new ModelMem();
        }
    }
}

export default ModelFactory