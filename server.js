const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const axios = require("axios")
const app = express()
const port = 3000
const urlencodedParser = bodyParser.urlencoded({ extended: false })


app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json()); //as a midleware

//function addKata
const addKata = async ( req, res) => {
  const { kata } = req.body;
  try {
    const insertKata = await (
      await axios.post('http://localhost:3002/kataTidakPantas', {
        kata: kata,
    })
).data;
  res.status(201).json({
    message: 'new kata added',
    kt: insertKata,
  })
  } catch(err) {
    res.status(404).json({
      message: err.message,
    })
  }
}

//function listKomentar
const listKomentar = async ( req, res) => {
  const { nama } = req.body;
  const { komentar } = req.body;
  try {
    const insertNewKomen = await (
      await axios.post('http://localhost:3001/listKomentar', {
        nama: nama,
        komentar: komentar,
    })
).data;
  res.status(201).json({
    message: 'new coment added',
    komen: insertNewKomen,
  })
  } catch(err) {
    res.status(404).json({
      message: err.message,
    })
  }
}

//function getdata komentar
async function getKomentar( req, res ) {
  const komen = await (
    await axios.get('http://localhost:3001/listKomentar')
  ).data;
  res.status(201).json({
    getkomen: komen,
  })
}



// ROUTER POST
app.post('/addkata', addKata);
app.post('/listKomentar', listKomentar);

//ROUTER GET
app.get('/',(req,res)=>{
  res.render('form')
})

app.get('/listKomentar', getKomentar);

//MEMANGGIL PORT
app.listen(port,()=>{
  console.log(`App is running at port ${port}`)
})