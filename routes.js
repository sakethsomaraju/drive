const express = require('express')
const multer  = require('multer')
const path = require('path')
const fs = require('fs')
const bucket = require('./firebase')

var link = ''

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      let extArray = file.mimetype.split("/");
      let extension = extArray[extArray.length - 1];
      cb(null, file.fieldname + '-' + Date.now()+ '.' +extension)
    }
  })
  const upload = multer({ storage: storage })


const router = express.Router()

router.post('/post',upload.single('file'),async(req,res)=>{
    const filename = req.file.filename
    // const directory = path.join(__dirname,'uploads')
  await bucket.upload(`./uploads/${filename}`,(err,file)=>{
       if(err){
           console.log(err)
       }
       else{
        res.status(200).json({link:file.metadata.mediaLink})    
        
       }
   })
   



})




module.exports = router