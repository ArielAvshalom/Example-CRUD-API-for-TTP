const express = require('express')
const bodyParser = require('body-parser')
const db = require('./queries')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use( //don't worry about this too much...
    bodyParser.urlencoded({
        extended : true
    })
)

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)






//all this is doing is parsing our requests before the handlers do and storing it in req.body.

app.get('/', (req, res) => {
    res.json({info: "testing node, express and postgres"})
})

app.listen(port, () => {
    console.log(`app running on port ${port}.`)
})
