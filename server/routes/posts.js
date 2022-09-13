const router = require("express").Router()

const multer  = require('multer')
const path = require('path')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
    }
  })

const upload = multer({ storage: storage })


const {uploadFile} = require('../s3')

router.get('/', async(req, res)=>{
    res.status(200).json('this is the posts route')
})

/*router.get('/image/:key', async(req, res) => {
    console.log(req.params)
    const key = req.params.key
    const readStream = getFileStream(key)
    readStream.pipe(res)
}) */

router.post('/model', upload.single('model'), async(req, res)=>{
  // 
    const file = req.file
    console.log('this is the file',file)
    const result = await uploadFile(file)
    console.log(result)
    res.send('model uploaded')
})

module.exports = router;