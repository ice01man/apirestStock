import Joi from "joi";

const validar = producto => {
    const productoSchema = Joi.object({
        nombre: Joi.string().min(3).max(20).required(),
        categoria: Joi.string(),
        precio: Joi.number().min(1).required(),
        stock: Joi.number().min(1).required(),
        descripcion: Joi.string(),
        foto: Joi.string(),
        proveedor: Joi.string(),
        estado: Joi.string(),
        envio: Joi.required()
    })
    productoSchema.validate(producto)
}

export default validar