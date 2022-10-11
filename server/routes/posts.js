const router = require("express").Router()
const Bot = require("../models/Bot")
const Project = require("../models/Project")

const multer  = require('multer')
const path = require('path')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/')
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

/*router.post('/', async (req, res)=>{
  const newBot = new Bot(req.body)
  try{
    const savedBot = await newBot.save()
    res.status(200).json(savedBot)
  } catch (err){
    res.status(500).json(err)
  }
}) */


router.get('/project', async(req, res)=>{
  try{
    const allProjects = await Project.find({})
    res.status(200).json(allProjects)
  } catch (err){
    res.status(500).json(err)
  }
})

router.get('/project/:id', async(req, res)=>{
  try{
    const project = await Project.findById(req.params.id)
    res.status(200).json(project)
  } catch (err){
    res.status(500).json(err)
  }
})

router.post('/project', async(req, res)=>{
  const newProject = new Project(req.body)
  try{
    const savedProject = await newProject.save()
    res.status(200).json(savedProject)
  } catch (err){
    res.status(500).json(err)
  }
})

router.delete('/project/:id', async(req, res)=>{
  try{
    const project = await Project.findByIdAndRemove(req.params.id)
    res.status(200).json("post deleted.")
  } catch (err){
    res.status(500).json(err)
  }
})

/*
router.get('/project/:id/robots', async(req, res)=>{
  try{
    const project = await Project.findById(req.params.id)
    const robots = await Bot.findById()
  } catch (err){
    res.status(500).json(err)
  }
})
*/
router.post('/model', upload.single('model'), async(req, res)=>{
  // 
    const file = req.file
    console.log('this is the file',file)
    const result = await uploadFile(file)
    console.log(result)
    res.send('model uploaded')
})

module.exports = router;