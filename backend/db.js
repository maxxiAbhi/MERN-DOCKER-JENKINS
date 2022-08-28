const mongoose = require('mongoose');
const connection= async()=>{
const connect = await mongoose.connect(`mongodb://mongo:27017/DocketTestTodo`);
if(connect){
    console.log('DB connect sucessfull ....')
    return connect
}else{
    console.log('DB connect unsucessfull')
}
}
module.exports=connection