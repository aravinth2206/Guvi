import express from 'express'
import AppRoutes from './routes.js'
const app = express()
const PORT = 8000
app.get('/',(req,res)=>{
    res.send('<h1>Welcome To Express Crud App</h1>')
})

app.use(express.json())
app.use(AppRoutes)
app.listen(PORT,()=>console.log(`App is listening to ${PORT}`))