 const express = require('express');
 const mongoose = require('mongoose');
 const cors = require('cors');
 const routes = require('./routes');
 const app = express();

 mongoose.connect('mongodb+srv://fylip:231199fylip@onmistack-w71lt.mongodb.net/week10?retryWrites=true&w=majority', {
     useNewUrlParser: true,
     useUnifiedTopology: true
 });
 app.use(cors());
 app.use(express.json());//precisa vir antes das rotas(routes)
 app.use(routes);
 app.listen(3333);