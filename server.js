let port = 8080;
let express = require('express')
let app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + "/app/css"));


require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


app.listen(port,()=>{
    console.log(`Listening to Port ${port}`)
})