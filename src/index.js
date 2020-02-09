const express = require('express');
const { port } = require('./config');
const bodyParser = require('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//Controllers
const postController=require('./Controllers/PostController');
//
app.get('/',postController.index);

app.post('/',postController.create);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));