const express = require('express')
require('dotenv').config()
const cors = require('cors')
const app = express()

app.use(cors())

const users = [
    {
      "id": 1,
       "name": "John", 
       "email": "john@gmail.com"
    },

    {"id": 2,
     "name": "Mary",
     "email": "mary@gmail.com"
    },

    {
      "id": 3,
     "name": "Peter",
     "email": "peter@gmail.om"
    },

]


app.get('/', (req, res) => {
    res.send("Public content")
})

app.get('/users', (req, res) => {
    res.json(users)
})

const port = process.env.PORT

app.listen(port)