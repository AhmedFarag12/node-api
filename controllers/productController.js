const Product = require('../models/Product')


const index = async(req , res)=>{
    try {
        const products = await Product.find({})
        res.status(200).json(products)

    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

const show = async(req , res)=>{
    try {
        const {id} = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        console.log(error);
        res.status(500).json({message : error.message})
    }
}

const create = async (req,res)=>{

    try {
      const product = await Product.create(req.body)
  
    } catch (error) {
      console.log(error);
      res.status(500).json({message : error.message})
    }
  
  }


const update =  async (req , res)=>{
    try {
        const {id} = req.params
        const product = await Product.findByIdAndUpdate(id , req.body)

        if(!product){
            return res.status(404).json({message : `cannot find any product with ID ${id}`})
        }

        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct)

    } catch (error) {
         console.log(error);
         res.status(500).json({message : error.message})
    }
}

const destroy = async(req , res)=>{
    try {
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id)

        if(!product){
            return res.status(404).json({message : `cannot find any product with ID ${id}`})
        }
        res.status(200).json({message : ` ${id} Deleted Successfully`})

    } catch (error) {
        console.log(error);
        res.status(500).json({message : error.message})
    }
}

module.exports ={
    index,show,update,destroy,create
}