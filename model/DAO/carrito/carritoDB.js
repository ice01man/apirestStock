import CnxMongoDb from "../DBmongo.js"

class ModelMongoDB {
    
    obtenerCarrito = async () => {
        
        if(!CnxMongoDb.connection) return []
        const carrito = await CnxMongoDb.db.collection('carrito').find({}).toArray()
        return carrito

    }
    
    guardarCarrito = async carrito => {
        if(!CnxMongoDb.connection) return {}
        await CnxMongoDb.db.collection('carrito').insertOne(carrito)
        return carrito

    }

}

export default ModelMongoDB
