const express = require ('express');
const burger = require ('../models/burger');
const router = express.Router();

//Create the `router` for the app

// show all burgers
router.get("/", async function(req, res) {  
    const data = await burger.listBurgers() 
    let hbsObject = {
        burgers: data
    } 
    console.log(data);
    res.render("index", hbsObject);
});

// add burger
router.post("/api/burgers",async function(req,res){
    const name = req.body.burger_name;
    const data = await burger.addBurger(name);
    res.send(data);
});

// change burger status to devoured
router.put("/api/burgers/:id", async function(req,res){
    const burgerID = req.params.id;
    const data = await burger.devourBurger(burgerID);
    res.json(data);
});

module.exports = router;