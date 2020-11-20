const expressHB = require ('express-handlebars');
const express = require ('express');
const routes = require ('./controllers/burgers_controller');
const PORT = process.env.PORT || 8080;
const app = express();

// will share any static html files with the browser
app.use( express.static('public') );

// accept incoming POST requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set handlebars
app.engine("handlebars", expressHB({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
app.use(routes);

// Listener ==================================================
app.listen(PORT, function() {
    console.log(`Eat-Da-Burger! running on: http://localhost:${PORT}`)
});
