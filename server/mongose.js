const mongoose = require('mongoose')

const modeltodo = mongoose.model('datas', new mongoose.Schema({
  task:String
}),
"datas")

module.exports=modeltodo

// const mongoose = require('mongoose')

// const modelsh=new mongoose.Schema({
//     task:String
// })
// const todomodel=mongoose.model('datas',modelsh)
// module.exports=todomodel