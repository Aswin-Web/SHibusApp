const mongoose=require('mongoose')

const connectDB=async ()=>{
    await mongoose.connect('mongodb://localhost:27017/product_service')
    .then(()=> console.log('MongoDB Connected SuccessFully - PRODUCT_SERVICE'))
}

module.exports=connectDB