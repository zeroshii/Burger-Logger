const express = require ('express');
const burger = require ('../models/burger');
const router = express.Router();

//Create the `router` for the app

// show all burgers
router.get("/", async function(req, res) {  
    const data = await burger.selectAll();  
    res.render("index", data);
});

// new burger
router.post("/api/burgers",async function(req,res){
    const name = req.body.burger_name;
    const data = await burger.insertOne(name);
    res.send(data);
});

// update burger
router.put("/api/burgers/:id", async function(req,res){
    const burgerID = req.params.id;
    const isDevoured = req.body.devoured;
    const data = await burger.updateOne(burgerID, isDevoured);
    res.json(data);
});

module.exports = router;