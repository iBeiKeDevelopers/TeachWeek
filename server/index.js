const express = require('express')
const fs = require('../js-local')
const app = express()
const port = 60041

app.get('/', (req, res) => {
    const dateText = req.query.date
    res.json(fs.dateInfo(dateText));
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
