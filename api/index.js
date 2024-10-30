import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoute from './routes/user.route.js'
import authRoute from './routes/auth.route.js'
dotenv.config()

mongoose.connect(process.env.MONGO).then(
    ()=>{console.log('mogoDB is connected')}
).catch((err)=>{
console.log(err)
})


const app = express()

app.use(express.json())


app.listen(3000,()=>{
    console.log('server is runing on port 3000!!')
})

app.use('/api/user',userRoute)
app.use('/api/auth',authRoute)