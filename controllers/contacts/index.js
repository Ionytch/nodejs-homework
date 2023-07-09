const getContactsList=require('./getContactsLilst')
const getContactById=require('./getContactById')
const addContact=require('./addContact')
const deleteContact=require('./deleteContact')
const updateContact=require('./updateContact')
const updateFavorite=require('./updateFavorute')

module.exports={
    getContactsList,
    getContactById,
    addContact,
    deleteContact,
    updateContact,
    updateFavorite
}