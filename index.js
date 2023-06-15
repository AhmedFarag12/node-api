const express = require('express')
const  mongoose  = require('mongoose')
const productRoutes = require('./routes/productRoutes')
const app = express()
const port = 3000

//connect to database
mongoose.set("strictQuery", false)
mongoose.connect('mongodb://localhost:27017/node-api',{useNewUrlParser : true , useUnifiedTopology:true},)
.then(()=> console.log('connected to database'))
.catch((error)=> console.log(error))

//the middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }));




//products routes 
app.use('/products' , productRoutes)






app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))