import { ObjectId } from "mongodb"
import CnxMongoDb from "../DBmongo.js"

class ModelMongoDB {
    
    obtenerProductos = async () => {
        
        if(!CnxMongoDb.connection) return []
        const productos = await CnxMongoDb.db.collection('productos').find({}).toArray()
        return productos

    }
    
    obtenerProducto = async  id => {
        if(!CnxMongoDb.connection) return {}
        const productos = await CnxMongoDb.db.collection('productos').findOne({_id: new ObjectId(id)})
        return productos

    }
    
    guardarProducto = async producto => {
        if(!CnxMongoDb.connection) return {}
        await CnxMongoDb.db.collection('productos').insertOne(producto)
        return producto

    }
    
    actualizarProducto = async (id, producto) =>  {
        if(!CnxMongoDb.connection) return {}
        await CnxMongoDb.db.collection('productos').updateOne({_id: new ObjectId(id)},{$set: producto } )
        const productActualizado = await this.obtenerProducto(id)
        return productActualizado

    }
    
    
    borrarProducto = async id =>  {
        if(!CnxMongoDb.connection) return {}
        const productEliminado = await this.obtenerProducto(id)
        await CnxMongoDb.db.collection('productos').deleteOne({_id: new ObjectId(id)} )
        
        return productEliminado

    }

}

export default ModelMongoDB
