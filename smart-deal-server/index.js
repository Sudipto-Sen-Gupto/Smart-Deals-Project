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
            const bidsCollection=database.collection('Bids')
          app.post("/products",async(req,res)=>{
            const product=req.body;
            const getProduct=await dataCollection.insertOne(product)
             res.send(getProduct);
            
          })
            
           app.get('/products',async(req,res)=>{
            const ascendingMaxPrice={price_max:1}
            const projectField={title:1,price_max:1,price_min:1,category:1}
            // const cursor= dataCollection.find().sort(ascendingMaxPrice).skip(2).limit(2).project(projectField)

            
            const email=req.query.email;
            const query={}
            console.log(email);
            if(email){
              query.email=email;
              
            }
            const cursor= dataCollection.find(query)
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

             app.get('/bids',async(req,res)=>{
              const email=req.query.email;
              const query={};
              if(email){
                query.buyer_email=email;
              }
              const cursor=bidsCollection.find(query);
              const result=await cursor.toArray();
              res.send(result);
             })

             app.delete('bids/:id',async(req,res)=>{
              const id=req.params.id;
              const query={_id: new ObjectId(id)};
              const result=await bidsCollection.deleteOne(query);
              res.send(result)
             })
    }

    finally{

    }
}

run().catch(console.dir)

app.listen(port,()=>{
    console.log("port moves to",port);
})