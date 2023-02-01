const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const port = process.env.PORT || 4000;


mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.log(err));

mongoose.Promise = global.Promise;


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.json());

app.get('/faiyaz', function (req, res) {
    res.send('hello world')
  })

app.use('/api', routes)  

app.listen(port, function(){
  console.log(`Started a server on port ${port}`); 
})
