// mongod --dbpath="./" -> para iniciar el servicio de MongoDB
//mongosh               -> para iniciar a trabajar con el Servidor MDB 

const MODO_PRESISTENCIA = 'MONGODB'  // FILE - MEM - BASEDATOS
const PORT = process.env.PORT || 8080
//const STRCNX = 'mongodb://127.0.0.1'
const STRCNX = 'mongodb+srv://Pauleta:Ikarus135@ecommerce.cbs49zr.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce'
const BASE = 'ecommerce' 
export default {
    MODO_PRESISTENCIA,
    PORT,
    STRCNX,
    BASE
}