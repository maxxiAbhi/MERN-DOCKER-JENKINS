const mongoose = require('mongoose');
const connection= async()=>{
const connect = await mongoose.connect(`mongodb://root:1234@mongodb:27017/DocketTestTodo?authSource=admin`);
if(connect){
    console.log('DB connect sucessfull ....')
    return connect
}else{
    console.log('DB connect unsucessfull')
}
}
module.exports=connection