const mongoose = require('mongoose');

mongoose.set(`strictQuery`, true);
mongoose.connect("mongodb+srv://Aditya:Aditya123@hackathon.mgpjffb.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("Conncted to Database"))
.catch((err)=>console.log(err))