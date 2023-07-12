const joi=require('joi');

const contactsSchema=joi.object({
  name:joi.string().required(),
  email:joi.string().required(),
  phone:joi.string().required(),
  favorite: joi.boolean()
})

const contactsFavoriteSchema=joi.object({
    favorite: joi.boolean().required()
})

module.exports={contactsSchema, contactsFavoriteSchema}