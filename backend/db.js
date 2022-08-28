const mongoose = require('mongoose');
const connection= async()=>{
const connect = await mongoose.connect(`mongodb://mongo:27017/DocketTestTodo`,{ useNewUrlParser: true });
if(connect){
    console.log('DB connect sucessfull ....')
    return connect
}else{
    console.log('DB connect unsucessfull')
    return connect
}
}
module.exports=connection