const express = require("express");
const app = express();
const exphbs = require("express-handlebars");

app.set("view engine", "handlebars");

app.use(express.static(__dirname + '/public'))
app.use("/bootstrapCss", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use('/bootstrapJs', express.static(__dirname + "/node_modules/bootstrap/dist/js"))
app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist"));

app.engine("handlebars",exphbs.engine({
    partialsDir: __dirname + "/views/partials",
    layoutsDir: __dirname + "/views/layouts",
    })
);

app.get("/", function (req, res) {
    res.render("Dashboard", {
        productos: ['banana', 'cebollas', 'lechuga', 'papas', 'pimenton', 'tomate'],
    });
})

app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});