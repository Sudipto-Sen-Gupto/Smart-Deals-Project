const express=require('express');
const app=express();
const cors=require('cors');
const port=process.env.PORT || 3000;
 
//middleware
app.use(cors());
app.use(express());

app.get('/',(req,res)=>{
    res.send('Okay man we have arrived in jungle');
})

app.listen(port,()=>{
    console.log("port moves to",port);
})