const mongoose = require('mongoose');

var mongoURL='mongodb+srv://gayathri:gayathri@cluster0.6wrbdk1.mongodb.net/mem-rooms'

mongoose.connect(mongoURL, {useUnifiedTopology : true, useNewUrlParser:true})

var connection  = mongoose.connection
connection.on('error', ()=>{
    console.log('mongoose connection failed')
})

connection.on('connected', ()=>{
    console.log("monogose connected")
})

module.export=mongoose