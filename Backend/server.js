const express = require('express')
const app = express()
const port = 4000
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const path = require('path');
app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));

// const cors = require('cors');
// app.use(cors());
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//   res.header("Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

//mongodb+srv://admin:<password>@cluster0.8taek.mongodb.net/?retryWrites=true&w=majority
// getting-started.js
const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb+srv://eoin:eoinpassword@datarepcluster.kycv2ha.mongodb.net/test');
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

const foodSchema = new mongoose.Schema({
  FoodName: String,
  FoodPic: String,
  FoodDescription: String
});

const foodModel = mongoose.model('fionn', foodSchema);

app.post('/api/foods', (req, res) => {
  console.log(req.body);

  foodModel.create({
    FoodName: req.body.FoodName,
    FoodPic: req.body.FoodPic,
    FoodDescription: req.body.FoodDescription
  })

  res.send('Data Recieved');
})

app.get('/api/foods', (req, res) => {
    foodModel.find((error, data) => {
    res.json(data);
  })
})

app.get('/api/food/:id', (req, res) => {
  console.log(req.params.id);
  foodModel.findById(req.params.id, (error, data) => {
    res.json(data);
  })
})

app.put('/api/food/:id', (req, res) => {
  console.log("Update: " + req.params.id);

  foodModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
    (error, data) => {
      res.send(data);
    })
})

app.delete('/api/food/:id', (req, res) => {
  console.log('Deleting: ' + req.params.id);
  foodModel.findByIdAndDelete({ _id: req.params.id }, (error, data) => {
    res.send(data);
  })
})

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../build/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})