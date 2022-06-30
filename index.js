const express = require('express')
const userRoute = require('./routes/userRoute')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))

userRoute(app)

app.get('/', (req, res) => res.send('Olá mundo pelo express'))

app.listen(port, () => console.log('App rodando na porta 3000'))
