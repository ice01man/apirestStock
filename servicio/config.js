// mongod --dbpath="./" -> para iniciar el servicio de MongoDB
//mongosh               -> para iniciar a trabajar con el Servidor MDB 
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 8080

const MODO_PRESISTENCIA = process.env.MODO_PRESISTENCIA || 'MONGODB'
const STRCNX = process.env.STRCNX || 'mongodb://127.0.0.1'
const BASE = process.env.BASE || 'mongod' 

export default {
    MODO_PRESISTENCIA,
    PORT,
    STRCNX,
    BASE
}