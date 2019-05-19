const express = require('express')
const bodyParser = require('body-parser')
const url = require('url')
const path = require('path')
const mustacheExpress = require('mustache-express');

let app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname);

let lifeExp

app.get('/', function(req, res){
    lifeExp = 0
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.post('/formB', function(req, res){
  res.sendFile(path.join(__dirname + '/formB.html'))
})

app.post('/formC', function(req, res){
  res.sendFile(path.join(__dirname + '/formC.html'))
})

app.post('/formD', function(req, res){
  res.sendFile(path.join(__dirname + '/formD.html'))
})

app.post('/result', function(req, res){

  // let smartphone = req.body.smartphone
  //   if(document.getElementById("smartphone").checked = true) {
  //     lifeExp += 5
  //   }

  let device = req.body.device
    if(device == "smartphone") {
      lifeExp += 5
    }
    else if (device == "smartwatch") {
      lifeExp += 10
    }
    else if (device == "fitbit") {
      lifeExp += 15
    }

  let fb_feed = req.body.fb_feed
    if(fb_feed == "fb1"){
      lifeExp += 0
    }
    else if (fb_feed == "fb2") {
      lifeExp += 0
    }
    else if (fb_feed == "fb3") {
      lifeExp += 10
    }
    else if (fb_feed == "fb4") {
      lifeExp += 20
    }

  let fb_events = req.body.fb_events
    if (fb_events == "fb6") {
      lifeExp += 0
    }
    else if (fb_events == "fb7") {
      lifeExp += 0
    }
    else if (fb_events == "fb8") {
      lifeExp += 10
    }
    else if (fb_events == "fb9") {
      lifeExp += 30
    }

  let instagram = req.body.instagram
    if (instagram == "in1") {
      lifeExp += 0
    }
    else if (instagram == "in2") {
      lifeExp += 0
    }
    else if (instagram == "in3") {
      lifeExp += 10
    }
    else if (instagram == "in4") {
      lifeExp += 20
    }

  let instagram_st = req.body.instagram_st
    if (instagram_st == "in5") {
      lifeExp += 0
    }
    else if (instagram_st == "in6") {
      lifeExp += 0
    }
    else if (instagram_st == "in7") {
      lifeExp += 15
    }
    else if (instagram_st == "in8") {
      lifeExp += 30
    }

  let twitter = req.body.twitter
    if (twitter == "tw1") {
      lifeExp += 0
    }
    else if (twitter == "tw2") {
      lifeExp += 0
    }
    else if (twitter == "tw3") {
      lifeExp += 10
    }
    else if (twitter == "tw4") {
      lifeExp += 20
    }

  let other_platform = req.body.other_platform
    if (other_platform == "op1") {
      lifeExp += 0
    }
    else if (other_platform == "op2") {
      lifeExp += 0
    }
    else if (other_platform == "op3") {
      lifeExp += 8
    }
    else if (other_platform == "op4") {
      lifeExp += 15
    }

  let sleep = req.body.sleep
    if (sleep == "sp1") {
      lifeExp += 0
    }
    else if (sleep == "sp2") {
      lifeExp += 1
    }
    else if (sleep == "sp3") {
      lifeExp += 10
    }
    else if (sleep == "sp4") {
      lifeExp += 20
    }

  let calories = req.body.calories
    if (calories == "c1") {
      lifeExp += 0
    }
    else if (calories == "c2") {
      lifeExp += 2
    }
    else if (calories == "c3") {
      lifeExp += 15
    }
    else if (calories == "c4") {
      lifeExp += 30
    }

  let weight = req.body.weight
    if (weight == "w1") {
      lifeExp += 0
    }
    else if (weight == "w2") {
      lifeExp += 2
    }
    else if (weight == "w3") {
      lifeExp += 15
    }
    else if (weight == "w4") {
      lifeExp += 30
    }

  let coffee = req.body.coffee
    if (coffee == "cf1") {
      lifeExp += 0
    }
    else if (coffee == "cf2") {
      lifeExp += 10
    }

  let water = req.body.water
    if (water == "wt1") {
      lifeExp += 0
    }
    else if (water == "wt2") {
      lifeExp += 10
    }

  let other = req.body.other
    if (other == "ot1") {
      lifeExp += 0
    }
    else if (other == "ot2") {
      lifeExp += 10
    }

  let steps = req.body.steps
    if (steps == "sp1") {
      lifeExp += 0
    }
    else if (steps == "sp2") {
      lifeExp += 2
    }
    else if (steps == "sp3") {
      lifeExp += 10
    }
    else if (steps == "sp4") {
      lifeExp += 20
    }

  let heart = req.body.heart
    if (heart == "h1") {
      lifeExp += 0
    }
    else if (heart == "h2") {
      lifeExp += 2
    }
    else if (heart == "h3") {
      lifeExp += 10
    }
    else if (heart == "h4") {
      lifeExp += 20
    }

  let mood = req.body.mood
    if (mood == "m1") {
      lifeExp += 0
    }
    else if (mood == "m2") {
      lifeExp += 10
    }

  let prod = req.body.prod
    if (prod == "p1") {
      lifeExp += 0
    }
    else if (prod == "p2") {
      lifeExp += 10
    }

  console.log(lifeExp)

  res.render('result', {
      lifeExp,
  });

//   res.render('result', {
//     data : JSON.stringify(lifeExp),
// });



  // res.sendFile(path.join(__dirname + '/result.html'))
})


app.listen(3000, function(){
    console.log('Example app listening on port 3000!')
})
