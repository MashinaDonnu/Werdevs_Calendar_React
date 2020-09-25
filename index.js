const express = require('express')
const path = require('path')
const app  = express()

const PORT = process.env.PORT || 5000
app.use('/', express.static(path.join(__dirname, 'task', 'build')))
app.listen(PORT, () => {
    console.log(`Calendar app started on ${PORT}`)
})