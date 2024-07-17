'use strict'

const express = require('express')
const app = express()

app.use(express.static('public'))
app.get('/hello', (req, res) => res.send('Hello World from /hello'))

const port = 3000
app.listen(port, () => console.log(`Example app listening on port ${port}! \n This is Version 3 of the app`))
