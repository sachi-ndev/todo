// const express= require('express')
// const mongoose= require('mongoose')
// const cors = require('cors')
// const mongose=require('./mongose')

// const app = express()
// app.use(cors())
// app.use(express.json())

// mongoose.connect('mongodb://127.0.0.1:27017/todo')
// // .then(()=>{
//     app.post('/add',(req,res)=>{
//         const tasks=req.body.task
//         mongose.create({
//             task:tasks
//         })
//         .then(result => res.json(result))
//         .catch(err => res.json(err))
//     })
    
  
//     app.listen(3000,()=>{
//     console.log("connected");
//     })

// // })




const express= require('express')
const mongoose= require('mongoose')
const cors = require('cors')
const todomodel=require('./mongose')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/todo')


    app.get('/get',(req,res)=>{
        todomodel.find()
        .then(result=>res.json(result))
        .catch(err=>res.json(err))

    })


    app.post('/add',(req,res)=>{
        const tasks=req.body.task
        todomodel.create({
            task:tasks
        }).then(result=>res.json(result))
        .catch(err =>res.json(err))

    })

    app.listen(3001,()=>{
        console.log("connected");
    })