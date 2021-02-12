const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 8081
mongoose.connect('mongodb://127.0.0.1:27017/xmeme', {
    useNewUrlParser: true,
    useCreateIndex: true
})
const User = mongoose.model('User',{
    name : {
        type : String,
        required : true
    },
    caption : {
        type : String,
        required : true
    },
    url : {
        type : String,
        required : true
    }
})
const publicDirectoryPath = path.join(__dirname,'../public')
app.use(express.static(publicDirectoryPath))

app.use(express.urlencoded({
    extended: true
  }))

app.post("/memes",(request,response)=>{
    const user = new User(request.body)
    user.save().then(()=>{
        let obj = {
            "id" : user._id
        }
        response.send(obj)
    }).catch((e)=>{
        response.send(e)
    })
})



app.get("/memes",(req,res)=>{
    User.find().sort({_id:-1}).limit(100).then((doc)=>{
        res.send(doc)
    }).catch((e)=>{
        res.send(e)
    })
})

app.get("/memes/:id",(req,res)=>{
    const id = req.params.id;
    User.findById(id).then((doc)=>{
        if(!doc)
        return res.status(404).send()
        res.send(doc)
    }).catch((e)=>{
        res.status(505).send();
    })
})

app.listen(port, ()=> {
    console.log(`Server is listening on ${port}`)
});

