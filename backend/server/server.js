const express=require('express')
const app=express();
const port=4545;
const cors=require('cors');
const multer=require('multer');
const fs=require('fs')
const bodyParser=require('body-parser');
const mongoose=require('mongoose')
const config=require("./DB.js")
const userRoute=require('./user.route.js')
mongoose.promise=global.promise;
app.use(cors())
mongoose.connect(config.URL,{useNewUrlParser:
true}).then(
    ()=>{console.log('Database is connected'+config.URL)},
    err=>{console.log('can not connect to the database'+err)}
)

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use('/user',userRoute)
const st=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'images/')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload=multer({storage:st})

app.post('/saveimage',upload.single('file'),(req,res)=>{
    res.json({})
})
//getimage
app.get('/getimage/:upicname',(req,res)=>{
    res.sendFile("C:/Users/HP/OneDrive/Desktop/react/login_with_image/backend/server/images/"+req.params.upicname)
});
app.listen(port,()=>{
    console.log('listening at http://localhost:'+port)
})

