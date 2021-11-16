import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'

import userRoute from './routes/user.js'
import authRoute from './routes/auth.js'
import postRoute from './routes/post.js'

const app = express()

dotenv.config()


mongoose.connect(process.env.SERVER_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log('Database connect successfully')
}).catch((err) => {
  console.log(err);
})

// middleware
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use(helmet());
app.use(morgan("common"))

// route
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/post', postRoute)

app.get('/', (req, res) => {
  res.send('Backend start running on port 5000 🚀🚀!')
})


app.listen(process.env.PORT, () => {
  console.log(`Backend start running on port ${process.env.PORT} 🚀🚀!`);
})


























