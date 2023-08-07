const { Router } = require('express')
const router = Router()

// get all users
router.get('/', async (req, res) => {
    console.log("hello world")
})


module.exports = router