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

















// import express from 'express';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// import authRoutes from './routes/auth.js'
// import userRoutes from './routes/user.js'
// import productRoutes from './routes/product.js'
// import cartRoutes from './routes/cart.js'
// import orderRoutes from './routes/order.js'
// import stripeRoutes from './routes/stripe.js'

// import JWT from 'jsonwebtoken'


// const app = express();

// dotenv.config();

// app.use(bodyParser.json({ limit: '30mb', extended: true }));
// app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
// // app.use(express.urlencoded({extended: true}))
// // app.use(express.json())
// app.use(cors());



// app.use('/api/auth', authRoutes)
// app.use('/api/user', userRoutes)
// app.use('/api/product', productRoutes)
// app.use('/api/cart', cartRoutes)
// app.use('/api/order', orderRoutes)
// app.use('/api/checkout', stripeRoutes)








// const secret = 'fdyuhefegjgkheryhefhj'
// app.post("/flutter", (req, res) => {
//   console.log(req.body)
//   console.log(JSON.parse(req.body));

//   const token = JWT.sign(req.body.email, secret)

//   res.json({token: token, messgae:"hello flutter"})
// })









// mongoose.connect(process.env.SERVER_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("DB connected successfully"))
//   .catch((err) => console.log(err))

// const PORT = process.env.PORT || 5000
// app.listen(PORT, () => {
//   console.log(`Server is running at Port ${PORT}`);
// })

// app.get("/", (req, res) => {
//   res.send("hello world")
// })









