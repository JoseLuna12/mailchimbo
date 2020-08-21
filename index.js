const express = require('express')
const app = express()
const port = 3000

var mailController = require("./controllers/mailing")

app.get('/', mailController.Mailchimp);

app.post('/notiMailChimp', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})