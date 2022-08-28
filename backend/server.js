require('dotenv').config()
const express=require('express')
const cors=require('cors')
const PORT=process.env.PORT || 8000
const Todos=require('./todoModel')
require('./db')()



const app=express()
app.use(express.json());
app.use(cors())




app.get('/',(req,res)=>{
    res.send({msg:"hello world!"});
})
app.post('/api/addtodo',async(req,res)=>{
  try {
    
    const {title,description}=req.body
    console.log(title)
    console.log(description)
    const todo=await Todos.create({title,description})
    console.log(todo)
    if(todo){
        res.send({msg:"todo added successfully",status:200});
    }else{
        res.send({msg:"todo not added",status:400});
    }
  } catch (error) {
    res.send({msg:"something went wrong",status:400});
  }
    
})

app.get('/api/getalltodos',async(req,res)=>{
    try {
        const todo=await Todos.find()
        if(todo){
            res.send({msg:"todo added successfully",data:todo,status:200});
        }else{
            res.send({msg:"todo not get",status:400});
        }
    } catch (error) {
      res.send({msg:"something went wrong",status:400});
    }
      
  })


  app.post('/api/deletetodo',async(req,res)=>{
    try {
        const todo=await Todos.findByIdAndDelete(req.body.id)
        console.log(todo)
        if(todo){
            res.send({msg:"todo deleted successfully",status:200});
        }else{
            res.send({msg:"todo not deleted",status:400});
        }
    } catch (error) {
      res.send({msg:"something went wrong",status:400});
    }
      
  })

app.listen(PORT,()=>console.log('listening on port '+PORT))