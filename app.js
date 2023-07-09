const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const mongoose=require ('mongoose')
require ('dotenv').config()
const {DB_HOST, PORT}=process.env


const contactsRouter = require('./routes/api/contacts')
const authRouter= require('./routes/api/auth')
const usersRouter= require('./routes/api/users')



const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use('/api/contacts', contactsRouter)
app.use('/api/auth', authRouter)
app.use('/api/users', usersRouter)


app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  if (err.message.includes('E11000 duplicate key error')) {
    res.status(409).json({ message: 'Already exist' })
  }

  if (err.message.includes('Cast to ObjectId failed')) {
    res.status(400).json({ message: 'ID is not valid' })
  }

  if (err.name === 'ValidationError') {
    res.status(400).json({ message: err.message })
  }

  res.status(500).json({ message: err.message })
})

mongoose.connect(DB_HOST).then(()=>app.listen(PORT,()=>console.log('server started')))
.catch((err)=>{
  console.error(err.message) 
  process.exit(1)})

module.exports = app
