express = require("express");
app = express();
port = 3000;

app.listen(port, ()=> {console.log(`Server actively running on port ${port}`)});

app.use(express.json());
app.use(express.urlencoded({extended:true}));

accesories = [
    {"name": "Headphone",
    "price": 50},
    {"name":"Speakers",
    "price": 20},
    {"name":"Microphone",
    "price": 30}
]

app.get("/",(req,res)=> {
    res.send(accesories);
})

app.post('/',(req,res)=>{
    console.log(req.body)
    accesories.push(req.body)
    res.sendStatus(201)
    res.send(accesories)
})