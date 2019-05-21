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

app.post('/formE', function(req, res){
  res.sendFile(path.join(__dirname + '/formE.html'))
  // aqui recibo las preguntas del anterior
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
})

app.post('/formF', function(req, res){
  res.sendFile(path.join(__dirname + '/formF.html'))

  let fb_a = req.body.fb_a
    if(fb_a == "fb1"){
      lifeExp += 1
    }
    else if (fb_a == "fb2") {
      lifeExp += 5
    }
    else if (fb_a == "fb3") {
      lifeExp += 10
    }

  let fb_b = req.body.fb_b
    if (fb_b == "fb4") {
      lifeExp += 1
    }
    else if (fb_b == "fb5") {
      lifeExp += 5
    }
    else if (fb_b == "fb6") {
      lifeExp += 10
    }

})

app.post('/formG', function(req, res){
  res.sendFile(path.join(__dirname + '/formG.html'))

  let in_a = req.body.in_a
  if (in_a == "in1") {
    lifeExp += 1
  }
  else if (in_a == "in2") {
    lifeExp += 5
  }
  else if (in_a == "in3") {
    lifeExp += 10
  }

let in_b = req.body.in_b
  if (in_b == "in4") {
    lifeExp += 1
  }
  else if (in_b == "in5") {
    lifeExp += 7
  }
  else if (in_b == "in6") {
    lifeExp += 18
  }

})

app.post('/formH', function(req, res){
  res.sendFile(path.join(__dirname + '/formH.html'))

  let tw_a = req.body.tw_a
  if (tw_a == "tw1") {
    lifeExp += 1
  }
  else if (tw_a == "tw2") {
    lifeExp += 5
  }
  else if (tw_a == "tw3") {
    lifeExp += 10
  }

  let tw_b = req.body.tw_b
  if (tw_b == "tw4") {
    lifeExp += 1
  }
  else if (tw_b == "tw5") {
    lifeExp += 5
  }
  else if (tw_b == "tw6") {
    lifeExp += 10
  }

})

app.post('/formI', function(req, res){
  res.sendFile(path.join(__dirname + '/formI.html'))

  let ot_a = req.body.ot_a
  if (ot_a == "ot1") {
    lifeExp += 1
  }
  else if (ot_a == "ot2") {
    lifeExp += 5
  }
  else if (ot_a == "ot3") {
    lifeExp += 10
  }

})

app.post('/formJ', function(req, res){
  res.sendFile(path.join(__dirname + '/formJ.html'))

  let hr_a = req.body.hr_a
  if (hr_a == "hr1") {
    lifeExp += 1
  }
  else if (hr_a == "hr2") {
    lifeExp += 5
  }
  else if (hr_a == "hr3") {
    lifeExp += 10
  }

  let hr_b = req.body.hr_b
  if (hr_b == "hr4") {
    lifeExp += 1
  }
  else if (hr_b == "hr5") {
    lifeExp += 5
  }
  else if (hr_b == "hr6") {
    lifeExp += 10
  }

  let hr_c = req.body.hr_c
  if (hr_c == "hr7") {
    lifeExp += 1
  }
  else if (hr_c == "hr8") {
    lifeExp += 5
  }
  else if (hr_c == "hr9") {
    lifeExp += 10
  }

})

app.post('/formK', function(req, res){
  res.sendFile(path.join(__dirname + '/formK.html'))

  let sl_a = req.body.sl_a
  if (sl_a == "sl1") {
    lifeExp += 1
  }
  else if (sl_a == "sl2") {
    lifeExp += 5
  }
  else if (sl_a == "sl3") {
    lifeExp += 10
  }

  let sl_b = req.body.sl_b
  if (sl_b == "sl4") {
    lifeExp += 1
  }
  else if (sl_b == "sl5") {
    lifeExp += 5
  }
  else if (sl_b == "sl6") {
    lifeExp += 10
  }

  let sl_c = req.body.sl_c
  if (sl_c == "sl7") {
    lifeExp += 1
  }
  else if (sl_c == "sl8") {
    lifeExp += 5
  }
  else if (sl_c == "sl9") {
    lifeExp += 10
  }

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

  let mo_a = req.body.mo_a
  if (mo_a == "mo1") {
    lifeExp += 1
  }
  else if (mo_a == "mo2") {
    lifeExp += 5
  }
  else if (mo_a == "mo3") {
    lifeExp += 10
  }

  let mo_b = req.body.mo_b
  if (mo_b == "mo4") {
    lifeExp += 1
  }
  else if (mo_b == "mo5") {
    lifeExp += 5
  }
  else if (mo_b == "mo6") {
    lifeExp += 10
  }

  let mo_c = req.body.mo_c
  if (mo_c == "mo7") {
    lifeExp += 1
  }
  else if (mo_c == "mo8") {
    lifeExp += 5
  }
  else if (mo_c == "mo9") {
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


app.listen(process.env.PORT || 3000, function(){
    console.log('Live on port 3000!')
})
