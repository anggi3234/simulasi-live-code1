const express = require('express');
const router = require('./routes/index');

const app = express();
const port = 3001

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/', router)

app.listen(port, () => {
  console.log(`server on at port ${port}`)
})
