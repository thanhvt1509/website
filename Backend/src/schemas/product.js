import joi from "joi";
export const productSchema = joi.object({
  name: joi.string().required(),
  price: joi.number().required().min(0),
  original_price: joi.number().required().min(0),
  description_special: joi.string().required(),
  description_short: joi.string().required(),
  description_long: joi.string().required(),
  brand: joi.string().required(),
  images: joi.array().required(),
  categoryId: joi.string().required(),
  createdAt: joi.date().default(() => new Date()),
  updatedAt: joi.date().default(() => new Date()),
  deletedAt: joi.date().default(null),
  deleted: joi.boolean().default(false),
});
