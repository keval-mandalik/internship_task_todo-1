const express = require("express");
const router = express.Router();

const TODO = require('../model/todo');

router.get('/fetchalltodos',async (req,res)=>{
try{
    const todos = await TODO.find({});
    res.json(todos);
}catch(err){

}
})


router.post('/addTodos', async(req,res)=>{

    try{
        const {title,description,tag} = req.body;
        const todos = new TODO({title,description,tag});
        const saveTODOS = await todos.save();
        res.json(saveTODOS);
    }catch(err){
        console.log(err.message);
        res.status(500).send("internal server error");
    }
})

module.exports = router;