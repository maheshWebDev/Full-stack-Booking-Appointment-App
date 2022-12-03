const express  = require('express');

const cors = require('cors')

const bodyParser = require('body-parser');

const UserRoutes = require('./routes/userRoute')

const db = require('./config/dbConfig')



const app = express();
app.use(cors())

app.use(bodyParser.json());

db.sync()
.then(result =>{
    // console.log(result)
})
.catch(err=>{
    console.log(err)
})

app.use(UserRoutes);

app.listen(3000,()=>{
    console.log("server is running...!")
});