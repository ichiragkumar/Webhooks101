import express from "express";
import dotenv from "dotenv";
import sendDiscordMessage  from "./sendDiscordMessage.js";
dotenv.config();
const PORT = process.env.PORT || 3009;
const app = express();


app.use(express.json());

app.get("/", (req, res)=>{
    return res.send("Hello World!")
})


app.post("/user", (req, res)=>{
    const {name , age, gender } = req.body;
    const newUser = {
        name,
        age,
        gender,
    }
    sendDiscordMessage(newUser)
    res.status(200).json({
        newUser:newUser
    });
})


app.post('/hashnode-webhook', (req, res) => {
    console.log(req.body);
    // Handle the request
    res.status(200).json({
        message: 'Webhook received!'
  });
})


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
