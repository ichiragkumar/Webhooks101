import express from "express";
import dotenv from "dotenv";
import  sendEmailNotification  from "./sendEmailNotification.js";

dotenv.config();
const PORT = process.env.PORT || 3009;
const app = express();


app.use(express.json());

app.post("/hashnode-webhooks", (req, res)=>{
    const { title, slug } = req.body;

   try {
    if(title && slug){
        sendEmailNotification(title, slug);

    }
    res.status(200).send("webHooks recieved");

   } catch (error) {
    res.status(500).send(error);

   }
})


app.get("/", (req, res)=>{
    res.send("welcome to Hashnode webhooks")
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})



