const router = require("express").Router()

router.get('/', async(req, res)=>{
    res.status(200).json('this is the auth route')
})

module.exports = router;
