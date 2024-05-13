import { MongoClient } from "mongodb"
import config from "../../servicio/config.js"

class CnxMongoDb {
    static client = null
    static db =  null
    static connection = false

    static conectar = async _ => {
        try {
            console.log("Conectando a la DB ")
            CnxMongoDb.client = new MongoClient(config.STRCNX)

            await CnxMongoDb.client.connect()
            console.log("Connected OK ")
            
            CnxMongoDb.db = CnxMongoDb.client.db(config.BASE)
            CnxMongoDb.connection = true

        }
        catch {
            console.log("Failed to connect")
        }
    }
}

export default CnxMongoDb