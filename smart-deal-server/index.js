const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express=require('express');
const app=express();
const cors=require('cors');
const port=process.env.PORT || 3000;
 
//middleware
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Okay man we have arrived in jungle');
})
//smart-project-db
//60WtPKK8WjNgPHBj
const uri = "mongodb+srv://smart-project-db:60WtPKK8WjNgPHBj@cluster0.6pjurty.mongodb.net/?appName=Cluster0";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
 
async function run(){
    try{
          await client.connect();
          await client.db("admin").command({ping: 1});
          console.log("Pinged your deployment. You successfully connected to MongoDB!");
               
          const database= client.db("smartDB");
            const dataCollection=  database.collection("products");

          app.post("/products",async(req,res)=>{
            const product=req.body;
            const getProduct=await dataCollection.insertOne(product)
             res.send(getProduct);
            
          })
            
           app.get('/products',async(req,res)=>{
            const cursor= dataCollection.find();
            const result=await cursor.toArray();
             res.send(result) 
           })
            
           //findone
           app.get('/products/:id',async(req,res)=>{
            const id=req.params.id;
            const getData=res.body;
            const insertId={_id: new ObjectId(id)};
            const result=await dataCollection.findOne(insertId);
            res.send(result);
           })

          app.patch('/products/:id',async(req,res)=>{
              const id=req.params.id;
              const product=req.body;
              const query={_id: new ObjectId(id)};
              const update={
                $set:{
                      name:product.name,
                      company:product.company
                }
              }
              const result=await dataCollection.updateOne(query,update);
              res.send(result);
             })

           app.delete('/products/:id',async(req,res)=>{
                   
                const id=req.params.id;
                const query={_id: new ObjectId(id)};
                const result=await dataCollection.deleteOne(query)
                res.send(result);
             })
    }

    finally{

    }
}

run().catch(console.dir)

app.listen(port,()=>{
    console.log("port moves to",port);
})