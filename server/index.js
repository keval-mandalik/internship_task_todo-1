const express = require("express");
const connection = require('./database');
const cors = require('cors');
connection();
const app = express();
app.use(cors());
const PORT = process.env.PORT | 5000;

app.use(express.json());
app.use('/api/todo',require('./routes/todo_routes'));

app.listen(PORT,()=>{
    console.log(`server running at ${PORT}`);
})