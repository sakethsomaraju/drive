const express = require('express')
const cors = require('cors')

const router = require('./routes')
const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use((req,res,next)=>{
  res.header("Access-Control-Aloow-Origin","*")
  res.header("Access-Control-Allow-Headers",
  "Origin, X-Requested-With,Content-Type,Accept,Authorization")
  res.header('Access-Control-Allow-Methods','GET,PUT,PATCH,POST,DELETE,OPTIONS')
  next()
})
app.use(router)

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})
