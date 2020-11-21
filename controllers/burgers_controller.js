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
    const data = await burger.addBurger({
        burger_name: req.body.burger_name
    });
    res.json(data);
});

// change burger status to devoured
router.put("/api/burgers/:id", async function(req,res){
    const id = req.body.id;
    const data = await burger.devourBurger(id);
    res.json(data);
});

module.exports = router;