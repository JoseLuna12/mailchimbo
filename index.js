const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000

app.use(cors())

var mailController = require("./controllers/mailing")

app.get('/:email', mailController.Mailchimp);

app.post('/notiMailChimp', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})