const dotenv = require("dotenv")
const express = require("express")
dotenv.config({path:'./config/config.env'})
const app=express()
//using CORS
//******************************8 */
const cors = require('cors')
app.use(cors())

//creating logger using pino logger
/*********************************************8 */
const logger = require('./middlewares/logger')
app.use(logger)
//configuring static file
/********************************** */
app.use(express.static('public'))

//use ejs
//******************************** */
app.set('view engine','ejs')

app.get('/home',(req,res)=>{
    var RecommendedProduct = {
        id:"1",
        title:"Shoes",
        Price:"$250"
    }
    var categories = ["Fashion","Beauty Products","Electronicss"]

    res.render('home',
        {
            Product:RecommendedProduct,
            Categories:categories

    })
})
//********************************** */
//creating logger
// const logger = (req,res,next)=>{
//     console.log(`request received${req.method}${req.url}`)
//     req.reqStartTime = Date.now()
//     next()
// }
// app.use(logger)
/***************************************** */
const products=require('./routes/products')
app.use('/api/products',products)
const PORT=process.env.SERVER_PORT||8000
app.listen(PORT,()=>{
    console.log("listening on port:",PORT)
})

