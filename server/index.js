import express from 'express';
import data from './data';
import dotenv from 'dotenv';
import config from './config';
import mongoose, { mongo } from 'mongoose';
import userRoute from './routes/userRoute';

/*dotenv.config();

const mongodbUrl = config.MONGODB_URL
console.log(mongodbUrl)
mongoose.connect(mongodbUrl,{
    useNewUrlParser:true
}).catch(error => console.log(error.reason));
*/

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://aliviacart:aliviacart@aliviacart.rlz1g.mongodb.net/aliviacart?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true ,useUnifiedTopology: true});
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log("connected")
  //client.close();
});


const app = express();

app.use("/api/users",userRoute);
app.get("/api/products",(req,res) => {
    res.send(data.products);
});


app.get("/api/product/:id",(req,res) => {
    const productId = req.params.id;
    console.log(productId)
    const product = data.products.find(x=>x._id === productId);
    if(product)
        res.send(product);
    else res.status(404).send({msg:"Product Not Found."})
});


app.listen(9032, () => {console.log("Server started at http://localhost:9032")});