const express = require('express')
const cors = require('cors')

const router = require('./routes')
const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000'
  }));
app.use(router)

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})
