const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader('Acsess-Control-Allow-Origin', '*')
  res.setHeader(
    'Acsess-Control-Allow-Header',
    'Origin, X-Requested-With, Content-Type, Accsept'
  )
  res.setHeader(

  'Acsess-Control-Alloq',
  'GET , POST, PATCH, DELETE, OPTIONS'
  )
  next()
})

app.get('/post',(req, res, next) => {
    const post = req.body;
    console.log(post)
    res.status(201).json({
      messages: "post added sucsesfully"
    })
})


app.use('/posts',(req, res, next) => {
  const posts = [
  {
    id: 13123234,
    title: " bing",
    content: "ding"
  },
  {
    id: 1343443,
    title: 'bing',
    contnet: 'bleh'
  }
]

  return res.status(200).json({
    message: 'posts sent sucsefully',
    posts: posts
  })
})

module.exports = app;
