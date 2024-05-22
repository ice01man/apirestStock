import express from 'express'
import config from './servicio/config.js'
import CnxMongoDb from './model/DAO/DBmongo.js'
import cors from 'cors'

import RouterProductos from './router/productos.js'
import RouterCarrito from './router/carrito.js'
// CLASE 55  1:28hs

const app = express()
app.use(cors())
app.use(express.static('public'))

app.use(express.urlencoded({extended: true}))
app.use(express.json())

// ------------------ Rutas / endpoints API RESTful -------------------
app.use('/api/productos', new RouterProductos().start())
app.use('/api/carrito', new RouterCarrito().start())

if(config.MODO_PRESISTENCIA == 'MONGODB') {  await CnxMongoDb.conectar() }
// ------------------- LISTEN DEL SERVIDOR ---------------------
const PORT = config.PORT
const server = app.listen(PORT, () => console.log(`Servidor apiRestful escuchando en http://localhost:${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))
