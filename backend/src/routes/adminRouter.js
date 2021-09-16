
const router = require ('express').Router()
const Auth = require('../../middleware/auth')
const { permission } = require('../../middleware/permission')

const { 
    allUserGetController,
    inactiveUserGetController,
    userDeleteController,
    userDeletePermanentController
    } = require('../controllers/adminController')

    router.get('/alluser',  allUserGetController) // Auth, permission(['admin']),
    router.get('/deleteduser',  inactiveUserGetController) // Auth, permission(['admin']),

    router.put('/update/:id', userDeleteController) // Auth, permission(['admin']),    temporary
    router.delete('/delete/:id', userDeletePermanentController) // Auth, permission(['admin']),    permanent
    


module.exports =router