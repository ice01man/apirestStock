import ModelMongoDB from "./productosDB.js"
import ModelFile from "./productosFile.js"
import ModelMem from "./productosMEM.js"

class ModelFactory {

    static get(tipo){
        switch(tipo) {
            case 'MEM':
                console.log("***** PRESISITENDO EN MEMORIA ***** ")
                return new ModelMem()
            
            case 'FILE':
                console.log("***** PRESISITENDO EN FILE SYSTEM ***** ")
                return new ModelFile()

            case 'MONGODB':
                console.log("***** PRESISITENDO EN BASE DE DATOS MDB ***** ")
                return new ModelMongoDB()

            default:
                console.log("***** PRESISITENDO EN DEFAULT ***** ")
                return new ModelMem();
        }
    }
}

export default ModelFactory