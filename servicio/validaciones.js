import Joi from "joi";

const validar = producto => {
    const productoSchema = Joi.object({
        nombre: Joi.string().min(3).max(20).required(),
        precio: Joi.number().min(1).required(),
        stock: Joi.number().min(1).required(),
        marca: Joi.string().min(1).required
    })
    productoSchema.validate(producto)
}

export default validar