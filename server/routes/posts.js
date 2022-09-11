const router = require("express").Router()

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

router.get('/', async(req, res)=>{
    res.status(200).json('this is the posts route')
})

router.post('/model', upload.single('model'), async(req, res)=>{
    
})

module.exports = router;